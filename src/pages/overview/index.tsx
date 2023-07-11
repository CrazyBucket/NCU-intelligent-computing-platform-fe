import { FC } from 'react'
import Card from '@/components/card/card'
import intro from '@/assets/intro.svg'
import contact from '@/assets/contact.svg'
import rule from '@/assets/rule.svg'
import resource from '@/assets/resource.svg'
import './index.css'

const Overview: FC = () => {
  return (
    <div className="cardGroup">
      <Card
        icon={intro}
        title="智算平台简介"
        subTitle="南昌大学智算平台，为用户提供超算服务"
        navigateTo="/Overview/introduction"
      />
      <Card
        icon={resource}
        title="平台资源"
        subTitle="智算平台拥有的资源配置"
        navigateTo="/Overview/resource"
      />
      <Card
        icon={rule}
        title="规章制度"
        subTitle="南昌大学智算平台规章制度查看"
        navigateTo="/Overview/rules"
      />
      <Card icon={contact} title="联系我们" subTitle="点击查看我们的联系方式" navigateTo="/Login" />
    </div>
  )
}

export default Overview
