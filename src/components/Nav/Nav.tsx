import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import './index.css'

const Nav: FC = () => {
  const navigate = useNavigate()
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null)
  const tagRoute = ['/', '/Overview', '/onBoard', '/news', '/contactUs', '/business']
  const subTagRoute = [
    [],
    ['/Overview/introduction', '/Overview/resource', '/Overview/rules'],
    [
      '/onBoard/applyAccount',
      '/onBoard/doc',
      '/onBoard/userManual',
      '/onBoard/problem',
      './onBoard/application',
    ],
    [],
    ['/contactUs/VPN', '/contactUs/install', '/contactUs/manage'],
    ['./business/onCampus', './business/enterprise', './business/consult'],
  ]
  const subTags = [
    [],
    ['智算平台简介', '平台资源', '规章制度'],
    ['账号申请', '文档与培训', '用户手册', '常见问题', '付费申请'],
    [],
    ['校外用户申请开通超算中心VPN', '软件安装协助', '智算平台管理'],
    ['校内科研合作', '校企科研合作', '项目咨询与需求发布'],
  ]

  return (
    <nav
      style={{
        backgroundColor: '#272F42',
        lineHeight: '60px',
        display: 'flex',
        justifyContent: 'center',
        color: '#fff',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1080px',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          {['主页', '平台概况', '上机服务', '新闻公告', '联系我们', '平台业务'].map(
            (tag, index) => (
              <motion.div
                key={index}
                onHoverStart={() => setHoverIndex(index)}
                onHoverEnd={() => setHoverIndex(null)}
                style={{ position: 'relative' }}
              >
                <div
                  className="navTag"
                  onClick={() => {
                    navigate(tagRoute[index])
                  }}
                >
                  {tag}
                </div>
                <AnimatePresence initial={false}>
                  {hoverIndex === index && (
                    <motion.div
                      className="subTagContainer"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      style={{
                        position: 'absolute',
                        top: '60px',
                        left: 0,
                        zIndex: 1,
                      }}
                    >
                      {subTags[index].map((subTag, i) => (
                        <motion.div
                          key={subTag}
                          className="subTag"
                          variants={{
                            collapsed: { scale: 0.8, opacity: 0 },
                            open: { scale: 1, opacity: 1 },
                          }}
                          transition={{ duration: 0.3 }}
                          onClick={() => {
                            navigate(subTagRoute[index][i])
                          }}
                        >
                          {subTag}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ),
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}></div>
      </div>
    </nav>
  )
}

export default Nav
