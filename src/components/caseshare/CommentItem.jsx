import React from 'react';
import { useState } from 'react';
import './case.css';
import Memberscore from './memberscore';

function CommentItem({ imgSrc, stars, content }) {
  const [showMemberscore, setShowMemberscore] = useState(false);

  const openMemberscore = () => {
    setShowMemberscore(true);
  };

  const closeMemberscore = () => {
    setShowMemberscore(false);
  };

  return (
    <div className="commentitem" onClick={openMemberscore}>
      <div className="commentpeople">
        <img src={imgSrc} className="people" alt="People" />
        {Array.from({ length: stars }).map((_, starIndex) => (
          <img
            key={starIndex}
            src="images/icon-star.png"
            className="caseicon"
            alt="Star Icon"
          />
        ))}
      </div>
      <p>{content}</p>

      {showMemberscore && (
        <div className="memberscore-overlay" onClick={closeMemberscore}>
          <Memberscore onClose={closeMemberscore} />
        </div>
      )}
    </div>
  );
}

export default CommentItem;
