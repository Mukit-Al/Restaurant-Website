import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, Users, Phone, Mail, MapPin } from 'lucide-react'

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Reservation submitted:', formData)
    // Handle form submission
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="reservation" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-matte-dark via-matte-black to-matte-dark" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

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
            Reserve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Make a </span>
            <span className="text-gradient-strong">Reservation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Reserve your table at Dine&Sync and prepare for an extraordinary dining experience.
          </motion.p>
        </motion.div>

        {/* Reservation Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-white/80 text-sm uppercase tracking-wider">Full Name</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold-400/50" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold-400/50 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/80 text-sm uppercase tracking-wider">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold-400/50" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold-400/50 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/80 text-sm uppercase tracking-wider">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold-400/50" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 234 567 8900"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold-400/50 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/80 text-sm uppercase tracking-wider">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold-400/50" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold-400/50 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-matte-dark">Select guests</option>
                    <option value="1" className="bg-matte-dark">1 Guest</option>
                    <option value="2" className="bg-matte-dark">2 Guests</option>
                    <option value="3" className="bg-matte-dark">3 Guests</option>
                    <option value="4" className="bg-matte-dark">4 Guests</option>
                    <option value="5" className="bg-matte-dark">5 Guests</option>
                    <option value="6" className="bg-matte-dark">6+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/80 text-sm uppercase tracking-wider">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold-400/50" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold-400/50 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/80 text-sm uppercase tracking-wider">Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold-400/50" />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold-400/50 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-matte-dark">Select time</option>
                    <option value="17:00" className="bg-matte-dark">5:00 PM</option>
                    <option value="17:30" className="bg-matte-dark">5:30 PM</option>
                    <option value="18:00" className="bg-matte-dark">6:00 PM</option>
                    <option value="18:30" className="bg-matte-dark">6:30 PM</option>
                    <option value="19:00" className="bg-matte-dark">7:00 PM</option>
                    <option value="19:30" className="bg-matte-dark">7:30 PM</option>
                    <option value="20:00" className="bg-matte-dark">8:00 PM</option>
                    <option value="20:30" className="bg-matte-dark">8:30 PM</option>
                    <option value="21:00" className="bg-matte-dark">9:00 PM</option>
                    <option value="21:30" className="bg-matte-dark">9:30 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-matte-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold-500/40 transition-all duration-300"
            >
              Confirm Reservation
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Reservation
