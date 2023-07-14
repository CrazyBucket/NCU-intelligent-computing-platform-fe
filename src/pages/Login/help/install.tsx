import DownloadBtn from '@/components/downloadBtn/downloadBtn'
import { FC } from 'react'
import zip1 from '@/files/Xshell7.zip'
import zip2 from '@/files/Xftp7.zip'
import './index.css'

const Help: FC = () => {
  return (
    <div className="cardGroup">
      <DownloadBtn title="软件协助1" subTitle="Xshell7.zip" fileRoute={zip1} />
      <DownloadBtn title="软件协助2" subTitle="Xftp7.zip" fileRoute={zip2} />
    </div>
  )
}

export default Help
