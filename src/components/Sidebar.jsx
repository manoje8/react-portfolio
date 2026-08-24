import { useState, useEffect } from "react"
import "./Sidebar.css"

const navLinks = [
    { href: "#about", label: "About", section: "about" },
    { href: "#projects", label: "Projects", section: "projects" },
    { href: "#experience", label: "Experience", section: "experience" },
    { href: "#education", label: "Education", section: "education" },
]

const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const handleNavClick = () => setMenuOpen(false)

    return (
        <>
            {/* Desktop Sidebar */}
            {/*<div className="sidebar ">*/}
            {/*    <div className="sidebar-wrap">*/}
            {/*        <aside className="sidebar-aside border">*/}
            {/*            <div className="text-center">*/}
            {/*                <h1 id="logo"><a href="/">Mano Deepan</a></h1>*/}
            {/*            </div>*/}
            {/*            <nav id="main-menu" role="navigation" className="navbar" style={{ paddingTop: "2em" }}>*/}
            {/*                <div id="navbar">*/}
            {/*                    <ul>*/}
            {/*                        {navLinks.map((link) => (*/}
            {/*                            <li key={link.section}>*/}
            {/*                                <a href={link.href} data-nav-section={link.section}>{link.label}</a>*/}
            {/*                            </li>*/}
            {/*                        ))}*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </nav>*/}
            {/*            <div className="resume">*/}
            {/*                <a className="btn btn-dark" href="https://drive.google.com/file/d/1j-XhmOHanH3Nuj6t3JeNRJH28Y_P7Kg1/view?usp=drive_link" target="_blank" rel="noreferrer">Resume</a>*/}
            {/*            </div>*/}
            {/*        </aside>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* Mobile Top Bar */}
            <nav className={`mobile-nav ${scrolled ? "mobile-nav--scrolled" : ""}`}>
                <a href="/" className="mobile-nav__brand">MD</a>
                <button
                    className={`mobile-nav__hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    <span /><span /><span />
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div className={`mobile-drawer ${menuOpen ? "mobile-drawer--open" : ""}`} aria-hidden={!menuOpen}>
                <div className="mobile-drawer__overlay" onClick={() => setMenuOpen(false)} />
                <div className="mobile-drawer__panel">
                    <div className="mobile-drawer__header">
                        <span className="mobile-drawer__name">Mano Deepan</span>
                        <button className="mobile-drawer__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
                    </div>
                    <ul className="mobile-drawer__links">
                        {navLinks.map((link) => (
                            <li key={link.section}>
                                <a href={link.href} onClick={handleNavClick}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="mobile-drawer__footer">
                        <a
                            href="https://drive.google.com/file/d/1j-XhmOHanH3Nuj6t3JeNRJH28Y_P7Kg1/view?usp=drive_link"
                            target="_blank"
                            rel="noreferrer"
                            className="mobile-drawer__resume"
                            onClick={handleNavClick}
                        >
                            View Resume ↗
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar