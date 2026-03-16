'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-8 px-4 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Gungun. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            Built with <span className="text-accent">React</span> & <span className="text-primary">Next.js</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
