import { FC } from 'react'
import New from '@/assets/new.svg'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './index.css'

const News: FC = () => {
  const navigate = useNavigate()
  const news = [
    {
      content: '南昌大学信息工程学院学生开源创客协会换届大会',
      time: '2023-06-25',
      link: '/news/2',
    },
    {
      content: '江西信息通信科技服务站协助承办科大讯飞进校园技术科普讲动',
      time: '2023-06-05',
      link: '/news/1',
    },
    {
      content: '主题教育｜信息工程学院学生开源创客协会成立大会成功召开',
      time: '2023-06-04',
      link: 'https://mp.weixin.qq.com/s/BfMSCL-CyLgFuWMYCEXfeg',
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
            <div
              key={index}
              className="newsItem"
              onClick={() => {
                window.open(item.link, '_blank')
              }}
            >
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
