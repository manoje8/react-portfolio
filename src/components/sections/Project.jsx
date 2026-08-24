import { projects } from "../../assets/data";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const pad = (n) => String(n).padStart(2, "0");

const Project = ({ setTitle }) => {
  const containerRef = useRef();
  const gridRef = useRef();
  const rowRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const nameRef = useRef();
  const descRef = useRef();
  const linkRef = useRef();

  const activateRef = useRef(null);
  const isClickScrollingRef = useRef(false);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        onToggle: (toggle) => setTitle(toggle ? "Projects" : ""),
      });

      SplitText.create(".project-header", {
        type: "words, chars",
        mask: "chars",
        onSplit: (props) =>
          gsap.from(props.chars, {
            x: -90,
            duration: 0.8,
            ease: "power3.inOut",
            stagger: 0.02,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
            },
          }),
      });

      gsap.from(gridRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      });

      const activate = (i) => {
        if (i === activeIndexRef.current) return;
        activeIndexRef.current = i;
        setActiveIndex(i);

        const project = projects[i];
        const targets = [nameRef.current, descRef.current, linkRef.current];

        gsap
          .timeline()
          .to(targets, {
            opacity: 0,
            y: -10,
            duration: 0.25,
            ease: "power2.in",
            stagger: 0.02,
          })
          .call(() => {
            nameRef.current.textContent = project.projectName;
            descRef.current.textContent = project.summary;
            linkRef.current.href = project.github;
          })
          .fromTo(
            targets,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.55, ease: "power3.out", stagger: 0.04 }
          );
      };

      activateRef.current = activate;

      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        ScrollTrigger.create({
          trigger: row,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => !isClickScrollingRef.current && activate(i),
          onEnterBack: () => !isClickScrollingRef.current && activate(i),
        });
      });
    },
    { scope: containerRef, dependencies: [] }
  );

  const handleRowClick = (i) => {
    activateRef.current?.(i);
    isClickScrollingRef.current = true;
    rowRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 600);
  };

  return (
    <div
      id="projects"
      ref={containerRef}
      className="project-section cbr relative w-full bg-[#0E1016] text-[#ECE9E1] px-6 md:px-16 lg:px-24 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#ECE9E1_1px,transparent_1px),linear-gradient(90deg,#ECE9E1_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="mb-20 md:mb-28 max-w-2xl">
        <h1 className="project-header text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
          Projects
        </h1>
        <h3 className="mt-6 max-w-md text-base sm:text-lg text-[#ECE9E1]/60">
          A selection of recent work - blending creativity and engineering.
        </h3>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-start">
        {/* Project list — shown second on mobile, first on md+ */}
        <div className="flex flex-col border-b border-white/10 order-2 md:order-1">
          {projects?.map((project, id) => (
            <div
              key={id}
              ref={(el) => (rowRefs.current[id] = el)}
              onClick={() => handleRowClick(id)}
              className="group border-t border-white/10 py-8 md:py-10 cursor-pointer"
            >
              <div className="flex items-baseline justify-between gap-6">
                <span
                  className={`font-mono text-xs transition-colors duration-300 ${
                    activeIndex === id ? "text-[#ECE9E1]" : "text-[#4B4F63]"
                  }`}
                >
                  {pad(id + 1)}
                </span>
                <span
                  className={`flex-1 text-2xl md:text-3xl font-semibold tracking-tight transition-all duration-300 ${
                    activeIndex === id
                      ? "text-[#ECE9E1] translate-x-1"
                      : "text-[#ECE9E1]/35 group-hover:text-[#ECE9E1]/70"
                  }`}
                >
                  {project.projectName}
                </span>
                <span
                  className={`font-mono text-sm transition-all duration-300 ${
                    activeIndex === id
                      ? "opacity-100 translate-x-0 text-[#8FE3C0]"
                      : "opacity-0 -translate-x-2"
                  }`}
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail panel — shown first on mobile, second on md+; sticky only on md+ */}
        <div className="order-1 md:order-2 md:sticky md:top-24 lg:top-32 self-start">
          <h2
            ref={nameRef}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            {projects?.[0]?.projectName}
          </h2>
          <p
            ref={descRef}
            className="mt-4 md:mt-6 max-w-md text-base leading-relaxed text-[#ECE9E1]/65"
          >
            {projects?.[0]?.summary}
          </p>
          <a
            ref={linkRef}
            href={projects?.[0]?.github}
            target="_blank"
            rel="noreferrer"
            className="mt-6 md:mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#8FE3C0] transition-colors hover:text-[#ECE9E1]"
          >
            View project
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
