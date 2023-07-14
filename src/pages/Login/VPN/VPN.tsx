import { FC } from 'react'
import './index.css'

const VPN: FC = () => {
  return (
    <div style={{ marginTop: '30px' }}>
      <div className="textBox">
        <p style={{ fontSize: '24px', paddingTop: '30px' }}>步骤：</p>
        <div style={{ paddingLeft: '20px', marginBottom: '30px' }}>
          <p style={{ fontSize: '20px' }}>先登陆：</p>
          <a
            href="http://222-204-28-249-7090-p.dxvpn.ncu.edu.cn:8118"
            style={{ paddingLeft: '20px' }}
            target="_blank"
          >
            http://222-204-28-249-7090-p.dxvpn.ncu.edu.cn:8118
          </a>
          <p style={{ fontSize: '20px', paddingTop: '30px' }}>登陆完成出现网页之后点击：</p>
          <a
            href="http://222-204-28-249-7090-p.dxvpn.ncu.edu.cn:8118/login/loginPage.action8"
            style={{ paddingLeft: '20px' }}
            target="_blank"
          >
            http://222-204-28-249-7090-p.dxvpn.ncu.edu.cn:8118/login/loginPage.action8
          </a>
        </div>
      </div>
    </div>
  )
}

export default VPN
