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
        ScrollTrigger.create({
            trigger: experienceRef.current,
            start: "top top",
            onToggle: (toggle) => setTitle(toggle ? "Experience" : ""),
        });

        const expContainer = document.querySelectorAll(".exp-container");

        expContainer.forEach((section) => {
            const innerContainer = section.querySelector(".exp-inner-container");
            const items = innerContainer.querySelectorAll(".exp-list-item");

            items.forEach((item, i) => {
                items.forEach((item, i) => {
                    if (i !== 0) {
                        gsap.set(item, { yPercent: 100 })
                    }
                })
            })

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    pin: true,
                    start: "top top",
                    end: () => `+=${(items.length - 1) * 100}%`,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
                defaults: { ease: "none" },
            });

            items.forEach((item, index) => {
                if (index < items.length - 1) {
                    timeline.to(item, {
                        scale: 0.9,
                        borderRadius: "12px",
                    });
                    timeline.to(
                        items[index + 1],
                        { yPercent: 0 },
                        "<"
                    );
                }
            });
        });
    }, []);

    return (
        <section
            ref={experienceRef}
            id="experience"
            className="exp-wrapper text-white py-16 px-4 sm:px-8 md:px-12 lg:px-20"
        >
            <div className="exp-container w-full h-screen flex flex-col justify-center items-center">
                {/* Section Header */}
                <header className="w-full mb-8 text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Experience
                    </h1>
                    <p className="text-white mt-2 text-sm sm:text-base">
                        A journey through my professional roles and achievements.
                    </p>
                </header>

                {/* Experience Items */}
                <div className="exp-inner-container relative w-full h-full overflow-hidden">
                    <div className="exp-list w-full h-full flex items-center justify-center relative">
                        {experience?.map((data, id) => (
                            <article
                                key={id}
                                className="exp-list-item absolute top-0 left-0 w-full h-full flex items-center justify-center"
                            >
                                <div className="experience-label bgr backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 w-[90%] sm:w-4/5 md:w-3/5 transition-all duration-500">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white flex flex-col sm:flex-row sm:items-center justify-between">
                                        {data.title}
                                        <span className="text-sm sm:text-base cbr mt-1 sm:mt-0">
                                          {data.duration}
                                        </span>
                                    </h2>

                                    <span className="block cbr font-medium mt-2 text-sm sm:text-base">
                                    {data.subtitle}
                                  </span>

                                    <ul className="mt-4 space-y-2 text-[11px] sm:text-base cbr leading-relaxed">
                                        {data.details.map((details, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                {details}
                                            </li>
                                        ))}
                                    </ul>

                                    {data.tags && (
                                        <div className="flex flex-wrap gap-2 mt-6">
                                            {data.tags.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 text-xs sm:text-sm bg-gray-100 text-gray-800 rounded-full border border-gray-200 hover:bg-gray-200 transition"
                                                >
                          {skill}
                        </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
