import React, { useState } from 'react';
import "./order.css";
import Fraction from './Fraction';
import data from "./scoreFake.json";

function ContactCard() {
    const score = data[0];

    const Score = () => {
        const [counters, setCounters] = useState([
            { id: 1, name: '打掃點數：', value: 5 },
            { id: 2, name: '效率點數：', value: 5 },
            { id: 3, name: '態度點數：', value: 5 },
            { id: 4, name: '細心點數：', value: 5 }
        ]);

        const [isOpen, setIsOpen] = useState(true);

        const handleClose = () => {
            setIsOpen(false);
        };

        return (
            <dialog open className="scoreOP">
                <div className="scoreTop"><u>填寫評價</u></div>
                <div className="scoreBody">
                    <img className="orderStaff" src={score.img} alt="" />
                </div>
                <div className="scoreBody ">
                    <img className="scoreStart" src={score.starImg} alt="" />
                </div>
                <div className="scoreBody scoretext">
                    <span>{score.orderStaff}</span>
                </div>
                <div className='scoreBody scoretext'>
                    {counters.map((counter, index) => (
                        <Fraction
                            key={counter.id}
                            name={counter.name}
                            value={counter.value}
                            order={index}
                        />
                    ))}
                </div>
                <input className="scoreBody scoreinput" type="text" placeholder="請寫下評論內容" />
                <div className="scoreBody">
                    <div className="orderBtns">
                        <button
                            onClick={handleClose}
                            className="orderBtn"
                        >
                            略過
                        </button>
                        <button
                            onClick={() => {
                                alert("AAAAAAAAAAAAAAAAAA");
                            }}
                            className="orderBtn"
                        >
                            送出評論
                        </button>
                    </div>
                </div>
            </dialog>
        );
    }

    return (
        <div>
            <Score />
        </div>
    );
}

export default ContactCard;
