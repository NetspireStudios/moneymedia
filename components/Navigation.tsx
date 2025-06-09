'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
import { smoothScrollTo } from '@/lib/utils'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // For desktop, always show nav after scrolling
      setIsScrolled(currentScrollY > 10)
      
      // For mobile, hide when at top, show when scrolling down
      if (window.innerWidth < 1024) { // lg breakpoint
        if (currentScrollY < 50) {
          // Hide when near top
          setShowMobileNav(false)
        } else if (currentScrollY < lastScrollY) {
          // Show when scrolling up
          setShowMobileNav(true)
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Hide when scrolling down (after 100px)
          setShowMobileNav(true) // Keep visible when scrolling down too
        }
      } else {
        // Always show on desktop
        setShowMobileNav(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    // Set initial state based on screen size
    const setInitialState = () => {
      if (window.innerWidth >= 1024) {
        setShowMobileNav(true)
      } else {
        setShowMobileNav(window.scrollY > 50)
      }
    }
    
    setInitialState()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', setInitialState)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', setInitialState)
    }
  }, [lastScrollY])

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#stats' },
    { name: 'Why Us', href: '#comparison' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ]

  const socialLinks = [
    { name: 'TikTok', href: 'https://www.tiktok.com/@internetmoneyclip?lang=en' },
    { name: 'YouTube', href: 'https://www.youtube.com/@InternetMoneyClips' },
    { name: 'Instagram', href: 'https://www.instagram.com/internetmoneyclip/' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ 
        y: showMobileNav ? 0 : -100,
        opacity: showMobileNav ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-neon-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <Image
              src="/images/internetmoneymedia.svg"
              alt="Internet Money Media Logo"
              width={120}
              height={40}
              className="h-8 w-auto sm:h-10"
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => smoothScrollTo(item.href.substring(1))}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-white hover:text-neon-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="glow"
                size="lg"
                onClick={() => window.open('https://calendly.com/internetmoneymedia-biz/30min', '_blank')}
              >
                Book Now
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:hidden"
          >
            <button
              className="text-white hover:text-neon-400 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-neon-500/20 py-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    smoothScrollTo(item.href.substring(1))
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-white hover:text-neon-400 transition-colors duration-300 px-4 py-2 text-left"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="flex justify-center px-4 pt-4 border-t border-neon-500/20">
                <Button
                  variant="neon"
                  size="sm"
                  onClick={() => window.open('https://calendly.com/internetmoneymedia-biz/30min', '_blank')}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation 