import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, ZoomIn } from 'lucide-react'

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000', category: 'food', title: 'Signature Dish' },
  { id: 2, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000', category: 'interior', title: 'Main Dining Hall' },
  { id: 3, src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000', category: 'food', title: 'Dessert Creation' },
  { id: 4, src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000', category: 'interior', title: 'Rooftop View' },
  { id: 5, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000', category: 'food', title: 'Fresh Ingredients' },
  { id: 6, src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1000', category: 'interior', title: 'Private Dining' },
  { id: 7, src: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000', category: 'food', title: 'Wagyu Beef' },
  { id: 8, src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000', category: 'interior', title: 'Bar Area' },
  { id: 9, src: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1000', category: 'food', title: 'Sweet Treats' },
]

const GalleryItem = ({ image, index, onOpen }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      onClick={() => onOpen(image)}
    >
      <div className="aspect-square overflow-hidden">
        <motion.img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="text-center">
          <ZoomIn className="w-8 h-8 text-gold-300 mx-auto mb-2" />
          <p className="text-white font-semibold">{image.title}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Lightbox = ({ image, onClose }) => {
  if (!image) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      >
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </motion.button>
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          src={image.src}
          alt={image.title}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
      </motion.div>
    </AnimatePresence>
  )
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="gallery" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-matte-dark via-matte-black to-matte-dark" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

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
            Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Visual </span>
            <span className="text-gradient-strong">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Explore our world through captivating imagery — from exquisite dishes
            to stunning interiors that define the Dine&Sync experience.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <GalleryItem key={image.id} image={image} index={index} onOpen={setSelectedImage} />
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      </div>
    </section>
  )
}

export default Gallery
