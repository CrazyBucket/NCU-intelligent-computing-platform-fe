import { FC } from 'react'

const Footer: FC = () => {
  return (
    <div
      style={{
        height: '40px',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#2F3033',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'lighter',
      }}
    >
      南昌大学智算平台©2023
    </div>
  )
}

export default Footer
