import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
const navTag = ['主页', '中心概况', '上机服务', '新闻公告', '联系我们']
export const Navigation = () => (
  <motion.ul variants={variants}>
    {navTag.map((tag, index) => (
      <MenuItem tag={tag} key={index} />
    ))}
  </motion.ul>
)
