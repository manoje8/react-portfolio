import { useRef } from "react";
import { education } from "../../assets/data";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Education = ({ setTitle }) => {
    const educationRef = useRef(null);
    const titleRef = useRef(null);

    useGSAP(() => {
        // High-end character reveal for the main heading
        const split = new SplitText(titleRef.current, { type: "chars" });
        gsap.from(split.chars, {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.04,
            ease: "power4.out",
            scrollTrigger: {
                trigger: educationRef.current,
                start: "top 75%",
            }
        });

        ScrollTrigger.create({
            trigger: educationRef.current,
            start: "top 20%",
            end: "bottom 80%",
            onToggle: (toggle) => setTitle(toggle ? "Education" : ""),
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#education",
                start: "top 75%",
                toggleActions: "play none none none",
            }
        });

        // Replaced jarring side-slides with an elegant vertical fade-up sequence
        tl.from(".education-column", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
        })
        .from(".certificate-column", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
        }, "-=0.8");

    }, []);

    return (
        <section
            ref={educationRef}
            className="relative min-h-screen text-zinc-100 py-15 px-6 md:px-16 lg:px-24 bg-black overflow-hidden select-none"
            id="education"
        >
            {/* Header Area */}
            <div className="text-left mb-10 lg:mb-16 border-b border-zinc-900 pb-2 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                        Academic <span className="text-zinc-500 italic font-serif">Credentials.</span>
                    </h2>
                </div>
            </div>

            {/* Main Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* Academic Journey Column */}
                <div className="education-column lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
                        <h3 className="text-xl font-medium text-zinc-200 tracking-tight">Institutional Path</h3>
                    </div>
                    
                    <div className="space-y-14 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-900 pl-6 md:pl-8">
                        {education?.map((data, id) => (
                            <article
                                key={id}
                                className="group relative space-y-3"
                            >
                                {/* Minimalist Timeline Node */}
                                <div className="absolute -left-[29px] md:-left-[37px] top-2 w-2 h-2 rounded-full bg-zinc-800 border border-black group-hover:bg-zinc-400 transition-colors duration-300" />
                                
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                    <h4 className="text-lg font-medium text-zinc-100 group-hover:text-white transition-colors duration-300">
                                        {data.title}
                                    </h4>
                                    <span className="text-xs font-mono text-zinc-500">
                                        {data.duration}
                                    </span>
                                </div>
                                
                                <p className="text-sm text-zinc-400 italic font-serif">{data.subtitle}</p>
                                
                                <ul className="space-y-2 text-sm text-zinc-400 pt-2">
                                    {data.details.map((detail, i) => (
                                        <li key={i} className="leading-relaxed flex items-start gap-2">
                                            <span className="text-zinc-600 mt-1.5 select-none text-[10px]">&bull;</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                                    {data.tags?.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 text-[11px] font-mono rounded bg-zinc-950 border border-zinc-900 text-zinc-400"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Certificates Column */}
                <div className="certificate-column lg:col-span-5 space-y-12">
                    <div className="flex items-center gap-3 border-b border-zinc-900 pb-2">
                        <h3 className="text-xl font-medium text-zinc-200 tracking-tight">Specializations</h3>
                    </div>

                    <div className="divide-y divide-zinc-900 border-b border-zinc-900">
                        <div className="group/cert py-4 flex items-center justify-between transition-colors duration-300">
                            <div className="flex items-center gap-4">
                                <Icon icon="mdi:react" className="text-zinc-500 group-hover/cert:text-sky-400 transition-colors duration-500 text-xl" />
                                <span className="text-sm font-medium text-zinc-300 group-hover/cert:text-white transition-colors duration-300">MERN Stack Development</span>
                            </div>
                            <span className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase opacity-0 group-hover/cert:opacity-100 transition-all duration-300 translate-x-2 group-hover/cert:translate-x-0">Verified</span>
                        </div>

                        <div className="group/cert py-4 flex items-center justify-between transition-colors duration-300">
                            <div className="flex items-center gap-4">
                                <Icon icon="mdi:database" className="text-zinc-500 group-hover/cert:text-emerald-400 transition-colors duration-500 text-xl" />
                                <span className="text-sm font-medium text-zinc-300 group-hover/cert:text-white transition-colors duration-300">MongoDB Specialist</span>
                            </div>
                            <span className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase opacity-0 group-hover/cert:opacity-100 transition-all duration-300 translate-x-2 group-hover/cert:translate-x-0">Verified</span>
                        </div>

                        <div className="group/cert py-4 flex items-center justify-between transition-colors duration-300">
                            <div className="flex items-center gap-4">
                                <Icon icon="mdi:sql-query" className="text-zinc-500 group-hover/cert:text-indigo-400 transition-colors duration-500 text-xl" />
                                <span className="text-sm font-medium text-zinc-300 group-hover/cert:text-white transition-colors duration-300">SQL & Database Design</span>
                            </div>
                            <span className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase opacity-0 group-hover/cert:opacity-100 transition-all duration-300 translate-x-2 group-hover/cert:translate-x-0">Verified</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;