import React, { FC, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import book from '@/assets/book.svg'
import intro from '@/assets/intro.svg'
import person from '@/assets/person.svg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './index.css'
import CardGroup from '@/components/cardGroup/cardGroup'

const Home: FC = () => {
  const imagesRef = useRef<HTMLImageElement[]>([])
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    imagesRef.current.forEach(image => {
      gsap.fromTo(
        image,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: image,
            start: 'top bottom-=100',
            end: '90% top',
            scrub: true,
          },
        },
      )
    })
  }, [])

  return (
    <div>
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
        </Swiper>
      </div>
      <CardGroup cards={cards} />
      <img
        ref={el => el && imagesRef.current.push(el)}
        src="../../../public/img/home2.jpg"
        alt=""
      />

      <img
        ref={el => el && imagesRef.current.push(el)}
        src="../../../public/img/home4.jpg"
        alt=""
      />
      <img
        ref={el => el && imagesRef.current.push(el)}
        src="../../../public/img/home5.jpg"
        alt=""
      />
    </div>
  )
}

export default Home
