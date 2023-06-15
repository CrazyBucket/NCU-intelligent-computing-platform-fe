import { FC } from 'react'
import DownloadBtn from '@/components/downloadBtn/downloadBtn'
// @ts-ignore
import doc1 from '@/files/附件一：服务器申请表（基本信息表）.xlsx'
// @ts-ignore
import doc2 from '@/files/附件二：服务器申请表（详情表）.docx'
import apply1 from '@/assets/apply1.png'
import apply2 from '@/assets/apply2.png'
import './index.css'

const ApplyAccount: FC = () => {
  return (
    <div style={{ paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>南昌大学人工智能研究院服务器申请流程</h1>
      <h2>第一章 总则</h2>
      <p>
        第一条
        为适应“世界一流大学和世界一流学科”建设需求，以应势而动的谋略深化双“一号工程”，加强我校人工智能工业研究院的建设与管理，充分发挥智能运算资源的整体效益，提高办学水平和创新人才培养质量，根据《南昌大学大型仪器设备开放共享管理办法》、《南昌大学仪器设备管理办法》等文件精神，结合研究院实际，特制定本办法。
      </p>
      <p>
        第二条
        信息基础设施的集约化建设是学校“双一流”建设的重要措施。为加强信息工程学院教学、科研、管理用服务器平台的安全保护和网络管理，实现资源共享，节约管理成本，学校人工智能工业研究院向学校师生及各类科研机构开放智能运算平台，提供高通量算力服务。
      </p>
      <p>
        第三条
        本法为《南昌大学人工智能工业研究院智能运算平台管理办法》中运算服务申请补充说明，具体管理条约请参考平台管理方法文件。
      </p>

      <h2>第二章 服务器申请流程</h2>
      <p>
        一. 用户申请流程
        <ol>
          <li>
            1）
            用户填写《附件一：服务器申请表（基本信息表）》,《附件二：服务器申请表（详情表）》并将电子文件发送至邮箱：
          </li>
          <p>ncushuguang@qq.com</p>
          <li>
            2） 登入链接： http://222.204.28.249:7090/login/loginPage.action
            进入用户注册界面并填写相关信息进行账号注册
          </li>
          <img src={apply1} style={{ marginTop: '30px', marginBottom: '30px' }} />
          <li>
            3） 管理员审批
            <br />
            工作人员会在1-3个工作日内为您审批，对于申请通过的账号人员请加入以下工作群便于后继问题反馈，流程管理等工作的进行，感谢您的配合
          </li>
        </ol>
      </p>
      <p>
        二．QQ群：
        <p>群号748925603</p>
      </p>
      <img src={apply2} alt="" style={{ margin: '0 auto' }} />
      <h2>第三章 附则</h2>
      <p>
        第四条
        人工智能工业研究院有权对服务器进行监控。如发现设备存在违犯法、违规情况，因存在安全漏洞、黑客入侵或出现不可抗力致使机房运行环境受损等异常情况，人工智能工业研究院有权采取应急处置措施直至关停服务器。
      </p>
      <p>
        第五条
        服务器管理和使用方式等相关技术性问题由服务器供应商解释与咨询，其支持部门为人工智能工业研究院信息化办公室。
      </p>
      <p>第六条 本办法自颁布之日起实施。本办法由人工智能工业研究院负责解释。</p>
      <div className="cardGroup">
        <DownloadBtn
          title="申请表下载1"
          subTitle="附件一：服务器申请表（基本信息表）.xlsx"
          fileRoute={doc1}
        />
        <DownloadBtn
          title="申请表下载2"
          subTitle="附件二：服务器申请表（详情表）.docx"
          fileRoute={doc2}
        />
      </div>
    </div>
  )
}

export default ApplyAccount
