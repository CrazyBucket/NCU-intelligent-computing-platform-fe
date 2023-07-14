import React from 'react'
import './index.css'

interface MoudleTitleProps {
  title: string
  icon?: string
}

const MoudleTitle: React.FC<MoudleTitleProps> = ({ title, icon }) => {
  return (
    <div className="moduleTitle">
      {icon && <img src={icon} style={{ paddingLeft: '15px', height: '35px' }} />}
      <span style={{ padding: '15px' }}>{title}</span>
    </div>
  )
}

export default MoudleTitle
