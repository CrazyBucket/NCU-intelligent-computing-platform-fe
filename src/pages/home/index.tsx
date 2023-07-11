import { FC } from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from '@/components/card/card'
import book from '@/assets/book.svg'
import intro from '@/assets/intro.svg'
import person from '@/assets/person.svg'
import home1 from '@/assets/home1.png'
import home2 from '@/assets/home2.png'
import 'swiper/swiper-bundle.css'
import './index.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Home: FC = () => {
  return (
    <div>
      <div className="swiper-container">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <div className="bgBox">
              <img src={home1} className="item" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bgBox">
              <img src={home2} className="item" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="cardGroup">
        <Card
          icon={intro}
          title="智算平台简介"
          subTitle="南昌大学智算平台，为用户提供超算服务"
          navigateTo="/Overview/introduction"
        />
        <Card
          icon={person}
          title="账号申请"
          subTitle="点击进入申请账号详情页"
          navigateTo="/Serve/applyAccount"
        />
        <Card
          icon={book}
          title="用户手册"
          subTitle="点击查看用户手册"
          navigateTo="/Serve/userManual"
        />
      </div>
    </div>
  )
}

export default Home
