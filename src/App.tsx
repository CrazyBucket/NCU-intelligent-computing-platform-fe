import routes from '@/routes/routes'
import { useRoutes } from 'react-router-dom'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import './index.css'

function App() {
  const element = useRoutes(routes)

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Nav />
      </div>
      {element}
    </div>
  )
}

export default App
