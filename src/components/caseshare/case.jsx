import React from "react";
import './case.css';
import CommentItem from "./CommentItem";

function CardContainer() {
  const cardData = [
    { imgSrc: 'images/case-004.png', title: '客廳清潔', date: '2022/10' },
    { imgSrc: 'images/case-005.png', title: '浴室清潔', date: '2022/10' },
    { imgSrc: 'images/case-006.png', title: '餐廳清潔', date: '2022/09' },
    { imgSrc: 'images/case-007.png', title: '客廳清潔', date: '2022/06' },
    { imgSrc: 'images/case-008.png', title: '廚房清潔', date: '2022/02' },
  ];

  return (
    <div className="cardcontainer">
      {cardData.map((card, index) => (
        <div className="casecard" key={index}>
          <img src={card.imgSrc} alt="" className="caseimg"/>
          <div className="content">
            <p>{card.title}</p>
            <p>{card.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


const Case = () => {
  const commentData = [
    { imgSrc: 'images/case-001.png', stars: 5, content: '打掃得非常乾淨，尤其是師傅非常仔細！' },
    { imgSrc: 'images/case-002.png', stars: 4, content: '解決了我多日的煩腦，上班沒時間清掃廁所，謝謝！' },
    { imgSrc: 'images/case-001.png', stars: 5, content: '推推！臥室的塵蟎都清除了，呼吸真新鮮！' }
  ];

  return (
    <>
      <div className="caseTitle">
        <h2>案例分享</h2>
      </div>

      <CardContainer />

      <div className="comment">
        {commentData.map((comment, index) => (
          <CommentItem key={index} {...comment} />
        ))}
      </div>
    </>
  );
}




export default Case;