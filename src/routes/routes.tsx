import CenterOverview from '@/pages/centerOverview'
import Introduction from '@/pages/centerOverview/introduction/introduction'
import Resource from '@/pages/centerOverview/resource/resource'
import Rules from '@/pages/centerOverview/rules/rules'
import ContactUs from '@/pages/contactUs'
import Install from '@/pages/contactUs/install/install'
import Manage from '@/pages/contactUs/manage/manage'
import VPN from '@/pages/contactUs/VPN/VPN'
import Home from '@/pages/home'
import News from '@/pages/news'
import Cooperate from '@/pages/news/cooperate/cooperate'
import Release from '@/pages/news/release/release'
import OnBoard from '@/pages/onBoard'
import ApplyAccount from '@/pages/onBoard/applyAccount/applyAccount'
import Doc from '@/pages/onBoard/doc/doc'
import Problem from '@/pages/onBoard/problem/problem'
import UserManual from '@/pages/onBoard/userManual/userManual'
import { Navigate } from 'react-router-dom'

//创建路由表
const routes = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/centerOverview',
    element: <CenterOverview />,
    children: [
      {
        path: 'introduction',
        element: <Introduction />,
      },
      {
        path: 'rules',
        element: <Rules />,
      },
      {
        path: 'resource',
        element: <Resource />,
      },
    ],
  },
  {
    path: '/contactUs',
    element: <ContactUs />,
    children: [
      {
        path: 'install',
        element: <Install />,
      },
      {
        path: 'manage',
        element: <Manage />,
      },
      {
        path: 'VPN',
        element: <VPN />,
      },
    ],
  },
  {
    path: '/news',
    element: <News />,
    children: [
      {
        path: 'cooperate',
        element: <Cooperate />,
      },
      {
        path: 'release',
        element: <Release />,
      },
    ],
  },
  {
    path: '/onBoard',
    element: <OnBoard />,
    children: [
      {
        path: 'applyAccount',
        element: <ApplyAccount />,
      },
      {
        path: 'doc',
        element: <Doc />,
      },
      {
        path: 'problem',
        element: <Problem />,
      },
      {
        path: 'userManual',
        element: <UserManual />,
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
]

export default routes
