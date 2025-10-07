import { useRef } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { skillName: "React.js", percentage: 90, icon: "logos:react", group: "frontend" },
    { skillName: "Redux", percentage: 85, icon: "logos:redux", group: "frontend" },
    { skillName: "JavaScript", percentage: 92, icon: "logos:javascript", group: "frontend" },
    { skillName: "HTML", percentage: 95, icon: "logos:html-5", group: "frontend" },
    { skillName: "CSS", percentage: 90, icon: "logos:css-3", group: "styling" },
    { skillName: "Bootstrap", percentage: 90, icon: "logos:bootstrap", group: "styling" },
    { skillName: "TailwindCSS", percentage: 88, icon: "logos:tailwindcss-icon", group: "styling" },
    { skillName: "GSAP", percentage: 70, icon: "logos:gsap", group: "styling" },
    { skillName: "Node.js", percentage: 85, icon: "logos:nodejs-icon", group: "backend" },
    { skillName: "Spring Boot", percentage: 75, icon: "logos:spring-icon", group: "backend" },
    { skillName: "FastAPI", percentage: 80, icon: "logos:fastapi", group: "backend" },
    { skillName: "MongoDB", percentage: 80, icon: "logos:mongodb", group: "database" },
    { skillName: "PostgreSQL", percentage: 78, icon: "logos:postgresql", group: "database" },
    { skillName: "MySQL", percentage: 82, icon: "logos:mysql", group: "database" },
    { skillName: "Git", percentage: 90, icon: "logos:git-icon", group: "tools" },
    { skillName: "Linux", percentage: 75, icon: "logos:linux-tux", group: "tools" },
    { skillName: "Chrome DevTools", percentage: 85, icon: "logos:google-chrome", group: "tools" },
    { skillName: "AWS", percentage: 70, icon: "logos:aws", group: "cloud" },
    { skillName: "Google Cloud", percentage: 65, icon: "logos:google-cloud", group: "cloud" },
];

// Group skills by category
const groupSkills = skills.reduce((acc, skill) => {
    acc[skill.group] = acc[skill.group] ? [...acc[skill.group], skill] : [skill];
    return acc;
}, {});

const Skill = ({setTitle}) => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            onToggle: (toggle) => setTitle(toggle ? "Skills" : ""),
        })
        gsap.to('.skill-card', {
            y: -20,
            duration:0.6,
            ease: "power3.inOut",
            stagger: 0.15,
        })

        gsap.fromTo(
            sectionRef.current.querySelectorAll(".skill-body"),
            { opacity: 0, y: 40, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <div ref={sectionRef} id="skill" className="py-16 px-6 lg:px-20">
            <div className="text-center text-white mb-12">
                <h1 className="text-4xl font-bold text-right">Skills</h1>
                <p className="mt-2">
                    Technologies & tools I use in development
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.keys(groupSkills).map((group) => (
                    <div
                        key={group}
                        className="skill-card p-6 rounded-2xl transition-all"
                    >
                        <div className="flex flex-wrap gap-4">
                            {groupSkills[group].map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="skill-body flex flex-col items-center justify-center w-20 h-20 bg-gray-100  rounded-xl cursor-pointer"
                                >
                                    <Icon icon={skill.icon} className="text-3xl" />
                                    <span className="text-sm mt-2 text-gray-700 dark:text-gray-300 text-center">
                                        {skill.skillName}
                                      </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
