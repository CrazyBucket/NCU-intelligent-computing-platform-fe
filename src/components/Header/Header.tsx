import { FC, useEffect, useState } from 'react'
import Logo from '@/assets/logo.png'
import './index.css'
import BtnNav from '../btnNav'
import { useIsMobileStore } from '@/store/isMobile'

const Header: FC = () => {
  const { isMobile } = useIsMobileStore()
  return (
    <header
      style={{
        maxWidth: '1080px',
        height: '150px',
        display: 'flex',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {isMobile && (
        <div>
          <BtnNav />
        </div>
      )}
      <div
        style={{
          flex: 1,
          display: 'flex',
        }}
      >
        <img src={Logo} height={60} />
      </div>
    </header>
  )
}

export default Header
