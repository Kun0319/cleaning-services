import React, { useState } from 'react';
import './case.css';

function CardContainer() {

    const cardData = [
        { imgSrc: 'images/case-004.png', title: '客廳清潔', date: '2022/10' },
        { imgSrc: 'images/case-005.png', title: '浴室清潔', date: '2022/10' },
        { imgSrc: 'images/case-006.png', title: '餐廳清潔', date: '2022/09' },
        { imgSrc: 'images/case-007.png', title: '客廳清潔', date: '2022/06' },
        { imgSrc: 'images/case-004.png', title: '客廳清潔', date: '2022/06' },
        { imgSrc: 'images/case-008.png', title: '廚房清潔', date: '2022/02' },
    ];

    const [flippedCards, setFlippedCards] = useState(Array(cardData.length).fill(false));

    const handleCardClick = (index) => {
        const newFlippedCards = [...flippedCards];
        newFlippedCards[index] = !newFlippedCards[index];
        setFlippedCards(newFlippedCards);
    };

    return (
        <div className="casecardcontainer">
            {cardData.map((card, index) => (
                <div
                    className={`casecard ${flippedCards[index] ? 'flipped' : ''}`}
                    key={index}
                    onClick={() => handleCardClick(index)}
                >
                    <div className="flipper">
                        <div className="front">
                            <img src={card.imgSrc} alt="" className="caseimg" />
                            <div className="casecontent">
                                <p>{card.title}</p>
                                <p>{card.date}</p>
                            </div>
                        </div>
                        <div className="back">
                            <img src={card.imgSrc} alt="" className="caseimg" />
                            <div className="casecontent">
                                <p>{card.title}</p>
                                <p>{card.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardContainer;
