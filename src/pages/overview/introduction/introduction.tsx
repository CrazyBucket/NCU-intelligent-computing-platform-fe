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
          南昌大学超算平台是一项高性能计算系统，为南昌大学的科研和计算需求提供强大的计算能力和存储资源。该平台由多个节点组成，包括管理登录节点、CPU节点、GPU节点和存储节点，以及相应的交换机和存储系统。
        </p>
        <p style={{ minWidth: '375px' }}>
          管理登录节点方便用户登录和管理超算平台，提供高效的管理功能。平台配置了2台管理登录节点，采用2*
          Intel Xeon 4210R处理器（2.4GHz，10C）、64GB DDR4内存、2*240GB SSD硬盘和100G HDR网络。
        </p>
        <p style={{ minWidth: '375px' }}>
          CPU节点是平台的核心计算单元，共有42台刀片计算节点。每个节点配置了2颗Intel Xeon Gold
          6336Y处理器（2.4GHz，24C）、256GB DDR4内存、480GB SSD硬盘和100G
          HDR网络。这些节点提供强大的双精度和单精度浮点运算能力，分别达到281.9808 Tflops和565.1616
          Tflops。 GPU节点在平台中提供了额外的图形处理能力，共有3台GPU节点。每个节点配置了2颗Intel
          Xeon Gold 6330处理器（2.0GHz，28C）、256GB DDR4内存、2960GB SSD硬盘和100G
          HDR网络。此外，每个GPU节点还配备了12块NVIDIA A100 80GB GPU卡，提供强大的GPU INT8
          Tensor计算能力，达到7488 TOPS。
        </p>

        <p style={{ minWidth: '375px' }}>
          存储系统是平台的关键部分，共有4个存储节点，提供了总共800TB的并行存储容量，满足大规模数据存储和访问需求。此外，平台还配置了1台200G
          HDR交换机和1台管理交换机，以确保节点之间的高速互联和数据传输效率。
        </p>
        <p style={{ minWidth: '375px' }}>
          整个超算平台共有2184个核心，可同时处理大量并行计算任务，满足南昌大学的科研和计算需求。平台提供了强大的计算能力和存储容量，能够加速各种复杂计算和数据处理任务的完成。南昌大学超算平台为学校的科学研究、工程设计和创新发展提供了重要的计算基础设施和支持。
        </p>
      </div>
      <div className="imgWarp">
        <img src={jifang} width="500" />
      </div>
    </div>
  )
}

export default Introduction
