import { experience } from "../../assets/data";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Experience = ({ setTitle }) => {
    const experienceRef = useRef(null);

    useGSAP(() => {
        if (setTitle) {
            ScrollTrigger.create({
                trigger: experienceRef.current,
                start: "top top",
                onToggle: (toggle) => setTitle(toggle ? "Experience" : ""),
            });
        }

        const rows = gsap.utils.toArray(".exp-row");
        const splits = [];

        const setActiveIndex = (index) => {
            gsap.to(".exp-marker", {
                opacity: 0.35,
                duration: 0.4,
                ease: "power2.out",
                overwrite: "auto",
            });
            gsap.to(rows[index].querySelector(".exp-marker"), {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
                overwrite: "auto",
            });

            gsap.to(".exp-progress-fill", {
                scaleY: (index + 1) / rows.length,
                duration: 0.6,
                ease: "power3.out",
                overwrite: "auto",
            });

            const counter = experienceRef.current.querySelector(".exp-counter-current");
            if (counter) counter.textContent = String(index + 1).padStart(2, "0");
        };

        rows.forEach((row, index) => {
            const card = row.querySelector(".exp-card");
            const titleEl = row.querySelector(".exp-title-text");
            const subtitleEl = row.querySelector(".exp-subtitle");
            const bullets = row.querySelectorAll(".exp-bullet");
            const tags = row.querySelectorAll(".exp-tag");
            const duration = row.querySelector(".exp-duration");

            if (!titleEl || !subtitleEl) return;

            const titleSplit = new SplitText(titleEl, { type: "chars", charsClass: "exp-char" });
            const subtitleSplit = new SplitText(subtitleEl, { type: "lines", linesClass: "exp-line" });
            splits.push(titleSplit, subtitleSplit);

            gsap.set(titleSplit.chars, { yPercent: 110, opacity: 0 });
            gsap.set(subtitleSplit.lines, { yPercent: 100, opacity: 0 });
            gsap.set(card, { opacity: 0, y: 56, scale: 0.96 });
            gsap.set(duration, { opacity: 0, x: -8 });
            gsap.set(bullets, { opacity: 0, x: -16 });
            gsap.set(tags, { opacity: 0, y: 10 });

            const revealTl = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: "top 78%",
                    end: "top 40%",
                    toggleActions: "play none none reverse",
                },
                defaults: { ease: "power4.out" },
            });

            revealTl
                .to(card, { opacity: 1, y: 0, scale: 1, duration: 0.9 })
                .to(titleSplit.chars, { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.018 }, "<0.1")
                .to(duration, { opacity: 1, x: 0, duration: 0.5 }, "<")
                .to(subtitleSplit.lines, { yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, "<0.15")
                .to(bullets, { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }, "<0.1")
                .to(tags, { opacity: 1, y: 0, duration: 0.45, stagger: 0.04, ease: "back.out(1.7)" }, "<0.15");

            ScrollTrigger.create({
                trigger: row,
                start: "top center",
                end: "bottom center",
                onEnter: () => setActiveIndex(index),
                onEnterBack: () => setActiveIndex(index),
            });
        });

        return () => splits.forEach((split) => split.revert());
    }, []);

    const scrollToRow = (index) => {
        const row = experienceRef.current?.querySelectorAll(".exp-row")[index];
        if (row) row.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <section
            ref={experienceRef}
            id="experience"
            className="exp-wrapper text-white py-16 px-4 sm:px-8 md:px-12 lg:px-20"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,280px)_1fr] gap-10 lg:gap-16">

                {/* Sidebar: heading + counter + nav dots */}
                <aside className="lg:sticky lg:top-24 h-fit flex flex-col gap-8 order-1">
                    <header className="text-center sm:text-left">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            Experience
                        </h1>
                        <p className="cbr mt-2 text-sm sm:text-base max-w-xs mx-auto sm:mx-0 leading-relaxed">
                            A journey through my professional roles and achievements.
                        </p>
                    </header>

                    <div className="flex items-end gap-2 justify-center sm:justify-start">
                        <span className="exp-counter-current text-4xl sm:text-5xl font-bold text-[#ECE9E1] tabular-nums">
                            01
                        </span>
                        <span className="cbr text-sm mb-1">
                            / {String(experience?.length ?? 0).padStart(2, "0")}
                        </span>
                    </div>

                    {/* Desktop nav markers */}
                    <div className="hidden lg:flex items-stretch gap-4">
                        <div className="relative w-px bg-white/15 self-stretch">
                            <div className="exp-progress-fill absolute top-0 left-0 w-full h-full bg-[#ECE9E1] origin-top scale-y-0" />
                        </div>
                        <ul className="flex flex-col gap-8" style={{ padding: 0, margin: 0 }}>
                            {experience?.map((data, id) => (
                                <li key={id} style={{ listStyle: 'none' }}>
                                    <button
                                        type="button"
                                        onClick={() => scrollToRow(id)}
                                        className="exp-marker text-left opacity-35 transition-opacity cursor-pointer hover:opacity-60"
                                        style={{ background: 'none', border: 'none', padding: 0 }}
                                    >
                                        <span className="block text-xs uppercase tracking-widest cbr">
                                            {String(id + 1).padStart(2, "0")}
                                        </span>
                                        <span className="block text-sm text-white mt-1">{data.title}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Experience Cards */}
                <div className="flex flex-col gap-16 sm:gap-24 order-2">
                    {experience?.map((data, id) => (
                        <div key={id} className="exp-row">
                            <article className="exp-card rounded-2xl p-5 sm:p-8 md:p-10">
                                {/* Title + Duration */}
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                                    <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-white overflow-hidden">
                                        <span className="exp-title-text inline-block">{data.title}</span>
                                    </h2>
                                    <span className="exp-duration text-xs sm:text-sm cbr opacity-75 sm:mt-0 mt-0.5 flex-shrink-0">
                                        {data.duration}
                                    </span>
                                </div>

                                {/* Subtitle / Role */}
                                <h3 className="exp-subtitle cbr font-medium mt-1 text-sm sm:text-base md:text-lg overflow-hidden leading-snug">
                                    {data.subtitle}
                                </h3>

                                {/* Details */}
                                <p className="mt-4 cbr leading-relaxed text-sm sm:text-base">
                                    {data.details}
                                </p>

                                {/* Tags */}
                                {data.tags && data.tags.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {data.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="exp-tag px-2.5 py-1 text-xs font-mono rounded-md bg-white/10 text-[#ECE9E1]/75"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;