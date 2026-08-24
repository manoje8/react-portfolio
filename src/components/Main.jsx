import "./Main.css"
import About from "./sections/About"
import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Project from "./sections/Project"
import Sidebar from "./Sidebar"

import {useRef} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
    const mainRef = useRef(null);

    useGSAP(() => {
        const sections = mainRef.current.querySelectorAll(".parallax-section");

        sections.forEach((section) => {
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
                        end: "bottom 80%",
                        scrub: true,
                    }
                }
            );
        });
    }, []);

    return (
        <>
            <Sidebar />
            <section ref={mainRef} className="main">
                <div><About /></div>
                <div><Project /></div>
                <div><Experience /></div>
                <div><Education /></div>
            </section>
        </>
    )
}

export default Main;
