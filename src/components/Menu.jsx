import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const menuItems = {
  starters: [
    {
      name: 'Truffle Arancini',
      description: 'Crispy risotto balls infused with black truffle, served with garlic aioli',
      ingredients: 'Arborio rice, black truffle, parmesan, garlic',
      image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=1000'
    },
    {
      name: 'Seared Scallops',
      description: 'Pan-seared Hokkaido scallops with cauliflower purée and crispy pancetta',
      ingredients: 'Hokkaido scallops, cauliflower, pancetta, lemon butter',
      image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=1000'
    },
    {
      name: 'Wagyu Beef Carpaccio',
      description: 'Thinly sliced A5 wagyu with truffle oil, capers, and micro arugula',
      ingredients: 'A5 wagyu beef, truffle oil, capers, arugula',
      image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=1000'
    }
  ],
  mains: [
    {
      name: 'Wagyu Beef Tenderloin',
      description: 'A5 wagyu tenderloin with red wine reduction, served with roasted vegetables',
      ingredients: 'A5 wagyu beef, red wine, seasonal vegetables',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000'
    },
    {
      name: 'Pan-Roasted Duck Breast',
      description: 'Crispy skin duck breast with cherry gastrique and potato gratin',
      ingredients: 'Duck breast, cherries, potatoes, thyme',
      image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1000'
    },
    {
      name: 'Miso-Glazed Black Cod',
      description: 'Marinated black cod with miso glaze, bok choy, and jasmine rice',
      ingredients: 'Black cod, white miso, bok choy, jasmine rice',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000'
    }
  ],
  desserts: [
    {
      name: 'Chocolate Soufflé',
      description: 'Warm chocolate soufflé with vanilla bean ice cream and raspberry coulis',
      ingredients: 'Belgian chocolate, vanilla bean, raspberries',
      image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=1000'
    },
    {
      name: 'Crème Brûlée',
      description: 'Classic vanilla crème brûlée with caramelized sugar and fresh berries',
      ingredients: 'Vanilla bean, cream, fresh berries',
      image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1000'
    },
    {
      name: 'Tiramisu',
      description: 'Traditional Italian tiramisu with espresso-soaked ladyfingers and mascarpone',
      ingredients: 'Espresso, mascarpone, ladyfingers, cocoa',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1000'
    }
  ],
  beverages: [
    {
      name: 'Signature Gold Cocktail',
      description: 'Premium gin with edible gold leaf, elderflower, and champagne',
      ingredients: 'Premium gin, elderflower, champagne, gold leaf',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000'
    },
    {
      name: 'Aged Whiskey Selection',
      description: 'Curated selection of 18+ year single malt whiskies from Scotland',
      ingredients: 'Single malt whiskey, aged 18+ years',
      image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=1000'
    },
    {
      name: 'Vintage Wine Pairing',
      description: 'Expertly selected vintage wines to complement your dining experience',
      ingredients: 'Curated vintage wines from renowned vineyards',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000'
    }
  ]
}

const categories = [
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Main Course' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' }
]

const MenuItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500"
    >
      <div className="relative overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-matte-dark via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-6">
        <motion.h3
          whileHover={{ x: 5 }}
          className="font-playfair text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors"
        >
          {item.name}
        </motion.h3>
        <p className="text-white/70 leading-relaxed mb-4">
          {item.description}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-gold-400/80 text-sm tracking-wider uppercase">
            Ingredients:
          </span>
          <span className="text-white/60 text-sm">
            {item.ingredients}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="menu" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-matte-dark via-matte-black to-matte-dark" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400/3 rounded-full blur-3xl" />

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
            Our Menu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Signature </span>
            <span className="text-gradient-strong">Dishes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Discover our carefully curated selection of culinary masterpieces,
            each dish crafted with passion and precision.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-matte-black font-semibold'
                  : 'glass text-white/80 hover:text-gold-400 hover:bg-white/10'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuItems[activeCategory].map((item, index) => (
              <MenuItem key={item.name} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

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
            View Full Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu
