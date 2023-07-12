import { FC } from 'react'
import book from '@/assets/book.svg'
import release from '@/assets/release.svg'
import QA from '@/assets/QA.svg'
import person from '@/assets/person.svg'
import './index.css'
import CardGroup from '@/components/cardGroup/cardGroup'

const Serve: FC = () => {
  const cards = [
    {
      icon: person,
      title: '账号申请',
      subTitle: '点击进入申请账号详情页',
      navigateTo: '/Serve/applyAccount',
    },
    {
      icon: book,
      title: '用户手册',
      subTitle: '点击查看用户手册',
      navigateTo: '/Serve/userManual',
    },
    {
      icon: QA,
      title: '常见问题',
      subTitle: '查看常见问题及解答',
      navigateTo: '/Serve/problem',
    },
    {
      icon: release,
      title: '付费申请',
      subTitle: '查看申请需求',
      navigateTo: '/Serve/application',
    },
  ]
  return <CardGroup cards={cards} />
}

export default Serve
