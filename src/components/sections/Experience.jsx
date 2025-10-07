import { experience } from "../../assets/data"
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText)

const Experience = ({setTitle}) => {

    const experienceRef = useRef(null)

    useGSAP(() => {

        ScrollTrigger.create({
            trigger: experienceRef.current,
            start: "top top",
            onToggle: (toggle) => setTitle(toggle ? "Experience" : ""),
        })


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
                    end: () => `+=${(items.length - 1)  * 100}%`,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
                defaults: {ease: "none"},
            });

            items.forEach((item, index) => {
                if (index < items.length - 1) {
                    timeline.to(item, {
                        scale: 0.9,
                        borderRadius: "10px",
                    });
                    timeline.to(
                        items[index + 1],
                        { yPercent: 0 },
                        "<"
                    );
                }
            });
        })

    },[])

    return (
        <div ref={experienceRef} className="exp-wrapper experience h-full p-5" id="experience">

            <div className='exp-container max-w-full h-screen gap-5'>
                <div className="subtitle p-5">
                    <h1>Experience</h1>
                </div>
                <div className="exp-inner-container h-screen min-h-screen relative overflow-hidden">
                    <div className="exp-list w-full h-3/4 flex items-center justify-center relative">
                    {
                        experience?.map((data, id) => (
                            <article className="exp-list-item absolute top-0 left-50 w-full h-full flex items-center justify-center text-secondary" key={id}>
                                <div className="experience-label bg-white min-h-100 rounded-xl p-6 shadow-lg w-3/4">
                                    <h2>{data.title}<span>{data.duration}</span></h2>
                                    <span className="role">{data.subtitle}</span>
                                    {
                                        data.details.map((details, id) => (
                                            <p key={id} className="label-content">▪ {details}</p>
                                        ))
                                    }
                                    <div>
                                        {
                                            data.tags?.map((skill, id) => (
                                                <span key={id} className="badge badge-secondary">{skill}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience