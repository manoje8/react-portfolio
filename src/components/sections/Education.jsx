import { useRef } from "react";
import { education } from "../../assets/data";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const certificates = ["MERN Stack Development", "MongoDB", "SQL & Database Design"]

const Education = ({ setTitle }) => {
    const educationRef = useRef(null);
    const titleRef = useRef(null);

    useGSAP(() => {
        const headingSplit = new SplitText(titleRef.current, { type: "chars" });
        gsap.from(headingSplit.chars, {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.04,
            ease: "power4.out",
            scrollTrigger: {
                trigger: educationRef.current,
                start: "top 75%",
            },
        });

        ScrollTrigger.create({
            trigger: educationRef.current,
            start: "top 20%",
            end: "bottom 80%",
            onToggle: (toggle) => setTitle(toggle ? "Education" : ""),
        });

        const rowSplits = [];
        const rows = gsap.utils.toArray(".edu-row");

        const setActiveRow = (index) => {
            rows.forEach((row, i) => {
                const marker = row.querySelector(".edu-marker");
                gsap.to(marker, {
                    backgroundColor: i === index ? "#e4e4e7" : "#27272a",
                    scale: i === index ? 1.5 : 1,
                    duration: 0.4,
                    ease: "power2.out",
                    overwrite: "auto",
                });
            });
        };

        gsap.to(".edu-line-fill", {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".edu-timeline",
                start: "top 70%",
                end: "bottom 60%",
                scrub: 0.6,
            },
        });

        rows.forEach((row, index) => {
            const titleEl = row.querySelector(".edu-title-text");
            const subtitle = row.querySelector(".edu-subtitle");
            const bullets = row.querySelectorAll(".edu-bullet");
            const tags = row.querySelectorAll(".edu-tag");
            const duration = row.querySelector(".edu-duration");
            const marker = row.querySelector(".edu-marker");

            const titleSplit = new SplitText(titleEl, { type: "chars", charsClass: "edu-char" });
            rowSplits.push(titleSplit);

            gsap.set(titleSplit.chars, { yPercent: 110, opacity: 0 });
            gsap.set([subtitle, duration], { opacity: 0, y: 10 });
            gsap.set(bullets, { opacity: 0, x: -14 });
            gsap.set(tags, { opacity: 0, y: 8 });
            gsap.set(marker, { scale: 0 });

            const revealTl = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                defaults: { ease: "power3.out" },
            });

            revealTl
                .to(marker, { scale: 1, duration: 0.5, ease: "back.out(2)" })
                .to(titleSplit.chars, { yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.015 }, "<0.05")
                .to(duration, { opacity: 1, y: 0, duration: 0.5 }, "<")
                .to(subtitle, { opacity: 1, y: 0, duration: 0.5 }, "<0.05")
                .to(bullets, { opacity: 1, x: 0, duration: 0.45, stagger: 0.06 }, "<0.1")
                .to(tags, { opacity: 1, y: 0, duration: 0.4, stagger: 0.03, ease: "back.out(1.7)" }, "<0.1");

            ScrollTrigger.create({
                trigger: row,
                start: "top center",
                end: "bottom center",
                onEnter: () => setActiveRow(index),
                onEnterBack: () => setActiveRow(index),
            });
        });

        const certTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".certificate-column",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        certTl
            .from(".certificate-column", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" })
            .from(".cert-row", { opacity: 0, x: 16, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.4");

        return () => {
            headingSplit.revert();
            rowSplits.forEach((split) => split.revert());
        };
    }, []);

    return (
        <section
            ref={educationRef}
            className="relative min-h-screen cbr w-full bg-[#0E1016] text-[#ECE9E1] text-zinc-100 py-14 px-6 md:px-16 lg:px-24 overflow-hidden select-none"
            id="education"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#ECE9E1_1px,transparent_1px),linear-gradient(90deg,#ECE9E1_1px,transparent_1px)] [background-size:64px_64px]"
            />
            <div className="text-left mb-10 lg:mb-16 border-b border-zinc-900 pb-2 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                        Academic <span className="text-zinc-500 font-serif">Credentials.</span>
                    </h1>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                <div className="education-column lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
                        <h2 className="text-xl font-medium text-zinc-200 tracking-tight">Institutional Path</h2>
                    </div>

                    <div className="edu-timeline relative space-y-14 pl-6 md:pl-8">
                        <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-900 overflow-hidden">
                            <div
                                className="edu-line-fill absolute top-0 left-0 w-full h-full bg-zinc-400 origin-top"
                                style={{ transform: "scaleY(0)" }}
                            />
                        </div>

                        {education?.map((data, id) => (
                            <article key={id} className="edu-row group relative space-y-3">
                                <div className="edu-marker absolute -left-[29px] md:-left-[37px] top-2 w-2 h-2 rounded-full bg-zinc-800 border border-black" />

                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                    <p className="text-2xl font-medium text-zinc-100 group-hover:text-white transition-colors duration-300 overflow-hidden">
                                        <span className="edu-title-text inline-block">{data.title}</span>
                                    </p>
                                    <span className="edu-duration text-md font-mono text-zinc-500">
                                        {data.duration}
                                    </span>
                                </div>

                                <p className="edu-subtitle text-lg text-zinc-400 italic font-serif">{data.subtitle}</p>

                                <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                                    {data.tags?.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="edu-tag px-2.5 py-1 text-md font-mono rounded-lg bg-zinc-950 text-zinc-400"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="certificate-column lg:col-span-5 lg:sticky lg:top-24 h-fit space-y-12">
                    <div className="flex items-center gap-3 border-b border-zinc-900 pb-2">
                        <h2 className="text-xl font-medium text-zinc-200 tracking-tight">Specializations</h2>
                    </div>

                    <div className="divide-y divide-zinc-900 border-b border-zinc-900">
                        {
                            certificates?.map((certificate, id) => (
                                <div key={id} className="cert-row group/cert py-4 flex items-center justify-between transition-colors duration-300">
                                    <div className="flex items-center gap-4 cursor-pointer">
                                        <span>{id+1}.</span>
                                        <span className="text-lg font-medium text-zinc-300 group-hover/cert:text-white transition-colors duration-300">{certificate}</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase opacity-0 group-hover/cert:opacity-100 transition-all duration-300 translate-x-2 group-hover/cert:translate-x-0">Verified</span>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;