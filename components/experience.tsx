'use client'

import { motion } from 'framer-motion'
import { Briefcase, BookOpen } from 'lucide-react'

const experiences = [
  {
    type: 'Internship',
    icon: Briefcase,
    title: 'Full Stack Developer Intern',
    company: 'Modelsuite.ai',
    period: 'Jul 2025 - Sep 2025',
    description:
      'Built three core platform features (support ticketing, task management, news feed) using MERN stack, Redux, shadcn UI, and dnd-kit, serving as critical user engagement tools with seamless Freshdesk integration for customer support automation.',
    highlights: [
      'Engineered drag-and-drop task management system with React, Redux, and dnd-kit enabling real-time tracking and prioritization with session-based authentication',
      'Developed 15+ RESTful APIs using Node.js/Express.js and MongoDB for tickets, tasks, and updates',
      'Integrated Freshdesk API to streamline support operations and automate customer support workflows',
    ],
    skills: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'dnd-kit', 'Freshdesk API', 'shadcn UI', 'RESTful APIs'],
  },

]

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Experience
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="relative">

                    {/* Content card */}
                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-primary text-lg font-semibold">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.highlights && (
                        <ul className="mb-4 space-y-2">
                          {exp.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                              <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20 group-hover:bg-accent/20 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
