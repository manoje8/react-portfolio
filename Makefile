# =============================================================================
#  React Portfolio — Makefile
#  Requires: GNU make + Git Bash (Windows) or any Unix shell
#
#  Quick reference:
#    make check          — audit everything, no changes written
#    make fix            — auto-correct everything fixable
#    make help           — show all targets with descriptions
# =============================================================================

.DEFAULT_GOAL := help
SHELL         := C:/Program Files/Git/bin/bash.exe

.PHONY: help \
        install start build clean analyze \
        check check-lint check-format check-deps check-build \
        fix fix-lint format \
        test audit hooks

RESET   := \033[0m
BOLD    := \033[1m
DIM     := \033[2m
RED     := \033[31m
GREEN   := \033[32m
YELLOW  := \033[33m
BLUE    := \033[34m
CYAN    := \033[36m
WHITE   := \033[97m

define log.section
	@printf "\n$(BOLD)$(BLUE)===  $(1)  ===$(RESET)\n"
endef

define log.run
	@printf "$(CYAN)  >>  $(WHITE)$(1)$(RESET)\n"
endef

define log.ok
	@printf "$(GREEN)  [OK]  $(1)$(RESET)\n"
endef

define log.warn
	@printf "$(YELLOW)  [!]  $(1)$(RESET)\n"
endef

define log.fail
	@printf "$(RED)  [X]  $(1)$(RESET)\n"
endef

define log.sep
	@printf "$(DIM)     -----------------------------------------$(RESET)\n"
endef


SRC_JS  := "src/**/*.{js,jsx}"
SRC_CSS := "src/**/*.css"
SRC_ALL := "src/**/*.{js,jsx,css}"


install:  ## Install all npm dependencies
	$(call log.section,Install)
	$(call log.run,npm install)
	@npm install
	$(call log.ok,Dependencies installed.)

hooks:    ## (Re-)install Husky git hooks
	$(call log.section,Git Hooks)
	$(call log.run,husky)
	@npx husky
	$(call log.ok,Hooks installed - pre-commit will run lint-staged.)


start:    ## Start the development server
	$(call log.section,Dev Server)
	$(call log.run,react-scripts start)
	@npm start

build:    ## Create a production build  →  ./build
	$(call log.section,Production Build)
	$(call log.run,react-scripts build)
	@npm run build
	$(call log.ok,Build complete -> ./build)

clean:    ## Remove build artifacts and lint cache
	$(call log.section,Clean)
	$(call log.run,rm -rf build .eslintcache)
	@rm -rf build .eslintcache
	$(call log.ok,Cleaned.)

analyze:  ## Visualize bundle sizes after build  [source-map-explorer]
	$(call log.section,Bundle Analysis)
	$(call log.run,build + source-map-explorer build/static/js/*.js)
	@CI=true npm run build --silent
	@npx source-map-explorer 'build/static/js/*.js'


##@ Check  —  read-only audit  (like ruff check)

check: check-lint check-format check-deps check-build  ## Run all checks (lint + format + deps + build)
	$(call log.sep)
	$(call log.ok,All checks passed.)

check-lint:    ## Check for lint errors without fixing  [ESLint]
	$(call log.section,Lint Check)
	$(call log.run,eslint src --ext .js,.jsx --max-warnings 0)
	@npx eslint src --ext .js,.jsx --max-warnings 0 || \
		($(call log.fail,Lint errors found - run: make fix-lint) && exit 1)
	$(call log.ok,No lint issues.)

check-format:  ## Check formatting without writing changes  [Prettier]
	$(call log.section,Format Check)
	$(call log.run,prettier --check $(SRC_ALL))
	@npx prettier --check $(SRC_ALL) || \
		($(call log.fail,Format issues found - run: make format) && exit 1)
	$(call log.ok,Format OK.)

check-deps:    ## Report unused or missing packages  [depcheck]
	$(call log.section,Dependency Check)
	$(call log.run,depcheck)
	@if npx depcheck; then \
		printf "$(GREEN)  OK  Dependencies OK.$(RESET)\n"; \
	else \
		printf "$(YELLOW)  !!  Unused or missing dependencies detected.$(RESET)\n"; \
		exit 1; \
	fi

check-build:   ## Verify the project compiles cleanly
	$(call log.section,Build Check)
	$(call log.run,react-scripts build --silent)
	@CI=true npm run build --silent 2>&1 | tail -5
	$(call log.ok,Build OK.)

##@ Fix  —  auto-correct all fixable issues  (like ruff check --fix)

fix: fix-lint format  ## Auto-fix lint errors and reformat all files
	$(call log.sep)
	$(call log.ok,All fixes applied - run: make check to verify.)

fix-lint:  ## Auto-fix safe ESLint errors in-place  [ESLint --fix]
	$(call log.section,Lint Fix)
	$(call log.run,eslint src --ext .js,.jsx --fix)
	@npx eslint src --ext .js,.jsx --fix
	$(call log.ok,Lint fixes applied.)

format:    ## Rewrite all source files to match Prettier style  [Prettier --write]
	$(call log.section,Format Fix)
	$(call log.run,prettier --write $(SRC_ALL))
	@npx prettier --write $(SRC_ALL)
	$(call log.ok,Formatting complete.)

##@ Quality

test:    ## Run the test suite (non-interactive, pass with no tests)
	$(call log.section,Test)
	$(call log.run,react-scripts test --watchAll=false --passWithNoTests)
	@npm test -- --watchAll=false --passWithNoTests
	$(call log.ok,Tests passed.)

audit:   ## Run npm security audit (moderate+ severity)
	$(call log.section,Security Audit)
	$(call log.run,npm audit --audit-level=moderate)
	@npm audit --audit-level=moderate
	$(call log.ok,Audit complete.)


help:
	@printf "\n$(BOLD)$(WHITE)React Portfolio$(RESET)  $(DIM)- Makefile$(RESET)\n"
	@printf "$(DIM)Usage: make <target>$(RESET)\n\n"
	@printf "$(BOLD)Commands:$(RESET)\n"
	@printf "  $(GREEN)%-16s$(RESET)  %s\n" "help" "Show this help message"
	@printf "  $(GREEN)%-16s$(RESET)  %s\n" "check" "Audit everything (no changes written)"
	@printf "  $(GREEN)%-16s$(RESET)  %s\n" "check-lint" "Lint check only"
	@printf "  $(GREEN)%-16s$(RESET)  %s\n" "check-format" "Format check only"
	@printf "  $(GREEN)%-16s$(RESET)  %s\n" "fix" "Fix lint errors + reformat"
	@printf "  $(GREEN)%-16s$(RESET)  %s\n" "fix-lint" "Fix lint errors only"
	@printf "  $(GREEN)%-16s$(RESET)  %s\n" "format" "Reformat source files only"
	@printf "  $(GREEN)%-16s$(RESET)  %s\n" "analyze" "Visualize bundle sizes"
	@printf "  $(GREEN)%-16s$(RESET)  %s\n" "build" "Production build"
	@printf "  $(GREEN)%-16s$(RESET)  %s\n" "clean" "Remove build output + cache"
	@printf "  $(GREEN)%-16s$(RESET)  %s\n" "hooks" "Reinstall git pre-commit hooks"
	@printf "\n$(DIM)Examples:$(RESET)\n"
	@printf "  $(CYAN)make check$(RESET)          - audit everything (no changes written)\n"
	@printf "  $(CYAN)make check-lint$(RESET)     - lint check only\n"
	@printf "  $(CYAN)make check-format$(RESET)   - format check only\n"
	@printf "  $(CYAN)make fix$(RESET)            - fix lint errors + reformat\n"
	@printf "  $(CYAN)make fix-lint$(RESET)       - fix lint errors only\n"
	@printf "  $(CYAN)make format$(RESET)         - reformat source files only\n"
	@printf "  $(CYAN)make analyze$(RESET)        - visualize bundle sizes\n"
	@printf "  $(CYAN)make build$(RESET)          - production build\n"
	@printf "  $(CYAN)make clean$(RESET)          - remove build output + cache\n"
	@printf "  $(CYAN)make hooks$(RESET)          - reinstall git pre-commit hooks\n"
	@printf "\n"
