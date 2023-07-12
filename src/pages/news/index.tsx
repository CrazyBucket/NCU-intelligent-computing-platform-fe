import { FC } from 'react'
import New from '@/assets/new.svg'
import { AnimatePresence, motion } from 'framer-motion'
import './index.css'

const News: FC = () => {
  const news = [
    {
      content: '南昌大学智算平台正式上线啦！欢迎大家使用。',
      time: '2023-07-10',
    },
    {
      content: '智算平台新增校外用户申请开通超算中心VPN功能。',
      time: '2023-07-08',
    },
    {
      content: '最新的用户手册已发布，点击查看详细信息啊',
      time: '2023-07-05',
    },
  ]

  return (
    <div>
      <div className="moduleTitle">
        <img src={New} style={{ paddingLeft: '15px' }} />
        <span style={{ padding: '15px' }}>新闻公告</span>
      </div>
      <AnimatePresence>
        <motion.div
          className="newsGroup"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {news.map((item, index) => (
            <div key={index} className="newsItem">
              <div className="newsText">{item.content}</div>
              <div className="newsTime">{item.time}</div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default News
