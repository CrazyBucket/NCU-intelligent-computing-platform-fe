import React from 'react'

interface NewsTitleProps {
  title: string
  time: string
}

const NewsTitle: React.FC<NewsTitleProps> = ({ title, time }) => {
  return (
    <div>
      <h1 style={{ fontWeight: '700', textAlign: 'center' }}>{title}</h1>
      <p style={{ fontSize: '18px', textAlign: 'right', paddingRight: '50px', color: '#5E5E5E' }}>
        {time}
      </p>
    </div>
  )
}

export default NewsTitle
