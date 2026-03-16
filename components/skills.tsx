"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaPython,
  FaDatabase,
  FaJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";

import { DiCss3, DiHtml5 } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";

const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "C++", icon: CgCPlusPlus },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "HTML5", icon: DiHtml5 },
      { name: "CSS3", icon: DiCss3 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Linux", icon: FaLinux },
      { name: "SQL", icon: FaDatabase },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-muted transition"
                    >
                      <Icon className="text-3xl mb-2 text-primary" />
                      <p className="text-sm text-center">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
