import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../../assets/data";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

// Refined color palette & naming conventions for a professional tone
const groupMeta = {
  frontend: {
    label: "Frontend Architecture",
    text: "text-indigo-400",
    bg: "bg-indigo-500/5",
    icon: "mdi:monitor-dashboard",
  },
  styling: {
    label: "Design & Motion",
    text: "text-rose-400",
    bg: "bg-rose-500/5",
    icon: "mdi:palette-outline",
  },
  backend: {
    label: "Backend Engineering",
    text: "text-emerald-400",
    bg: "bg-emerald-500/5",
    icon: "mdi:server-network",
  },
  database: {
    label: "Database Systems",
    text: "text-amber-400",
    bg: "bg-amber-500/5",
    icon: "mdi:database-outline",
  },
  tools: { label: "DevOps & Tools", text: "text-sky-400", bg: "bg-sky-500/5", icon: "mdi:tools" },
  cloud: {
    label: "Cloud Infrastructure",
    text: "text-blue-400",
    bg: "bg-blue-500/5",
    icon: "mdi:cloud-outline",
  },
};

const groupSkills = skills.reduce((acc, skill) => {
  acc[skill.group] = acc[skill.group] ? [...acc[skill.group], skill] : [skill];
  return acc;
}, {});

const Skill = ({ setTitle }) => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Section Title trigger
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 20%",
      end: "bottom 80%",
      onToggle: (toggle) => setTitle(toggle ? "Skills" : ""),
    });

    // Sophisticated, slower fade-in for rows
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".skill-card"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Quick, organic reveal for individual tags
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".skill-badge"),
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen px-6 md:px-16 lg:px-24 py-28 bg-black text-zinc-100 relative z-10 select-none"
    >
      <div className="mb-16 md:mb-24">
        <p className="text-sm md:text-base text-green-400 mb-2 tracking-widest uppercase">
          What I bring to the table
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Skills & Expertise
        </h1>
        <div className="mt-6 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 border-t border-zinc-900 pt-2">
        {Object.keys(groupSkills).map((group) => {
          const meta = groupMeta[group] ?? {
            label: group,
            text: "text-zinc-400",
            bg: "bg-zinc-500/5",
            icon: "mdi:code-tags",
          };

          return (
            <div key={group} className=" group/card flex flex-col space-y-6">
              {/* Card Header: Typographically focused */}
              <div className="flex items-center justify-between border-b border-zinc-900">
                <h3 className="text-lg font-medium text-zinc-200 tracking-tight transition-colors duration-300 group-hover/card:text-white">
                  {meta.label}
                </h3>
                <div
                  className={`p-2 rounded-lg transition-all duration-500 ${meta.bg} text-zinc-500 group-hover/card:${meta.text}`}
                >
                  <Icon
                    icon={meta.icon}
                    className="text-xl transition-transform duration-500 group-hover/card:rotate-[12deg]"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {groupSkills[group].map((skill, idx) => (
                  <div
                    key={idx}
                    className="skill-badge group/badge relative overflow-hidden rounded px-3 py-1.5 bg-zinc-950 border border-zinc-900/80 hover:border-zinc-700/80 transition-all duration-300 cursor-default"
                  >
                    <span className="relative z-10 text-xs font-mono tracking-wide text-zinc-400 group-hover/badge:text-zinc-100 transition-colors duration-300">
                      {skill.skillName}
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-zinc-900 to-zinc-900/40 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
