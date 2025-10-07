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
            className="project-section w-full overflow-hidden"
            style={{ height: "100vh" }}
        >
            <div className="p-3">
                <h1 className="project-header text-4xl font-bold">Projects</h1>
            </div>

            <div
                ref={carouselRef}
                className="projects-carousel flex "
                style={{ height: "calc(100vh - 200px)" }}
            >
                {projects.webProjects.map((project, id) => (
                    <div
                        key={id}
                        className="panel px-4"
                    >
                        <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl h-3/4 p-6 flex md:flex-row gap-5">
                            <a target="_blank" href={project.preview} rel="noreferrer" className="w-1/2">
                                <img
                                    className="rounded-lg w-full h-full object-contain"
                                    src={project.image}
                                    alt={project.name}
                                />
                            </a>

                            <div className="flex flex-col justify-between w-1/2 py-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">{project.summary}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
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
                                    className="inline-block text-blue-600 hover:underline font-semibold text-lg"
                                >
                                    Source code →
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