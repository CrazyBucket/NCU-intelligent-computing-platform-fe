import { Navigate } from 'react-router-dom'
import Overview from '@/pages/overview'
import Introduction from '@/pages/overview/introduction/introduction'
import Resource from '@/pages/overview/resource/resource'
import Rules from '@/pages/overview/rules/rules'
import Login from '@/pages/Login'
import News from '@/pages/news'
import Serve from '@/pages/Serve'
import ApplyAccount from '@/pages/Serve/applyAccount/applyAccount'
import Problem from '@/pages/Serve/problem/problem'
import UserManual from '@/pages/Serve/userManual/userManual'
import Home from '@/pages/home'
import NotFound from '@/pages/notFound'
import VPN from '@/pages/Login/VPN/VPN'
import Application from '@/pages/Serve/application/application'
import Business from '@/pages/business/business'
import Consult from '@/pages/business/consult/consult'
import Enterprise from '@/pages/business/enterprise/enterprise'
import OnCampus from '@/pages/business/onCampus/onCampus'
import ContactUs from '@/pages/overview/ContactUs'
import Help from '@/pages/Login/help/install'
import Approval from '@/pages/Login/approval'

//创建路由表
const routes = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/overview',
    element: <Overview />,
  },
  {
    path: '/overview/introduction',
    element: <Introduction />,
  },
  {
    path: '/overview/rules',
    element: <Rules />,
  },
  {
    path: '/overview/resource',
    element: <Resource />,
  },
  {
    path: '/overview/ContactUs',
    element: <ContactUs />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Login/help',
    element: <Help />,
  },
  {
    path: '/Login/VPN',
    element: <VPN />,
  },
  {
    path: '/Login/Approval',
    element: <Approval />,
  },
  {
    path: '/news',
    element: <News />,
  },
  {
    path: '/Serve',
    element: <Serve />,
  },
  {
    path: '/Serve/applyAccount',
    element: <ApplyAccount />,
  },
  {
    path: '/Serve/userManual',
    element: <UserManual />,
  },
  {
    path: '/Serve/problem',
    element: <Problem />,
  },
  {
    path: '/Serve/application',
    element: <Application />,
  },
  {
    path: '/business',
    element: <Business />,
  },
  {
    path: '/business/consult',
    element: <Consult />,
  },
  {
    path: '/business/enterprise',
    element: <Enterprise />,
  },
  {
    path: '/business/onCampus',
    element: <OnCampus />,
  },

  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
