import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import QA from '@/assets/QA.svg'
import { AnimatePresence, motion } from 'framer-motion'
import './index.css'

interface qaType {
  id: number
  question: string
  answer: string
}
const Problem: FC = () => {
  const [data, setData] = useState<qaType[]>([])
  const questions = [
    {
      id: 0,
      question: '你玩原神吗？',
      answer:
        '你说的对，但是《原神》是由米哈游自主研发的一款全新开放世界冒险游戏。游戏发生在一个被称作「提瓦特」的幻想世界，在这里，被神选中的人将被授予「神之眼」，导引元素之力。你将扮演一位名为「旅行者」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘「原神」的真相。因为你的素养很差，我现在每天玩原神都能赚150原石，每个月差不多5000原石的收入， 也就是现实生活中每个月5000美元的收入水平，换算过来最少也30000人民币，虽然我 只有14岁，但是已经超越了中国绝大多数人(包括你)的水平，这便是原神给我的骄傲的资 本。毫不夸张地说，《原神》是miHoYo迄今为止规模最为宏大，也是最具野心的一部作品。即便在经历了8700个小时的艰苦战斗后，游戏还有许多尚未发现的秘密，错过的武器与装备，以及从未使用过的法术和技能。尽管游戏中的战斗体验和我们之前在烧机系列游戏所见到的没有多大差别，但游戏中各类精心设计的敌人以及Boss战已然将战斗抬高到了一个全新的水平。就和几年前的《 塞尔达传说 》一样，《原神》也是一款能够推动同类游戏向前发展的优秀作品。',
    },
    {
      id: 1,
      question: '有哪些常见的软件安装协助说明？',
      answer:
        '我们提供软件安装协助的相关文档，涵盖了各种常见软件的安装步骤和注意事项。您可以在我们的网站上找到详细的安装说明。',
    },
    {
      id: 2,
      question: '如何使用智算中心管理界面？',
      answer:
        '智算中心管理界面提供了对超算资源的管理和监控功能。您可以登录管理界面，并查看资源使用情况、提交作业、查看作业状态等。',
    },
  ]

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/qa')
  //     .then(response => {
  //       console.log(response)
  //       console.log(data)

  //       setData(questions)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])

  return (
    <div>
      <div className="moduleTitle">
        <img src={QA} style={{ paddingLeft: '15px', height: '35px' }} />
        <span style={{ padding: '15px' }}>常见问题</span>
      </div>
      <AnimatePresence>
        <motion.div
          className="QAGroup"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {questions.map((item: any) => (
            <div key={item.id} className="QAItem">
              <div className="QABox" style={{ marginTop: '40px', marginBottom: '20px' }}>
                <div className="que">Q: {item.question}</div>
              </div>
              <div className="QABox" style={{ marginBottom: '40px' }}>
                <div className="ans">A: {item.answer}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Problem
