import React from 'react'
import { motion } from 'framer-motion'

export const Transform = ({ children, axis = 'x', ...props }) => (
  <motion.div initial={{ [axis]: 20 }} animate={{ [axis]: 0 }} {...props}>
    {children}
  </motion.div>
)
