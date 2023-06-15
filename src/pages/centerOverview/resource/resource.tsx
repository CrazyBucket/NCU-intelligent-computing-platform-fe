import { FC } from 'react'
import { Table } from 'antd'
import './index.css'

const dataSource = [
  {
    key: '1',
    category: '管理登录节点（2台）',
    specification: '2* Intel Xeon 4210R（2.4GHz,10C）/64G DDR4/2*240G SSD/100G HDR',
  },
  {
    key: '2',
    category: 'CPU 节点 (42台)',
    specification: '2 Intel Xeon Gold 6336Y（2.4GHz,24C）/256G DDR4/480G SSD/100G HDR',
  },
  {
    key: '3',
    category: 'GPU 节点 (3台)',
    specification: '2:Intel Xeon Gold 6330（2.0GHz,28C）/256G DDR4/2960G SSD/100G HDR',
  },
  {
    key: '4',
    category: '存储系统（4节点）',
    specification: '800T 并行存储容量',
  },
  {
    key: '5',
    category: '总体节点规模',
    specification:
      '2台管理登录节点、42台刀片计算节点、3台GPU节点、4哎存储节点、1台200G HDR 交换机、1台管理交换机',
  },
  {
    key: '6',
    category: '理论双精度浮点运算计算峰值',
    specification: '281.9808Tflops',
  },
  {
    key: '7',
    category: '理论单精度浮点运算计算峰值',
    specification: '565.1616Tflops',
  },
  {
    key: '8',
    category: 'GPU INT8 Tensor 计算能力',
    specification: '7488TOPS',
  },
  {
    key: '9',
    category: '集群总共核心数',
    specification: '2184',
  },
  {
    key: '10',
    category: 'GPU 卡块数',
    specification: '12块NVDIA A100 80G',
  },
  {
    key: '11',
    category: '存储容量',
    specification: '0.8PB',
  },
]

const columns = [
  {
    title: '类别',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '规格',
    dataIndex: 'specification',
    key: 'specification',
  },
]

const Resource: FC = () => {
  return (
    <div>
      <div style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10, marginTop: '50px' }}>
        中心资源
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} bordered />
    </div>
  )
}

export default Resource
