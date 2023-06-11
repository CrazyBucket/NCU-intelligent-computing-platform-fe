import { FC } from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import home1 from '@/assets/home1.png'
import home2 from '@/assets/home2.png'
import './index.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Home: FC = () => {
  return (
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
  )
}

export default Home
