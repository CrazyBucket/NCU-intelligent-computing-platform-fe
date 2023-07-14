import { FC } from 'react'
import useClipboard from 'react-use-clipboard'
import toast from 'react-hot-toast'
import MoudleTitle from '@/components/moudleTitle/moudleTitle'
import './index.css'

const ContactUs: FC = () => {
  const [isCopied, setCopied] = useClipboard('ncushuguang@qq.com')
  const [copy, setCopy] = useClipboard('748925603')
  const handleToast = () => {
    toast.success('复制成功')
  }
  return (
    <div>
      <MoudleTitle title="联系我们" icon="" />
      <div
        className="textBox"
        onClick={() => {
          setCopied(), handleToast()
        }}
      >
        邮箱：ncushuguang@qq.com
      </div>
      <div
        className="textBox"
        onClick={() => {
          setCopy(), handleToast()
        }}
      >
        Q Q : 748925603
      </div>
    </div>
  )
}

export default ContactUs
