import { FC } from 'react'
import intro from '@/assets/intro.svg'
import contact from '@/assets/contact.svg'
import rule from '@/assets/rule.svg'
import resource from '@/assets/resource.svg'
import './index.css'
import CardGroup from '@/components/cardGroup/cardGroup'

const Overview: FC = () => {
  const cards = [
    {
      icon: intro,
      title: '智算平台简介',
      subTitle: '南昌大学智算平台，为用户提供超算服务',
      navigateTo: '/Overview/introduction',
    },
    {
      icon: resource,
      title: '平台资源',
      subTitle: '智算平台拥有的资源配置',
      navigateTo: '/Overview/resource',
    },
    {
      icon: rule,
      title: '规章制度',
      subTitle: '南昌大学智算平台规章制度查看',
      navigateTo: '/Overview/rules',
    },
    {
      icon: contact,
      title: '联系我们',
      subTitle: '点击查看我们的联系方式',
      navigateTo: '/Overview/ContactUs',
    },
  ]
  return <CardGroup cards={cards} />
}

export default Overview
