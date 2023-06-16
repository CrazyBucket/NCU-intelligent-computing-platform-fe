import Card from '@/components/card/card'
import release from '@/assets/release.svg'
import cooperate from '@/assets/cooperate.svg'
import { FC } from 'react'
import './index.css'

const Business: FC = () => {
  return (
    <div className="cardGroup">
      <Card
        icon={cooperate}
        title="校内科研合作"
        subTitle="校内科研项目合作相关资讯"
        navigateTo="/business/onCampus"
      />
      <Card
        icon={cooperate}
        title="校企科研合作"
        subTitle="校企科研项目合作相关资讯"
        navigateTo="/business/enterprise"
      />
      <Card
        icon={release}
        title="项目咨询与需求发布"
        subTitle="项目咨询与需求发布页面"
        navigateTo="/business/consult"
      />
    </div>
  )
}

export default Business
