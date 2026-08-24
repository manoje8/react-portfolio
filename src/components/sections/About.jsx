import {useEffect, useMemo, useRef, useState} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import {Icon} from "@iconify/react";

const header = ['PROJECTS', 'EXPERIENCE', 'EDUCATION']

const all_skills = {
    languages: 'Languages',
    ai: 'AI/ML & Agentic',
    frameworks: 'Frameworks',
    tools: 'Tools & Platforms'
}

const skill_list = {
    languages: ['Java', 'JavaScript', 'Python', 'SQL', 'NoSQL', 'C/C++'],
    ai: ['LLMs (GPT, Claude)', 'LangChain', 'RAG', 'Vector Databases', 'Embeddings', 'Prompt Engineering', 'Fine-tuning', 'Multi-Agent Orchestration', 'NLP', 'Time Series Analysis'],
    frameworks: ['Spring Boot', 'React.js', 'Node.js', 'FastAPI', 'TensorFlow', 'Transformers', 'NumPy', 'Pandas'],
    tools: ['Git', 'Linux', 'Azure', 'AWS', 'GCP', 'REST APIs', 'Gradle', 'JWT', 'Docker']
}

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger)

const About = ({ setTitle }) => {
    const [currentSkill, setCurrentSkill] = useState("languages")
    const [, setActiveIndex] = useState(0)
    const aboutRef = useRef(null)
    const particleContainerRef = useRef(null)
    const skillKeys = Object.keys(all_skills)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % skillKeys.length
                const nextKey = skillKeys[nextIndex]
                setCurrentSkill(nextKey)
                return nextIndex
            })
        }, 15000)

        return () => clearInterval(interval)
    }, [skillKeys])

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const particlesOptions = {
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
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
                value: 30,
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
    };

    useGSAP(() => {
        if (setTitle) {
            ScrollTrigger.create({
                trigger: aboutRef.current,
                start: "top top",
                onToggle: (toggle) => setTitle(toggle ? "About" : ""),
            })
        }

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

    const display_skill = useMemo(() => {
        const key = Object.keys(skill_list).find(e => e === currentSkill)
        return key ? skill_list[key] : []
    }, [currentSkill])

    const handleSkillChange = (skillKey) => {
        setCurrentSkill(skillKey)
        setActiveIndex(skillKeys.indexOf(skillKey))

        gsap.fromTo('.skill-item',
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.4, stagger: 0.08 }
        )
    }

    return (
        <div ref={aboutRef} id="about" className="relative bg-green min-h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Particle Background */}
            <div ref={particleContainerRef} className="absolute inset-0">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={particlesOptions}
                />
            </div>

            {/* Left Topbar — Nav links (hidden on mobile, mobile nav handles it) */}
            <header className="topbar fixed top-3 left-5 z-[100] hidden md:block">
                <div className="flex justify-center items-center p-2 gap-1 bg-white text-black rounded-lg shadow-lg">
                    <button onClick={() => (window.location.href = "/")} className='bg-black py-2 px-[12px] text-white text-md md:text-xl rounded-lg cursor-pointer'>m</button>
                    <div className="flex items-center justify-center gap-1 text-sm md:text-md">
                        {
                            header.map((item, idx) => (
                                <a href={`#${item.toLowerCase()}`} className={`text-center p-1 px-2`} key={idx}>{item}</a>
                            ))
                        }
                    </div>
                </div>
            </header>

            {/* Right Topbar — Social icons (always visible, positioned to avoid mobile nav) */}
            <header className="topbar fixed bottom-3 right-5 z-[100]" style={{ bottom: 'calc(56px + 0.75rem)' }}>
                <div className="flex justify-center items-center p-2 gap-1 bg-white text-black rounded-lg shadow-lg md:mt-0" style={{ marginBottom: '500px' }}>
                    <div className="flex items-center justify-center gap-1">
                        <div className="flex justify-center space-x-3 md:space-x-4">
                            {[
                                { icon: "mdi:email", href: "mailto:manodeepan2001@gmail.com", color: "hover:text-blue-700" },
                                { icon: "mdi:linkedin", href: "https://www.linkedin.com/in/mano-deepan-b-392361208", color: "hover:text-blue-700" },
                                { icon: "mdi:github", href: "https://github.com/manoje8", color: "hover:text-gray-800" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${social.color}`}
                                >
                                    <Icon icon={social.icon} height={28} width={28} className="md:hidden" />
                                    <Icon icon={social.icon} height={36} width={36} className="hidden md:block" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="w-full flex flex-col md:flex-row md:justify-between px-4 sm:px-6 md:px-10 py-6 z-[10] mt-16 md:mt-0">
                {/* Left: Name + Description + Skill Tabs */}
                <div className="w-full md:w-[55%] text-left text-sm md:text-lg lg:text-xl leading-relaxed">
                    <span className="block text-4xl sm:text-5xl md:text-[72px] lg:text-[82px] font-bold mano mb-4 leading-none">
                        MANO DEEPAN
                    </span>

                    <p className="mano-about mb-3 text-sm sm:text-base md:text-lg">
                        Hello! I am a Software Engineer with 2 years of experience in full-stack development and a growing focus on AI/ML engineering.
                    </p>

                    <p className="mano-about mb-3 text-sm sm:text-base md:text-lg">
                        Skilled in Python, Java, JavaScript, and modern frameworks, with hands-on projects in machine learning, time series analysis, and API-driven systems.
                    </p>

                    <p className="mano-about text-sm sm:text-base md:text-lg">
                        Seeking a Software Engineer role to contribute to scalable solutions and AI-driven applications.
                    </p>

                    {/* Skill Category Tabs */}
                    <div className="mt-8 md:mt-16">
                        <ul className="skill-list flex flex-wrap gap-2 text-xs sm:text-sm md:text-base" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                            {
                                Object.entries(all_skills).map(([key, label]) => {
                                    const isActive = key === currentSkill
                                    return (
                                        <li
                                            key={key}
                                            className={`skill-tab cursor-pointer px-3 py-1.5 rounded-lg transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-white text-black border-2 border-white shadow-lg'
                                                    : 'text-white border-2 border-white/30 hover:border-white/70'
                                            }`}
                                            onClick={() => handleSkillChange(key)}
                                            style={{ listStyle: 'none' }}
                                        >
                                            {label}
                                            {isActive && (
                                                <span className="ml-1.5 inline-block w-1.5 h-1.5 bg-[#595959] rounded-full animate-pulse" style={{ margin: '0 0 0 6px' }}></span>
                                            )}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                {/* Right: Skill Items + Resume */}
                <div className="w-full md:w-[40%] flex flex-col justify-between mt-8 md:mt-0 gap-6">
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {
                            display_skill.map((skill, key) => {
                                return (
                                    <div
                                        key={key}
                                        className="skill-item bg-white/20 px-3 py-1.5 rounded-lg text-white text-xs sm:text-sm md:text-base hover:bg-white/30 transition-all duration-300"
                                    >
                                        {skill}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <a
                        href="https://drive.google.com/file/d/1HPKjFdKSsdb8m8rCMBVXPifgRcg3OauV/view?usp=drive_link"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-white flex items-center justify-center mb-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                        <span className="text-black py-3 text-sm font-medium tracking-wide">View Resume ↗</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About