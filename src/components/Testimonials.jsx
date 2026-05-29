import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Alexandra Chen',
    role: 'Food Critic',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    rating: 5,
    text: 'Dine&Sync redefines luxury dining. Every dish was a masterpiece, and the service was impeccable. The attention to detail is extraordinary.',
  },
  {
    id: 2,
    name: 'Marcus Williams',
    role: 'Business Executive',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
    rating: 5,
    text: 'The private dining experience exceeded all expectations. Perfect for our corporate event. The chef\'s table was an unforgettable culinary journey.',
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    role: 'Travel Blogger',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
    rating: 5,
    text: 'From the moment we walked in, we were transported. The rooftop dining with live music created the most romantic atmosphere. Truly magical.',
  },
  {
    id: 4,
    name: 'James Morrison',
    role: 'Regular Guest',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
    rating: 5,
    text: 'I\'ve been coming here for years, and it never disappoints. The consistency in quality and service is remarkable. My favorite restaurant in the city.',
  },
]

const TestimonialCard = ({ testimonial, direction }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction === 'left' ? 50 : -50 }}
      transition={{ duration: 0.5 }}
      className="glass p-8 md:p-12 rounded-2xl max-w-4xl mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="flex-shrink-0">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-gold-400/30"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <Quote className="w-12 h-12 text-gold-400/50 mb-4 mx-auto md:mx-0" />
          
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6 italic">
            "{testimonial.text}"
          </p>
          
          <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
            ))}
          </div>
          
          <h4 className="font-playfair text-xl font-bold text-white mb-1">
            {testimonial.name}
          </h4>
          <p className="text-gold-400/80 text-sm uppercase tracking-wider">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('right')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const nextTestimonial = () => {
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-matte-dark via-matte-black to-matte-dark" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 text-gold-400/80 text-sm tracking-[0.3em] uppercase mb-4 glass rounded-full"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Guest </span>
            <span className="text-gradient-strong">Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Hear from our valued guests about their unforgettable experiences at Dine&Sync.
          </motion.p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex]}
              direction={direction}
            />
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'right' : 'left')
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-gold-400 w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
