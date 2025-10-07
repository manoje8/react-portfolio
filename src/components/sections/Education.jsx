import { education } from "../../assets/data"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import {useRef} from "react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Education = ({setTitle}) => {
    const educationRef = useRef(null)
    const titleRef = useRef(null)

    useGSAP(() => {

        SplitText.create(titleRef.current, {
            type: "chars",
            mask: "chars",
            onSplit: (split) => {
                return gsap.from(split.chars, {
                    y: 50,
                    ease: "easeInOut",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: educationRef.current,
                        start: "top top",
                    }
                })
            }
        })

        ScrollTrigger.create({
            trigger: educationRef.current,
            start: "top top",
            onToggle: (toggle) => setTitle(toggle ? "Education" : ""),
        })
        // Timeline for staggered animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#education",
                start: "top 80%", // animation starts when component enters viewport
                toggleActions: "play none none none",
            }
        });

        // Animate education card first
        tl.from(".education-card", {
            x: -150,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
        });

        // Then certificates card
        tl.from(".certificate-card", {
            x: 150,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
        }, "-=0.6"); // overlap a bit for smooth effect

    }, []);

    return (
        <section
            ref={educationRef}
            className="relative min-h-screen text-white py-16 px-6 md:px-12 overflow-hidden"
            id="education"
        >
            {/* Header */}
            <div className="text-right mb-12">
                <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold tracking-tight text-white relative inline-block">
                    Education
                </h1>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-10 items-stretch">

                {/* Education Card */}
                <div className="education-card flex-1 bg-white text-black rounded-2xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <Icon icon="mdi:school" className="text-green-400 text-3xl" />
                        Academic Journey
                    </h2>
                    <div className="space-y-6">
                        {education?.map((data, id) => (
                            <article
                                key={id}
                                className="bg-gray-900/70 p-5 rounded-xl shadow-md hover:shadow-xl transition-all"
                            >
                                <h3 className="text-xl font-semibold text-green-400">
                                    {data.title} <span className="text-sm text-gray-400 ml-2">({data.duration})</span>
                                </h3>
                                <p className="text-gray-300 italic mb-3">{data.subtitle}</p>
                                <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
                                    {data.details.map((details, i) => (
                                        <li key={i}>{details}</li>
                                    ))}
                                </ul>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {data.tags?.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-full bg-green-600/20 border border-green-500/40 text-green-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Certificate Card */}
                <div className="certificate-card flex-1 bg-white text-black backdrop-blur-md rounded-2xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <Icon icon="mdi:certificate" className="text-yellow-400 text-3xl" />
                        Certificates
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-gray-900/70 p-4 rounded-lg flex items-center gap-3 hover:shadow-lg transition-all">
                            <Icon icon="mdi:react" className="text-sky-400 text-2xl" />
                            <span>MERN Stack Development</span>
                        </div>
                        <div className="bg-gray-900/70 p-4 rounded-lg flex items-center gap-3 hover:shadow-lg transition-all">
                            <Icon icon="mdi:database" className="text-green-400 text-2xl" />
                            <span>MongoDB Specialist</span>
                        </div>
                        <div className="bg-gray-900/70 p-4 rounded-lg flex items-center gap-3 hover:shadow-lg transition-all">
                            <Icon icon="mdi:sql-query" className="text-indigo-400 text-2xl" />
                            <span>SQL & Database Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;
