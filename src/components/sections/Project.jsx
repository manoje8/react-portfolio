import { projects } from "../../assets/data"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"
import SplitText from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const Project = ({setTitle}) => {
    const containerRef = useRef()
    const carouselRef = useRef()

    useGSAP(() => {

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            onToggle: (toggle) => setTitle(toggle ? "Projects" : ""),
        })

        SplitText.create('.project-header', {
            type: "words, chars",
            mask: "chars",
            onSplit: (props) => {
                return gsap.from(props.chars, {
                    x: -90,
                    duration: 0.8,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                    }
                })
            }
        })


        // Horizontal scroll
        const panels = gsap.utils.toArray(".panel")
        if (panels.length === 0) return
        const totalWidth = panels.length * window.innerWidth

        const horizontalScroll = gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
        })

        ScrollTrigger.create({
            trigger: containerRef.current,
            pin: true,
            scrub: true,
            start: "top top",
            end: () => `+=${totalWidth - window.innerWidth}`,
            animation: horizontalScroll,
            anticipatePin: 1
        })

    }, [])

    return (
        <div
            ref={containerRef}
            className="project-section w-full overflow-hidden cbr py-10 md:py-20"
            style={{ height: "100vh" }}
        >

            <div className="px-6 md:px-12 lg:px-20 mb-10">
                <h1 className="project-header text-left md:text-right text-3xl sm:text-4xl md:text-5xl font-bold  tracking-tight">
                    Projects
                </h1>
                <p className="mt-3 text-sm sm:text-base">
                    A selection of my recent work — blending creativity and engineering.
                </p>
            </div>

            <div
                ref={carouselRef}
                className="projects-carousel flex w-max"
                style={{ height: "calc(100vh - 200px)" }}
            >
                {projects.webProjects.map((project, id) => (
                    <div
                        key={id}
                        className="panel flex-shrink-0 w-screen px-6 md:px-10 lg:px-16 flex justify-center"
                    >
                        <div className="bgr rounded-2xl shadow-xl w-full max-w-6xl h-[70vh] md:h-[75vh] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 transition-transform duration-300 hover:scale-[1.01]">
                            <a
                                href={project.preview}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full md:w-1/2 flex justify-center"
                            >
                                <img
                                    className="rounded-xl w-full h-[250px] sm:h-[300px] md:h-full object-contain"
                                    src={project.image}
                                    alt={project.projectName}
                                />
                            </a>

                            <div className="flex flex-col justify-between w-full md:w-1/2 text-center md:text-left">
                                <div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                                        {project.projectName}
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                                        {project.summary}
                                    </p>

                                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm sm:text-base mt-2"
                                >
                                    View Source Code →
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project