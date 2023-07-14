import routes from '@/routes/routes'
import { useRoutes, useLocation } from 'react-router-dom'
import SwiperCore, { Autoplay } from 'swiper'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Footer from './components/footer/footer'
import './index.css'

function App() {
  const element = useRoutes(routes)
  const location = useLocation()
  const isHome = location.pathname === '/home'
  SwiperCore.use([Autoplay])
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Toaster />
      <div
        style={{
          flexGrow: 1,
          flexShrink: 0,
          paddingBottom: '40px',
        }}
      >
        {!isHome && (
          <>
            <Header />
            <Nav />
          </>
        )}
        <div
          style={
            isHome
              ? {}
              : {
                  maxWidth: '1080px',
                  margin: '0 auto',
                }
          }
        >
          {element}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
