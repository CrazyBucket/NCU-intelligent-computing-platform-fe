import { FC } from 'react'
import book from '@/assets/book.svg'
import doc from '@/assets/doc.svg'
import QA from '@/assets/QA.svg'
import person from '@/assets/person.svg'
import Card from '@/components/card/card'
import './index.css'

const OnBoard: FC = () => {
  return (
    <div className="cardGroup">
      <Card
        icon={person}
        title="账号申请"
        subTitle="点击进入申请账号详情页"
        navigateTo="/onBoard/applyAccount"
      />
      <Card icon={doc} title="文档与培训" subTitle="查看详细文档" navigateTo="/onBoard/doc" />
      <Card
        icon={book}
        title="用户手册"
        subTitle="点击查看用户手册"
        navigateTo="/onBoard/userManual"
      />
      <Card
        icon={QA}
        title="常见问题"
        subTitle="查看常见问题及解答"
        navigateTo="/onBoard/problem"
      />
    </div>
  )
}

export default OnBoard
