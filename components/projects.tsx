'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const projects = [
  {
    title: 'GovBizConnect',
    description:
      'AI-powered multi-modal search engine for NIC code classification and government scheme recommendations. Built with voice-enabled interface and multilingual support including regional languages for improved accessibility.',
    image: 'bg-gradient-to-br from-primary/30 to-accent/30',
    technologies: ['React', 'Flask', 'Python', 'TensorFlow', 'NLP', 'Google Cloud API'],
    github: 'https://github.com/gungunagarwal19/NicNumberFinder',
    highlight: true,
  },
  {
    title: 'DesignFlow XR',
    description:
      'Gesture-powered design canvas with hand gesture recognition and voice-to-design via Gemini API. Integrates real-time image search and automatic color palette extraction for seamless creative workflows.',
    image: 'bg-gradient-to-br from-accent/30 to-primary/30',
    technologies: ['React', 'Framer Motion', 'Node.js', 'Gemini API', 'Unsplash API'],
    github: 'https://github.com/gungunagarwal19/DesignFlow-XR---HareNTortoise',
    highlight: true,
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' } },
  }

  return (
    <section id="projects" className="relative py-20 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Showcasing my best work across full-stack development, innovative features, and user-centric design
            </p>
          </div>

          {/* Featured Projects (larger) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300"
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 ${project.image} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-between bg-gradient-to-b from-background/80 via-background/60 to-background/80 backdrop-blur-sm">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2 py-1 bg-primary/20 text-primary text-xs rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        <Github className="w-4 h-4" /> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
