import { FC } from 'react'

const NotFound: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '180px',
        flexDirection: 'column',
        color: '#272f42',
        fontWeight: '700',
      }}
    >
      <span style={{ fontSize: '24px' }}>404 NotFound</span>
      <span style={{ fontSize: '36px' }}>该页面不存在</span>
    </div>
  )
}

export default NotFound
