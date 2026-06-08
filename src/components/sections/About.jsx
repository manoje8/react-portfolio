import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger)

const About = ({ title, setTitle }) => {
    const aboutRef = useRef(null)
    const particleContainerRef = useRef(null)

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const particlesOptions = {
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
            },
        },
        particles: {
            color: { value: "#ffffff" },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                enable: true,
                outModes: { default: "bounce" },
                random: true,
                speed: 1,
                straight: false,
            },
            number: {
                density: { enable: true, area: 800 },
                value: 40,
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
    };

    useGSAP(() => {

        ScrollTrigger.create({
            trigger: aboutRef.current,
            start: "top top",
            onToggle: (toggle) => setTitle(toggle ? "About" : ""),
        })

        const title = SplitText.create(".mano", {
            type: "words, chars, lines",
            mask: "chars",
            wordsClass: ""
        })

        const desc = SplitText.create(".mano-about", {
            type: "words, chars, lines",
            mask: "words",
            wordsClass: ""
        })

        gsap.from(title.chars, {
            y: 50,
            ease: "easeInOut",
            stagger: 0.1,
        })


        gsap.from(desc.lines, {
            filter: "blur(10px)",
            y: "-50",
            scale: 0.95,
            ease: "power2.inOut",
            duration: 0.5,
            stagger: {
                each: 0.3,
            }
        })

        gsap.from('.topbar', {
            x: -100,
            ease: "elastic.out",
            duration: 1,
        })



    }, [])

    return (
        <div ref={aboutRef} className="relative min-h-screen flex flex-col justify-center items-center z-100">
            <div ref={particleContainerRef} className="absolute inset-0">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={particlesOptions}
                />
            </div>
            <header className="topbar fixed top-3 left-5">
                <div className="flex justify-center items-center p-2 gap-1 bg-white text-black rounded-lg shadow-lg">
                    <button onClick={() => (window.location.href = "/")} className='bg-black py-2 px-[12px] text-white text-md md:text-xl rounded-lg cursor-pointer'>m</button>
                    <div className="flex item-center justify-center gap-1 text-md">
                        {
                            header.map((item, idx) => (
                                <a href={`#${item.toLowerCase()}`} className={`text-center p-1`} key={idx}>{item}</a>
                            ))
                        }
                    </div>
                </div>
            </header>
            <div className="w-full flex justify-between px-4 sm:px-6 md:px-10 py-6">
                <div className="text-left sm:text-left text-sm md:text-lg lg:text-xl max-w-3xl leading-relaxed">
                    <span className="block text-3xl sm:text-5xl md:text-[82px] font-bold mano mb-4">
                        MANO DEEPAN
                    </span>

                    <p className="mano-about mb-3">
                        Hello! I am software Engineer with 2 years of experience in full-stack development and a growing focus on AI/ML
                        engineering.
                    </p>

                    <p className="mano-about mb-3">
                        Skilled in Python, Java, JavaScript, and modern frameworks, with hands-on projects in machine
                        learning, time series analysis, and API-driven systems.
                    </p>

                    <p className="mano-about">
                        Seeking a Software Engineer role to contribute to
                        scalable solutions and AI-driven applications.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About

const header = ['SKILLS', 'PROJECTS', 'EXPERIENCE', 'EDUCATION']