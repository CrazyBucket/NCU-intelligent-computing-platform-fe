import { FC } from 'react'
import jifang from '@/assets/jifang.png'
import './index.css'

const Introduction: FC = () => {
  return (
    <div className="introduction">
      <div style={{ paddingRight: '20px' }}>
        <div style={{ fontWeight: '700', fontSize: '26px', marginBottom: '30px' }}>
          智算平台简介
        </div>
        <p style={{ minWidth: '375px' }}>
          南昌大学智算中心是南昌大学重点建设的科研支撑平台，拥有一流的计算设备和技术团队，为南昌大学及社会各界提供优质高效的科研计算支撑服务。
          超算中心采用武汉大学超级计算中心集群计算系统作为核心设备，由475台CPU服务器、168台KNL服务器和174台GPU服务器组成，总体计算能力理论峰值为6650万亿次。
          超算中心除承担南昌大学大规模科学计算和工程计算任务外，还将以其强大的数据处理和存储能力为社会提供云计算服务，支持重大课题或协作研发项目。同时，超算中心还支持各学科领域对于大规模数据处理和大规模科学计算的普遍需求，专门满足学科领域对于高性能计算的特殊需求，以及各院系日常教学对于高性能计算的基本需求。
          超算中心的技术团队将以专业的态度和高水平的技术为用户提供优质高效的高性能计算服务，竭诚为全校各领域的高性能计算用户提供支持，欢迎广大用户积极使用
        </p>
      </div>
      <div className="imgWarp">
        <img src={jifang} width="500" />
      </div>
    </div>
  )
}

export default Introduction
