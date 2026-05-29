import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Clock, Star } from 'lucide-react'

const StatCard = ({ icon: Icon, number, label, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 mb-4 group-hover:bg-gold-400/20 transition-colors"
      >
        <Icon className="w-8 h-8 text-gold-400" />
      </motion.div>
      <motion.h3
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2, type: 'spring' }}
        className="font-playfair text-5xl font-bold text-gradient mb-2"
      >
        {number}
      </motion.h3>
      <p className="text-white/70 text-sm tracking-wider uppercase">{label}</p>
    </motion.div>
  )
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-matte-dark via-matte-black to-matte-dark" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 text-gold-400/80 text-sm tracking-[0.3em] uppercase mb-4 glass rounded-full"
          >
            Our Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Crafting </span>
            <span className="text-gradient-strong">Culinary Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            At Dine&Sync, we believe that dining is more than just a meal — it's an experience.
            Our passion for culinary artistry and commitment to exceptional hospitality creates
            moments that linger in your memory.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[4/5] bg-gradient-to-br from-gold-400/20 to-matte-black">
                <img
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070"
                  alt="Chef preparing dish"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-matte-dark via-transparent to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-gold-400 fill-gold-400" />
                <div>
                  <p className="font-playfair text-2xl font-bold text-white">Michelin</p>
                  <p className="text-gold-400 text-sm">Starred Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-playfair text-3xl font-bold text-white mb-4">
                A Legacy of Fine Dining
              </h3>
              <p className="text-white/70 leading-relaxed">
                Founded on the principles of innovation and tradition, Dine&Sync brings together
                the finest ingredients from around the world with time-honored cooking techniques.
                Our award-winning chefs craft each dish as a work of art, balancing flavors,
                textures, and presentations that delight all senses.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-3xl font-bold text-white mb-4">
                Modern Culinary Craftsmanship
              </h3>
              <p className="text-white/70 leading-relaxed">
                Every plate tells a story of dedication and creativity. We source sustainable,
                locally-sourced ingredients whenever possible, supporting our community while
                delivering the highest quality dining experience. Our kitchen is a laboratory
                of flavors where tradition meets innovation.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-3xl font-bold text-white mb-4">
                Premium Atmosphere
              </h3>
              <p className="text-white/70 leading-relaxed">
                Step into an environment designed for sophistication and comfort. Our interior
                blends contemporary elegance with warm hospitality, creating the perfect backdrop
                for memorable occasions. From intimate dinners to grand celebrations, every
                moment at Dine&Sync is special.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-matte-black font-semibold rounded-sm hover:shadow-lg hover:shadow-gold-500/40 transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Clock} number="15+" label="Years of Excellence" delay={0.3} />
          <StatCard icon={Award} number="48" label="Signature Dishes" delay={0.4} />
          <StatCard icon={Users} number="50K+" label="Happy Guests" delay={0.5} />
          <StatCard icon={Star} number="4.9" label="Average Rating" delay={0.6} />
        </div>
      </div>
    </section>
  )
}

export default About
