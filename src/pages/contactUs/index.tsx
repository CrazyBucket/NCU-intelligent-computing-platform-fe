import { FC } from 'react'
import Card from '@/components/card/card'
import manage from '@/assets/manage.svg'
import net from '@/assets/net.svg'
import install from '@/assets/install.svg'
import './index.css'

const ContactUs: FC = () => {
  return (
    <div className="cardGroup">
      <Card
        icon={net}
        title="校外用户申请开通超算中心VPN"
        subTitle="点击查看申请需求"
        navigateTo="/contactUs/VPN"
      />
      <Card
        icon={install}
        title="软件安装协助"
        subTitle="软件安装协助说明"
        navigateTo="/contactUs/install"
      />
      <Card
        icon={manage}
        title="智算中心管理"
        subTitle="智算中心管理界面"
        navigateTo="/contactUs/manage"
      />
    </div>
  )
}

export default ContactUs
