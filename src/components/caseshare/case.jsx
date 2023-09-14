import React from "react";
import { useState } from "react";
import './case.css';
import CommentItem from "./CommentItem";
import Navbar from "../navbar";
import Footer from "../Footer";
import Memberscore from "./memberscore";
import CardContainer from "./Cardcontainer";
import Case2 from "./Case2";



const Case = () => {
  const commentData = [
    { imgSrc: 'images/case-001.png', stars: 5, content: '打掃得非常乾淨，尤其是師傅非常仔細！' },
    { imgSrc: 'images/case-002.png', stars: 4, content: '解決了我多日的煩腦，上班沒時間清掃廁所，謝謝！' },
    { imgSrc: 'images/case-001.png', stars: 5, content: '推推！臥室的塵蟎都清除了，呼吸真新鮮！' }
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="caseTitle">
          <h2>案例分享</h2>
        </div>

        <CardContainer />

        {/* <div className="casecomment">
          {commentData.map((comment, index) => (
            <CommentItem key={index} {...comment} />
          ))}
        </div> */}
        </div>
        <Case2/>
      <Footer />
    </>
  );
}




export default Case;