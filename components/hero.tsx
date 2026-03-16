'use client'

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden">
      {/* Animated background curves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradCurve" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q300,200 600,100 T1200,100 L1200,0 L0,0 Z"
            fill="url(#gradCurve)"
          />
          <path
            d="M0,700 Q300,600 600,700 T1200,700 L1200,800 L0,800 Z"
            fill="url(#gradCurve)"
          />
        </svg>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-2"
            >
              <span className="font-handwriting text-accent text-5xl md:text-6xl block">Hey! I'm</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-5xl md:text-6xl font-bold block">
                Gungun Agarwal
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground space-y-2"
            >
              <div>Full Stack Developer | MERN Specialist</div>
              <div>Building impactful web experiences</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => window.open('/gungun_resume.pdf', '_blank')}
                className="px-8 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent/10 transition-colors"
              >
                View Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Profile card with polaroid style */}
          <motion.div
            initial={{ opacity: 0, rotate: -5, y: 20 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Circular profile image */}
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
                <Image
                  src="/profile.jpg"
                  alt="Gungun - Full Stack Developer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full opacity-30 blur-md" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary rounded-full opacity-20 blur-md" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-accent hover:text-primary transition-colors"
        >
          <span className="text-sm font-semibold">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  )
}
