import { FC } from 'react'
import Vocter from '@/assets/vocter.svg'
import './index.css'
import { useNavigate } from 'react-router-dom'

interface CardProps {
  icon: string
  title: string
  subTitle: string
  navigateTo: string
}

const Card: FC<CardProps> = ({ icon, title, subTitle, navigateTo }) => {
  const navigate = useNavigate()
  return (
    <div
      className="card"
      onClick={() => {
        navigate(navigateTo)
      }}
    >
      <img src={icon} alt="icon" className="cardIcon" />
      <div className="cardContent">
        <div className="cardTitle">
          <div style={{ maxWidth: '120px' }}>{title}</div>
          <img src={Vocter} />
        </div>
        <div className="cardSubTitle">{subTitle}</div>
      </div>
    </div>
  )
}

export default Card
