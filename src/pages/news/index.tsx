import { FC } from 'react'
import Card from '@/components/card/card'
import release from '@/assets/release.svg'
import cooperate from '@/assets/cooperate.svg'
import './index.css'

const News: FC = () => {
  return (
    <div className="cardGroup">
      <Card icon={release} title="新闻发布" subTitle="新闻发布页面" navigateTo="/news/release" />
      <Card
        icon={cooperate}
        title="科研项目合作"
        subTitle="科研项目合作相关资讯"
        navigateTo="/news/cooperate"
      />
    </div>
  )
}

export default News
