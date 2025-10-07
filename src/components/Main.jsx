import "./Main.css"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Project from "./sections/Project"
import Skill from "./sections/Skill"

import {useEffect, useRef, useState} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
    const [currentTitle, setCurrentTitle] = useState("")
    const mainRef = useRef(null);

    useGSAP(() => {
        const sections = mainRef.current.querySelectorAll(".parallax-section");

        sections.forEach((section, i) => {
            gsap.fromTo(
                section,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: true,
                    }
                }
            );
        });
    }, []);

    return (
        <section ref={mainRef} >
            <div><About title={currentTitle} setTitle={setCurrentTitle}/></div>
            <div className="parallax-section"><Skill setTitle={setCurrentTitle} /></div>
            <div><Project setTitle={setCurrentTitle} /></div>
            <div><Experience setTitle={setCurrentTitle} /></div>
            <div className="parallax-section"><Education setTitle={setCurrentTitle} /></div>
            <div className="parallax-section"><Contact setTitle={setCurrentTitle} /></div>
        </section>
    )
}

export default Main;
