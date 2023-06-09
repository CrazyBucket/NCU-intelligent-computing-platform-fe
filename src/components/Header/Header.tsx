import { FC } from 'react'
import Logo from '@/assets/logo.png'
import './index.css'

const Header: FC = () => {
  return (
    <header
      style={{
        maxWidth: '1080px',
        height: '150px',
        display: 'flex',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div style={{ flex: 1 }}>
        <img src={Logo} />
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}></div>
    </header>
  )
}

export default Header
