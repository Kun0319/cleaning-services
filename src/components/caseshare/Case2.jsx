import './Case2.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentItem from './CommentItem';

const Case2 = () => {
  const [marquee, setMarquee] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4107/total/mar')
      .then((res) => {
        setMarquee(res.data);
      })
      .catch((err) => {
        console.error('no', err);
      });
  }, []);

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <div className="casecomment">
          {marquee.map((marq, index) => (
            <div key={index}>
              <CommentItem
                name={marq.employeename}
                imgSrc={marq.photo}
                stars={marq.total_efficiency}
                content={marq.reply}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Case2;