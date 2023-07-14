import React, { FC, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate } from 'react-router-dom'
import CardGroup from '@/components/cardGroup/cardGroup'
import Header from '@/components/Header/Header'
import Nav from '@/components/Nav/Nav'
import book from '@/assets/book.svg'
import intro from '@/assets/intro.svg'
import person from '@/assets/person.svg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './index.css'

const Home: FC = () => {
  const navigate = useNavigate()
  const cards = [
    {
      icon: intro,
      title: '智算平台简介',
      subTitle: '南昌大学智算平台，为用户提供超算服务',
      navigateTo: '/Overview/introduction',
    },
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
  ]
  const frame1Ref = useRef<HTMLDivElement | null>(null)
  const frame2Ref = useRef<HTMLDivElement | null>(null)
  const panel1Ref = useRef<HTMLDivElement | null>(null)
  const panel2Ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (frame1Ref.current && frame2Ref.current && panel1Ref.current && panel2Ref.current) {
      const frame1Elem = frame1Ref.current
      const frame2Elem = frame2Ref.current
      const panel1Elem = panel1Ref.current
      const panel2Elem = panel2Ref.current

      hide(frame1Elem)
      ScrollTrigger.create({
        trigger: frame1Elem,
        onEnter: () => animateFrom(frame1Elem),
        onEnterBack: () => animateFrom(frame1Elem, 1),
        onLeave: () => hide(frame1Elem),
      })

      hide(frame2Elem)
      ScrollTrigger.create({
        trigger: frame2Elem,
        onEnter: () => animateFrom(frame2Elem),
        onEnterBack: () => animateFrom(frame2Elem, -1),
        onLeave: () => hide(frame2Elem),
      })

      hide(panel1Elem)
      ScrollTrigger.create({
        trigger: panel1Elem,
        onEnter: () => animateFrom(panel1Elem),
        onEnterBack: () => animateFrom(panel1Elem, 1),
        onLeave: () => hide(panel1Elem),
      })

      hide(panel2Elem)
      ScrollTrigger.create({
        trigger: panel2Elem,
        onEnter: () => animateFrom(panel2Elem),
        onEnterBack: () => animateFrom(panel2Elem, -1),
        onLeave: () => hide(panel2Elem),
      })
    }
  }, [])

  const animateFrom = (elem: HTMLDivElement, direction = 1) => {
    let x = 0,
      y = direction * 100

    if (elem.classList.contains('fromLeft')) {
      x = -100
      y = 0
    } else if (elem.classList.contains('fromRight')) {
      x = 100
      y = 0
    }

    elem.style.transform = `translate(${x}px, ${y}px)`
    elem.style.opacity = '0'

    gsap.fromTo(
      elem,
      { x, y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto',
      },
    )
  }
  const hide = (elem: HTMLDivElement) => {
    gsap.set(elem, { autoAlpha: 0 })
  }

  return (
    <div>
      <Header />
      <Nav />
      <div className="swiper-container">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          navigation={true}
        >
          <SwiperSlide>
            <div className="bgBox">
              <img src="/img/home3.jpg" className="item" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bgBox">
              <img src="/img/home1.jpg" className="item" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bgBox">
              <img src="/img/home4.jpg" className="item" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <CardGroup cards={cards} />
      <div className="container">
        <div
          className="section"
          onClick={() => {
            navigate('/Overview/introduction')
          }}
        >
          <div ref={frame1Ref} className="fromLeft">
            <img src="/img/home6.jpg" alt="" className="frame" style={{ height: '400px' }} />
          </div>
          <div className="homePanel" ref={panel1Ref}>
            <div className="homeTitle">平台简介</div>
            <div className="homeText">
              <div>
                南昌大学超算平台是一项高性能计算系统，由多个节点、交换机和存储系统组成，提供了强大的计算能力和存储资源。
              </div>
              <div>
                平台有管理登录节点、CPU节点、GPU节点和存储节点，共有2184个核心，能够处理大量并行计算任务，为科研和计算需求提供支持。
              </div>
              <div className="homeLink">点击查看完整信息</div>
            </div>
          </div>
        </div>
        <div
          className="section"
          style={{ marginBottom: '250px' }}
          onClick={() => {
            navigate('/Overview/resource')
          }}
        >
          <div className="homePanel" ref={panel2Ref}>
            <div className="homeTitle">平台资源</div>
            <div className="homeText">
              <div>
                • GPU 节点 (3台)：每个节点配置了12块NVIDIA A100 80GB GPU卡，提供强大的GPU INT8
                Tensor计算能力，达到7488 TOPS。
              </div>
              <div>
                • 存储系统（4节点）：提供了总共800TB的并行存储容量，满足大规模数据存储和访问需求。
              </div>
              <div>
                • 集群总共核心数：2184，可同时处理大量并行计算任务，满足南昌大学的科研和计算需求。
              </div>
              <div className="homeLink">点击查看完整信息</div>
            </div>
          </div>
          <div ref={frame2Ref} className="fromRight">
            <img src="/img/home5.jpg" alt="" className="frame" style={{ height: '400px' }} />
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Home
