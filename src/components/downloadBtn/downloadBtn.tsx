import { FC } from 'react'
import download from '@/assets/download.svg'
import './index.css'

interface fileProps {
  title: string
  subTitle: string
  fileRoute: string
}

const DownloadBtn: FC<fileProps> = ({ title, subTitle, fileRoute }) => {
  return (
    <a className="download" href={fileRoute} download={subTitle}>
      <img src={download} style={{ marginLeft: '20px' }} />
      <div className="downloadContent">
        <div className="downloadTitle">
          <div>{title}</div>
        </div>
        <div className="downloadSubTitle">{subTitle}</div>
      </div>
    </a>
  )
}

export default DownloadBtn
