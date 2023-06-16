import routes from '@/routes/routes'
import { useRoutes } from 'react-router-dom'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Footer from './components/footer/footer'
import './index.css'

function App() {
  const element = useRoutes(routes)

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          flexGrow: 1,
          flexShrink: 0,
          paddingBottom: '40px',
        }}
      >
        <Header />
        <Nav />
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
          }}
        >
          {element}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
