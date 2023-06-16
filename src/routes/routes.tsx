import Overview from '@/pages/overview'
import Introduction from '@/pages/overview/introduction/introduction'
import Resource from '@/pages/overview/resource/resource'
import Rules from '@/pages/overview/rules/rules'
import ContactUs from '@/pages/contactUs'
import Install from '@/pages/contactUs/install/install'
import News from '@/pages/news'
import OnBoard from '@/pages/onBoard'
import ApplyAccount from '@/pages/onBoard/applyAccount/applyAccount'
import Doc from '@/pages/onBoard/doc/doc'
import Problem from '@/pages/onBoard/problem/problem'
import UserManual from '@/pages/onBoard/userManual/userManual'
import Home from '@/pages/home'
import NotFound from '@/pages/notFound'
import { Navigate } from 'react-router-dom'
import VPN from '@/pages/contactUs/VPN/VPN'
import Manage from '@/pages/contactUs/manage/manage'
import Application from '@/pages/onBoard/application/application'
import Business from '@/pages/business/business'
import Consult from '@/pages/business/consult/consult'
import Enterprise from '@/pages/business/enterprise/enterprise'
import OnCampus from '@/pages/business/onCampus/onCampus'

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
    path: '/contactUs',
    element: <ContactUs />,
  },
  {
    path: '/contactUs/install',
    element: <Install />,
  },
  {
    path: '/contactUs/VPN',
    element: <VPN />,
  },
  {
    path: '/contactUs/manage',
    element: <Manage />,
  },
  {
    path: '/news',
    element: <News />,
  },
  {
    path: '/onBoard',
    element: <OnBoard />,
  },
  {
    path: '/onBoard/applyAccount',
    element: <ApplyAccount />,
  },
  {
    path: '/onBoard/doc',
    element: <Doc />,
  },
  {
    path: '/onBoard/problem',
    element: <Problem />,
  },
  {
    path: '/onBoard/userManual',
    element: <UserManual />,
  },
  {
    path: '/onBoard/application',
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
