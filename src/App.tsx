import routes from '@/routes/routes'
import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import { useIsMobileStore } from './store/isMobile'
import './index.css'

function App() {
  const element = useRoutes(routes)
  const [pageWidth, setPageWidth] = useState(window.innerWidth)
  const { isMobile, setIsMobile } = useIsMobileStore()
  // useEffect(() => {
  //   function handleResize() {
  //     setPageWidth(window.innerWidth)
  //     setIsMobile(window.innerWidth < 600)
  //   }

  //   window.addEventListener('resize', handleResize)
  //   return () => window.removeEventListener('resize', handleResize)
  // }, [])
  return (
    <div>
      <div>
        <Header />
      </div>
      {!isMobile && (
        <div>
          <Nav />
        </div>
      )}
      {element}
    </div>
  )
}

export default App
