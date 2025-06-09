'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, X, Star, Shield, Zap, Globe } from 'lucide-react'

const ComparisonSection = () => {
  const features = [
    'Based in the U.S.',
    'Understands American culture & trends',
    'Edits that feel distinctly American',
    'Consistent daily delivery',
    'Growth-focused strategy',
    'Real communication & feedback loop',
    'Premium post-production',
    'Quality over quantity'
  ]

  const foreignAgencyIssues = [
    'Based overseas',
    'No understanding of what performs in the U.S.',
    'Off-brand, outsourced edits',
    'Missed deadlines',
    'Follows basic blueprint',
    'Minimal communication',
    'High output, low quality',
    'No focus on channel performance'
  ]

  return (
    <section id="comparison" className="relative py-20 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl"></div>

      {/* Floating Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-neon-500/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-neon-500/10 border border-neon-500/20 rounded-full px-6 py-3 mb-8"
          >
            <Globe className="w-5 h-5 text-neon-400" />
            <span className="text-neon-400 font-medium">Our Agency vs. Typical Foreign Agencies</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-glow"
          >
            Why U.S.-Based Content <span className="text-neon-500">Wins</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We're creators just like you — based in the U.S. and rooted into what actually performs here. From trending formats to delivery speed, we get the culture, the humor, and the expectations. No weird edits. No missed deadlines. Just real content that connects with your audience and drives growth.
          </motion.p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Internet Money Media Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-neon-500/20 to-green-500/20 backdrop-blur-sm border-2 border-neon-500/30 rounded-3xl p-8 h-full relative overflow-hidden">
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 border-2 border-neon-500/50 rounded-3xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 255, 0, 0.3)",
                    "0 0 40px rgba(0, 255, 0, 0.6)",
                    "0 0 20px rgba(0, 255, 0, 0.3)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Header */}
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-12 h-12 bg-neon-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neon-500">Internet Money Media</h3>
                    <p className="text-neon-400">U.S.-Based Content Agency</p>
                  </div>
                </motion.div>

                {/* Features List */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group/item"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="w-6 h-6 bg-neon-500 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <Check className="w-4 h-4 text-black" />
                      </motion.div>
                      <p className="text-white font-medium group-hover/item:text-neon-400 transition-colors duration-300">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Quality Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 inline-flex items-center gap-2 bg-neon-500/20 border border-neon-500/40 rounded-full px-4 py-2"
                >
                  <Shield className="w-4 h-4 text-neon-500" />
                  <span className="text-neon-400 text-sm font-medium">Quality Guarantee</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Typical Foreign Agency Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-red-500/20 to-gray-500/20 backdrop-blur-sm border-2 border-red-500/30 rounded-3xl p-8 h-full relative overflow-hidden">
              {/* Header */}
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-400">Typical Foreign Agency</h3>
                    <p className="text-red-300">Overseas Content Mill</p>
                  </div>
                </motion.div>

                {/* Issues List */}
                <div className="space-y-4">
                  {foreignAgencyIssues.map((issue, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group/item"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: -90 }}
                        className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <X className="w-4 h-4 text-white" />
                      </motion.div>
                      <p className="text-gray-300 font-medium group-hover/item:text-red-400 transition-colors duration-300">
                        {issue}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Warning Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 rounded-full px-4 py-2"
                >
                  <Zap className="w-4 h-4 text-red-400" />
                  <span className="text-red-300 text-sm font-medium">Results May Vary</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience the difference with U.S.-based content creation
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://calendly.com/internetmoneymedia-biz/30min', '_blank')}
            className="bg-neon-500 hover:bg-neon-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.6)]"
          >
            Work With Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonSection 