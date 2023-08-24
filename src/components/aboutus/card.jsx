import React from 'react';

function Card({ title, imgSrc, content }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={imgSrc} alt="" />
      <p>{content}</p>
    </div>
  );
}

export default Card;
