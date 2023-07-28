import NewsTitle from '@/components/newsTitle/newsTitle'
import React from 'react'

const NewsPage1: React.FC = () => {
  return (
    <div className="newsPage">
      <NewsTitle
        title="江西信息通信科技服务站协助承办
科大讯飞进校园技术科普讲座活动"
        time="2023-06-06"
      />
      <img src="/img/news/1/1.jpg" alt="" />
      <p>
        为进一步开展主题教育，深化专业领域认识，以及普及人工智能的前沿应用，紧跟潮流发展趋势，2023年6月6日下午，科大讯飞技术科普讲座暨主题教育活动在南昌大学人工智能工业研究院顺利举行。本次活动的承办方有：南昌大学信息工程学院人工智能系、南昌大学信息工程学院学生开源创客协会、江西省通信学会信息通信科技服务站、中国通信学会江西科技志愿者分队以及南昌大学人工智能与物联网创新创业基地。本次活动由通信学会江西科技志愿者分队成员王振老师主持，出席本次活动的嘉宾有：科大讯飞华中区咨询总监丁晓磊、张鑫、程傅聪、徐恒；以及开源创客协会人工智能副会长高颂扬、电子信息副会长陈科。
      </p>
      <img src="/img/news/1/2.jpg" alt="" />
      <p>
        技术讲座中，科大讯飞的张鑫老师就科大讯飞机器人以及语音软硬件推广与应用，分享了智能语音在各行业的应用，并向与会学生展示了最新的研究成果。他告诉大家：“未来是属于掌握AI的人类的。”鼓励同学们认真学习专业知识。
      </p>
      <img src="/img/news/1/3.jpg" alt="" />
      <p>
        另外，科大讯飞的程傅聪老师就科大讯飞智能硬件产品解决方案，分享了如何应用硬件以及硬件的用途，并在分享结束后，为与会学生提出的问题进行解答。讲座最后，通信学会江西科技志愿者分队核心成员王振老师总结致辞，并鼓励同学们在接下来的日子里多多参与此类科普讲座，刻苦钻研，开拓见识，并向前辈们学习。
      </p>
      <img src="/img/news/1/4.jpg" alt="" />
    </div>
  )
}

export default NewsPage1
