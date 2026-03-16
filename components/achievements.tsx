'use client'

import { motion } from 'framer-motion'
import { Trophy, Medal, Star, Award, Code } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'Finnovate Hack 2025',
    description: 'Secured 2nd Prize for innovative full-stack solution and financial technology integration',
    highlight: true,
  },
  {
    icon: Medal,
    title: 'Hack The Future 2024',
    description: '3rd Prize at IIEC IIT Gandhinagar for GovBizConnect, an AI platform for NIC code classification and government scheme recommendations.',
    highlight: true,
  },
  {
    icon: Award,
    title: 'HackIIITV',
    description: 'Won 2nd Prize in Web Track for building AI-powered design platform with gesture recognition',
    highlight: true,
  },
  {
    icon: Code,
    title: '500+ DSA Problems',
    description: 'Solved 500+ Data Structures & Algorithms problems across LeetCode and GeeksForGeeks platforms',
    highlight: true,
  },


]

export function Achievements() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: 'spring' } },
  }

  return (
    <section id="achievements" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Achievements & <span className="text-accent">Milestones</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition of my dedication and accomplishments in the tech community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`p-6 rounded-xl border transition-all duration-300 group ${
                    achievement.highlight
                      ? 'bg-gradient-to-br from-primary/20 to-accent/20 border-primary hover:border-accent'
                      : 'bg-card border-border hover:border-primary'
                  }`}
                >
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/20 text-primary group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                    {achievement.description}
                  </p>

                  {achievement.highlight && (
                    <div className="mt-4 inline-flex items-center gap-1 text-accent text-xs font-semibold">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
