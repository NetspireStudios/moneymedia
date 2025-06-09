'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Video, 
  Camera, 
  Megaphone, 
  TrendingUp, 
  Edit3, 
  Smartphone,
  Play,
  Target
} from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Production',
      description: 'Professional video content creation from concept to completion, optimized for social media platforms.',
      features: ['HD/4K Production', 'Social Media Optimization', 'Brand Storytelling', 'Fast Turnaround']
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Content Creation',
      description: 'Engaging visual content that captures attention and drives engagement across all platforms.',
      features: ['Photography', 'Graphic Design', 'Video Editing', 'Content Strategy']
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns that grow your audience and increase brand awareness.',
      features: ['Platform Management', 'Audience Growth', 'Engagement Strategy', 'Analytics & Reports']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Strategy',
      description: 'Data-driven digital marketing strategies that deliver measurable results and ROI.',
      features: ['Market Analysis', 'Competitor Research', 'Growth Planning', 'Performance Tracking']
    },
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: 'Post-Production',
      description: 'Professional editing and post-production services that bring your vision to life.',
      features: ['Video Editing', 'Color Grading', 'Sound Design', 'Motion Graphics']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile-First Content',
      description: 'Content specifically designed for mobile consumption and vertical video formats.',
      features: ['Vertical Videos', 'TikTok/Instagram', 'Mobile Optimization', 'Quick Edits']
    }
  ]

  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden">
      {/* Background Elements */}
              <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">
            Our <span className="text-neon-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital media solutions designed to elevate your brand 
            and maximize your online presence across all platforms.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
                             whileHover={{ 
                 scale: 1.02,
                 boxShadow: "0 20px 40px rgba(0, 255, 0, 0.2)"
               }}
              viewport={{ once: true }}
                             className="group bg-white/5 backdrop-blur-sm border border-neon-500/20 rounded-2xl p-6 hover:border-neon-500/40 transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-neon-500/20 rounded-xl flex items-center justify-center text-neon-400 mb-6 group-hover:bg-neon-500/30 transition-all duration-300"
              >
                {service.icon}
              </motion.div>

              {/* Title */}
                              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
                              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.05), duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <div className="w-2 h-2 bg-neon-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-neon-500/10 to-neon-400/10 border border-neon-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Let's discuss how our services can help you achieve your goals and grow your brand.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://calendly.com/internetmoneymedia-biz/30min', '_blank')}
              className="bg-neon-500 hover:bg-neon-400 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 glow-neon"
            >
              Book a Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection 