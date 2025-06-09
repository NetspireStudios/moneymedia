'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, TrendingUp, Users, Zap } from 'lucide-react'
import { Button } from './ui/button'

const HeroSection = () => {
  const [particles, setParticles] = useState<Array<{
    left: number;
    top: number;
    width: number;
    height: number;
    background: string;
  }>>([])

  useEffect(() => {
    // Generate particles only on client side
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: 2 + Math.random() * 6,
      height: 2 + Math.random() * 6,
      background: i % 4 === 0 ? '#00FF00' : i % 4 === 1 ? '#00FF0060' : i % 4 === 2 ? '#00FF0040' : '#00FF0020',
    }))
    setParticles(newParticles)
  }, [])

  const stats = [
    { icon: <Play className="w-6 h-6" />, value: '1M+', label: 'Views Generated' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '500%', label: 'Average Growth' },
    { icon: <Users className="w-6 h-6" />, value: '100+', label: 'Clients Served' },
    { icon: <Zap className="w-6 h-6" />, value: '24/7', label: 'Support' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Enhanced Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern animate-grid-pulse opacity-20"></div>
      <motion.div
        className="absolute inset-0 grid-pattern opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-500/10 via-transparent to-neon-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      
      {/* Enhanced Floating Elements */}
      {particles.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full animate-particle-float"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            background: particle.background,
          }}
          animate={{
            y: [0, -80 - (i * 2), 0],
            x: [0, (i * 2) - 20, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 360, 720]
          }}
          transition={{
            duration: 6 + (i * 0.2),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Large Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-neon-500/30 rounded-full blur-2xl animate-floating-glow"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-neon-400/20 rounded-full blur-3xl animate-floating-glow"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-neon-500/15 rounded-full blur-xl animate-floating-glow"
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
          scale: [0.8, 1.4, 0.8],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 relative"
          >
            <motion.span 
              className="text-glow inline-block"
              animate={{
                textShadow: [
                  '0 0 10px rgba(255, 255, 255, 0.5)',
                  '0 0 20px rgba(255, 255, 255, 0.8)',
                  '0 0 10px rgba(255, 255, 255, 0.5)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Internet
            </motion.span>{' '}
            <motion.span 
              className="text-neon-500 text-glow inline-block relative"
              animate={{
                textShadow: [
                  '0 0 20px rgba(0, 255, 0, 0.5)',
                  '0 0 40px rgba(0, 255, 0, 0.8)',
                  '0 0 20px rgba(0, 255, 0, 0.5)'
                ],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Money
              <motion.div
                className="absolute -inset-2 bg-neon-500/10 rounded-lg blur-lg"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1.1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.span>{' '}
            <motion.span 
              className="text-glow inline-block"
              animate={{
                textShadow: [
                  '0 0 10px rgba(255, 255, 255, 0.5)',
                  '0 0 20px rgba(255, 255, 255, 0.8)',
                  '0 0 10px rgba(255, 255, 255, 0.5)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              Media
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Elevate Your Digital Presence with{' '}
            <span className="text-neon-400 font-semibold">Cutting-Edge Content Creation</span>{' '}
            and Strategic Media Production
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Transform your brand with professional video content, social media strategies, 
            and digital marketing solutions that drive real results and maximize your online impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center items-center mb-16"
          >
            <Button
              variant="glow"
              size="xl"
              onClick={() => window.open('https://calendly.com/internetmoneymedia-biz/30min', '_blank')}
              className="group"
            >
              <span>Get Started Today</span>
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.div>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-neon-500/20 rounded-xl p-4 hover:border-neon-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-2 text-neon-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection 