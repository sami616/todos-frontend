import React from 'react'
import { motion } from 'framer-motion'

//x//////////////////////////////////////////////////
// Transform
//x//////////////////////////////////////////////////

export const Transform = ({ children, axis = 'x', ...props }) => (
  <motion.div initial={{ [axis]: 20 }} animate={{ [axis]: 0 }} {...props}>
    {children}
  </motion.div>
)
