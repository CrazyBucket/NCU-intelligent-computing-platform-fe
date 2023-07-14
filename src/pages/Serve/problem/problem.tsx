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
      question: '在哪里可以看到平台的配置？',
      answer:
        '可以在平台概况下的平台资源模块查看详细的硬件配置,如CPU节点、存储系统、集群总共核心数等参数。',
    },
    {
      id: 1,
      question: '有哪些常见的软件安装协助说明？',
      answer:
        '我们提供软件安装协助的相关文档，涵盖了各种常见软件的安装步骤和注意事项。您可以在我们的网站上找到详细的安装说明。',
    },
    {
      id: 2,
      question: '如何申请使用智算平台？',
      answer: '智算平台提供了对超算资源的管理和监控功能。您可以查看用户手册、规章制度或者联系我们',
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
