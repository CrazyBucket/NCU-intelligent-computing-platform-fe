import Home from '@/pages/home'
import { Navigate } from 'react-router-dom'

//创建路由表
const routes = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
]

export default routes
