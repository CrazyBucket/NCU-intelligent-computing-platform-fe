import { FC } from 'react'
import apply from '@/assets/release.svg'
import net from '@/assets/net.svg'
import install from '@/assets/install.svg'
import CardGroup from '@/components/cardGroup/cardGroup'
import './index.css'

const Login: FC = () => {
  const cards = [
    {
      icon: net,
      title: '校外用户申请开通超算中心VPN',
      subTitle: '点击查看申请需求',
      navigateTo: '/Login/VPN',
    },
    {
      icon: install,
      title: '软件协助',
      subTitle: '软件安装协助说明',
      navigateTo: '/Login/help',
    },
    {
      icon: apply,
      title: '账号审批',
      subTitle: '智算平台账号审批',
      navigateTo: '/Login/approval',
    },
  ]
  return <CardGroup cards={cards} />
}

export default Login
