import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '@/components/card/card'
import './index.css'

interface CardType {
  icon: string
  title: string
  subTitle: string
  navigateTo: string
}

interface CardGroupProps {
  cards: CardType[]
}

const CardGroup: React.FC<CardGroupProps> = ({ cards }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="cardGroup"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            subTitle={card.subTitle}
            navigateTo={card.navigateTo}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

export default CardGroup
