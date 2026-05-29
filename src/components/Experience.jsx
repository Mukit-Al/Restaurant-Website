import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Music, Users, Utensils, Heart } from 'lucide-react'

const experiences = [
  {
    icon: Music,
    title: 'Live Music Nights',
    description: 'Enjoy soulful performances by renowned artists while savoring exquisite cuisine. Every Thursday through Sunday.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000'
  },
  {
    icon: Users,
    title: 'Private Dining',
    description: 'Exclusive private rooms for intimate gatherings, business meetings, and special celebrations with personalized service.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000'
  },
  {
    icon: Utensils,
    title: 'Chef\'s Table',
    description: 'An immersive culinary journey where you watch our chefs craft your meal right before your eyes.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000'
  },
  {
    icon: Heart,
    title: 'Rooftop Experience',
    description: 'Dine under the stars with breathtaking city views. Perfect for romantic dinners and special occasions.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000'
  }
]

const ExperienceCard = ({ experience, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <motion.img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-dark via-matte-dark/50 to-transparent" />
      </div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        className="absolute bottom-0 left-0 right-0 p-6"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-400/20 mb-4 backdrop-blur-sm"
        >
          <experience.icon className="w-6 h-6 text-gold-300" />
        </motion.div>
        <h3 className="font-playfair text-2xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
          {experience.title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          {experience.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-matte-dark via-matte-black to-matte-dark" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

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
            Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Dining </span>
            <span className="text-gradient-strong">Experiences</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Beyond exceptional cuisine, we offer curated experiences that transform
            every visit into an unforgettable memory.
          </motion.p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-matte-black font-semibold rounded-sm hover:shadow-lg hover:shadow-gold-500/40 transition-all duration-300"
          >
            Book an Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
