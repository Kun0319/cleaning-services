import React from 'react';
import './case.css';


function CommentItem({ imgSrc, stars, content }) {
  return (
    <div className="commentitem">
      <div className="commentpeople">
        <img src={imgSrc} className="people" />
        {Array.from({ length: stars }).map((_, starIndex) => (
          <img key={starIndex} src="images/icon-star.png" className="caseicon" />
        ))}
      </div>
      <p>{content}</p>
    </div>
  );
}

export default CommentItem;
