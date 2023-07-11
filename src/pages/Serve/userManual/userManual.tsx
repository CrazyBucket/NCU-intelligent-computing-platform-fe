import DownloadBtn from '@/components/downloadBtn/downloadBtn'
import file1 from '@/files/Gridview5.7 普通用户 用户手册.pdf'
import file2 from '@/files/曙光SothisAI人工智能管理平台V2.8_普通用户手册.pdf'
import { FC } from 'react'
import './index.css'

const UserManual: FC = () => {
  return (
    <div className="cardGroup">
      <DownloadBtn
        title="用户手册下载1"
        subTitle="Gridview5.7 普通用户 用户手册.pdf"
        fileRoute={file1}
      />
      <DownloadBtn
        title="用户手册下载2"
        subTitle="曙光SothisAI人工智能管理平台V2.8_普通用户手册.pdf"
        fileRoute={file2}
      />
    </div>
  )
}

export default UserManual
