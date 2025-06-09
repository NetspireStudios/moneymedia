'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)

  const faqs = [
    {
      question: "What kind of creators do you work with?",
      answer: "We work with a diverse range of creators including YouTubers, podcasters, course creators, and thought leaders who want to expand their reach through short-form content. Whether you're just starting out or already have millions of followers, our team adapts to your specific needs and brand voice."
    },
    {
      question: "How does the daily clip delivery work?",
      answer: "We have a streamlined process where you provide us with your long-form content, and our expert editors transform it into engaging short-form clips. You'll receive your daily clips through a secure portal, complete with optimized titles, descriptions, and hashtags for maximum reach across all platforms."
    },
    {
      question: "Can I request revisions?",
      answer: "Yes! We offer revisions to ensure you're completely satisfied with the final product. Our team works closely with you to understand your preferences and brand guidelines, making adjustments until the content perfectly matches your vision."
    },
    {
      question: "Do you post the content for me?",
      answer: "Yes, we can handle the entire distribution process across all platforms, including optimized posting times, platform-specific formatting, and engagement monitoring. Alternatively, if you prefer to maintain control over your posting schedule, we can simply deliver the finished content to you."
    },
    {
      question: "Do you work with brands or products, not just personal creators?",
      answer: "Absolutely! We work with businesses and brands to transform their content into engaging short-form videos that drive brand awareness, generate leads, and increase conversions. Our team understands both B2B and B2C content strategies."
    },
    {
      question: "What's your turnaround time?",
      answer: "Our standard turnaround time is 24-48 hours for daily clips. For larger projects or bulk content, we'll provide a custom timeline based on your specific requirements. We pride ourselves on consistent, reliable delivery that keeps your content calendar full."
    },
    {
      question: "What platforms do you optimize content for?",
      answer: "We create content optimized for all major short-form platforms including TikTok, Instagram Reels, YouTube Shorts, Twitter, LinkedIn, and more. Each piece of content is formatted and optimized specifically for the platform it's intended for."
    },
    {
      question: "How do you ensure content quality?",
      answer: "Our team consists of experienced editors who understand viral content patterns, platform algorithms, and audience engagement. Every piece goes through our quality assurance process, and we continuously analyze performance to refine our approach for maximum impact."
    }
  ]

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-20 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-neon-500/3 rounded-full blur-3xl"></div>

      {/* Floating Elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-neon-500/30 rounded-full"
          style={{
            left: `${10 + (i * 10)}%`,
            top: `${20 + (i * 8)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
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
            <HelpCircle className="w-5 h-5 text-neon-500" />
            <span className="text-neon-400 font-medium">Everything you need to know about our services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-glow"
          >
            Frequently Asked <span className="text-neon-500">Questions</span>
          </motion.h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-neon-500/20 rounded-2xl overflow-hidden hover:border-neon-500/40 transition-all duration-300"
                whileHover={{ scale: 1.01 }}
              >
                {/* Question */}
                <motion.button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                  whileHover={{ backgroundColor: "rgba(0, 255, 0, 0.05)" }}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-neon-400 transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openQuestion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-neon-400" />
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openQuestion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ delay: 0.1 }}
                          className="border-t border-neon-500/20 pt-4"
                        >
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          <div className="bg-gradient-to-r from-neon-500/10 to-neon-400/10 border border-neon-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Book a free consultation call and let's discuss how we can help grow your brand.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://calendly.com/internetmoneymedia-biz/30min', '_blank')}
              className="bg-neon-500 hover:bg-neon-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.6)]"
            >
              Book Your Free Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection 