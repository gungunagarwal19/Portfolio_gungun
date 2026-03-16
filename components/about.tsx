'use client'

import { motion } from 'framer-motion'

export function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const quickFacts = [
    {
      label: 'Education',
      value: 'IIIT Vadodara',
      subvalue: 'B.Tech CSE',
    },
    {
      label: 'Specialization',
      value: 'Full Stack (MERN)',
    },
    {
      label: 'DSA Problems',
      value: '500+',
    },
    {
      label: 'Internship',
      value: 'Modelsuite.ai',
    },
  ]

  const primaryStack = ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Tailwind']

  return (
    <section id="about" className="relative py-20 px-4 mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left - About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  About <span className="text-accent">Me</span>
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a Full Stack Developer, I have a passion for building tools, frameworks, and applications that allow others to work better. I have a strong foundation on both the Front End and Back End sides of Development, which creates an amazing Digital Experience.
                </p>

                <p>
                  I have taken this approach into my journey within Technology through Continuous Learning and Implementation of Technologies to build my skills. My internship at Modelsuite.ai has allowed me to contribute to AI driven Solutions through Technology and through my passion for Problem Solving with over 500+ Data Structures & Algorithms Challenges completed. This has also expanded my ability to use Computational Thinking.
                </p>

                <p>
                  Outside of programming I am always looking to learn more about Technology, Competing in Hackathons or Helping Open Source Developers. I want to create Products that not only serve a Purpose but also create a Pleasurable Experience for the User.
                </p>
              </div>
            </motion.div>

            {/* Right - Quick Facts */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Quick Facts</h3>
              <div className="space-y-4">
                {quickFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/40 hover:border-primary/80 transition-all duration-300 group"
                  >
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider group-hover:text-primary transition-colors">
                      {fact.label}
                    </p>
                    <p className="text-xl font-bold text-white mt-2 group-hover:text-primary transition-colors">
                      {fact.value}
                    </p>
                    {fact.subvalue && (
                      <p className="text-sm text-muted-foreground mt-1 group-hover:text-accent transition-colors">
                        {fact.subvalue}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Primary Stack */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Primary Stack</h3>
            <div className="flex flex-wrap gap-3">
              {primaryStack.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary font-medium hover:border-primary/80 hover:bg-primary/30 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
