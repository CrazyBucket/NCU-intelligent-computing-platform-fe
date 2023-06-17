import { FC } from 'react'
import notFound from '@/assets/404.svg'

const NotFound: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '80px',
      }}
    >
      <img src={notFound} alt="" />
    </div>
  )
}

export default NotFound
