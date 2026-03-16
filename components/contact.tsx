'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'

export function Contact() {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/gungunagarwal19',
      color: 'hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gungun-agarwal-a667b028b/',
      color: 'hover:text-blue-500',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:gungun.agarwalnmk@gmail.com',
      color: 'hover:text-red-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="contact"
      className="relative py-20 px-4 bg-gradient-to-b from-background to-background/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's <span className="text-accent">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              I'm always excited to collaborate on interesting projects and discuss innovative ideas. Feel free to reach out through any of the channels below!
            </p>
          </div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Email */}
            <div className="flex items-center gap-6 p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 group">
              <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a
                  href="mailto:gungun.agarwalnmk@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  gungun.agarwalnmk@gmail.com
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Links Grid */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Social Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 group text-center"
                    >
                      <div className="mb-4 flex justify-center">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className={`w-6 h-6 text-muted-foreground ${link.color} transition-colors`} />
                        </div>
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-primary transition-colors">
                        {link.label}
                      </h4>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
