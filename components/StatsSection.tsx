'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Play, Eye, Heart, TrendingUp } from 'lucide-react'

const StatsSection = () => {
  const stats = [
    {
      value: '15M+',
      label: 'YouTube Shorts',
      icon: <Play className="w-8 h-8" />,
      description: 'Views generated across YouTube Shorts platform'
    },
    {
      value: '7M+',
      label: 'TikTok Views',
      icon: <Eye className="w-8 h-8" />,
      description: 'Total views across TikTok content'
    },
    {
      value: '3M+',
      label: 'Instagram Reels',
      icon: <Heart className="w-8 h-8" />,
      description: 'Engagement on Instagram Reels content'
    }
  ]

  return (
    <section id="stats" className="relative py-20 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-500/5 rounded-full blur-3xl"></div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-neon-500/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
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
            <TrendingUp className="w-5 h-5 text-neon-500" />
            <span className="text-neon-400 font-medium">Proven Results</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-glow"
          >
            Helping Creators <span className="text-neon-500">Dominate</span> Shorts
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Delivering consistent, high-performing content that keeps your audience engaged and growing
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="relative bg-gradient-to-br from-neon-500/10 to-neon-500/5 backdrop-blur-sm border border-neon-500/20 rounded-3xl p-8 h-full transition-all duration-300 hover:border-neon-500/40 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] overflow-hidden">
                
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-500/0 via-neon-500/5 to-neon-500/0"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-16 h-16 bg-neon-500/20 rounded-2xl flex items-center justify-center text-neon-400 mb-6 group-hover:bg-neon-500/30 transition-all duration-300"
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Value */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <h3 className="text-6xl md:text-7xl font-bold text-neon-500 text-glow mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-2xl font-semibold text-white mb-3">
                      {stat.label}
                    </p>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-gray-300 text-sm leading-relaxed"
                  >
                    {stat.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to join our success stories?
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://calendly.com/internetmoneymedia-biz/30min', '_blank')}
            className="bg-neon-500 hover:bg-neon-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.6)]"
          >
            Start Your Growth Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection 