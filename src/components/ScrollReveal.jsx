import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ScrollReveal = ({ children, delay = 0, direction = 'up' }) => {
  const { ref, isInView } = useScrollAnimation()

  const variants = {
    up: { y: 30, opacity: 0 },
    down: { y: -30, opacity: 0 },
    left: { x: -30, opacity: 0 },
    right: { x: 30, opacity: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? { y: 0, x: 0, opacity: 1 } : variants[direction]}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
