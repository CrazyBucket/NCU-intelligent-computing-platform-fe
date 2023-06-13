import CenterOverview from '@/pages/centerOverview'
import Introduction from '@/pages/centerOverview/introduction/introduction'
import Resource from '@/pages/centerOverview/resource/resource'
import Rules from '@/pages/centerOverview/rules/rules'
import ContactUs from '@/pages/contactUs'
import Install from '@/pages/contactUs/install/install'
import News from '@/pages/news'
import Cooperate from '@/pages/news/cooperate/cooperate'
import Release from '@/pages/news/release/release'
import OnBoard from '@/pages/onBoard'
import ApplyAccount from '@/pages/onBoard/applyAccount/applyAccount'
import Doc from '@/pages/onBoard/doc/doc'
import Problem from '@/pages/onBoard/problem/problem'
import UserManual from '@/pages/onBoard/userManual/userManual'
import Home from '@/pages/home'
import { Navigate } from 'react-router-dom'
import NotFound from '@/pages/notFound'

//创建路由表
const routes = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/centerOverview',
    element: <CenterOverview />,
  },
  {
    path: '/centerOverview/introduction',
    element: <Introduction />,
  },
  {
    path: '/centerOverview/rules',
    element: <Rules />,
  },
  {
    path: '/centerOverview/resource',
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
    path: '/news',
    element: <News />,
  },
  {
    path: '/news/cooperate',
    element: <Cooperate />,
  },
  {
    path: '/news/release',
    element: <Release />,
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
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
