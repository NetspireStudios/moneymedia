'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const socialLinks = [
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@internetmoneyclip?lang=en',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@InternetMoneyClips',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/internetmoneyclip/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-neon-500/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <Image
                src="/images/internetmoneymedia.svg"
                alt="Internet Money Media Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transform your brand with professional video content, social media strategies, 
              and digital marketing solutions that drive real results and maximize your online impact.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-neon-500" />
                <span className="text-sm">hello@internetmoney.media</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-neon-500" />
                <span className="text-sm">Available 24/7 for consultation</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-neon-500" />
                <span className="text-sm">Global Service, Remote First</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Video Production',
                'Content Creation',
                'Social Media Marketing',
                'Digital Strategy',
                'Post-Production',
                'Mobile-First Content'
              ].map((service, index) => (
                <li key={service}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-neon-400 transition-colors duration-300 text-sm"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media & Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Connect With Us</h4>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  whileHover={{ 
                    scale: 1.2, 
                    boxShadow: "0 0 20px rgba(0, 255, 0, 0.4)" 
                  }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-neon-500/10 border border-neon-500/20 rounded-xl flex items-center justify-center text-neon-400 hover:bg-neon-500/20 hover:border-neon-500/40 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Quick Links */}
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Book Consultation', href: 'https://calendly.com/internetmoneymedia-biz/30min' }
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-neon-400 transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    {link.name}
                    {link.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-neon-500/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Internet Money Media. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-neon-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 