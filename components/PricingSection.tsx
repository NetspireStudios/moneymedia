'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, TrendingUp, Crown } from 'lucide-react'
import { Button } from './ui/button'

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter Package',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for new creators ready to scale',
      icon: <Zap className="w-6 h-6" />,
      popular: false,
      stripeUrl: 'https://buy.stripe.com/00gaFT850a9pe9WeUU',
      features: [
        '1 clip per day (30 posts/month)',
        'Professional editing & optimization',
        'Single platform distribution',
        'Limited revisions',
        'Basic analytics dashboard'
      ]
    },
    {
      name: 'Growth Package',
      price: '$2,250',
      period: '/month',
      description: 'Ideal for growing creators and brands',
      icon: <TrendingUp className="w-6 h-6" />,
      popular: true,
      stripeUrl: 'https://buy.stripe.com/7sI4hv4SO81h2recMO',
      features: [
        '2 clips per day (60 posts/month)',
        'Premium editing & optimization',
        'Multi-platform distribution',
        'Unlimited revisions',
        'Advanced analytics',
        'Bi-weekly strategy calls'
      ]
    },
    {
      name: 'Enterprise Package',
      price: '$4,500',
      period: '/month',
      description: 'For established creators and businesses',
      icon: <Crown className="w-6 h-6" />,
      popular: false,
      stripeUrl: 'https://buy.stripe.com/fZebJX1GCepF4zm003',
      features: [
        '4 clips daily + 1 long-form video weekly',
        '120 posts/month',
        'Premium editing & optimization',
        'Full-service distribution',
        'Unlimited revisions',
        'Comprehensive analytics',
        'Weekly strategy sessions'
      ]
    }
  ]

  return (
    <section id="pricing" className="relative py-20 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-400/5 rounded-full blur-3xl"></div>

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
            className="inline-flex items-center gap-2 bg-neon-500/10 border border-neon-500/20 rounded-full px-4 py-2 mb-6"
          >
            <Star className="w-4 h-4 text-neon-500" />
            <span className="text-neon-400 text-sm font-medium">Simple, Transparent Pricing</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">
            Choose Your <span className="text-neon-500">Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional content creation packages designed to scale your brand 
            and maximize your social media impact.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: plan.popular 
                  ? "0 20px 40px rgba(0, 255, 0, 0.3)" 
                  : "0 20px 40px rgba(0, 255, 0, 0.15)"
              }}
              viewport={{ once: true }}
              className={`relative group rounded-2xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-neon-500/10 to-neon-500/5 border-2 border-neon-500/40' 
                  : 'bg-white/5 backdrop-blur-sm border border-neon-500/20 hover:border-neon-500/40'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neon-500 text-black px-4 py-2 rounded-full text-sm font-bold"
                >
                  Most Popular
                </motion.div>
              )}

              {/* Plan Icon & Title */}
              <div className="text-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    plan.popular ? 'bg-neon-500/20 text-neon-400' : 'bg-neon-500/10 text-neon-500'
                  }`}
                >
                  {plan.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center mb-2">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-neon-400' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-lg ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.05), duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-neon-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-neon-500" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant={plan.popular ? "glow" : "neon-outline"}
                  size="lg"
                  className="w-full"
                  onClick={() => window.open(plan.stripeUrl, '_blank')}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Need a custom solution? We're here to help you scale beyond limits.
          </p>
          <Button
            variant="neon-outline"
            size="lg"
            onClick={() => window.open('https://calendly.com/internetmoneymedia-biz/30min', '_blank')}
          >
            Book Custom Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection 