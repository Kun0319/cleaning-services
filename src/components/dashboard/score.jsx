import React, { useState } from 'react';
import "./order.css";
import Fraction from './Fraction';

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
                <img className="orderStaff" src="images/orderStaff.png" alt="" />
            </div>
            <div className="scoreBody ">
                <img className="scoreStart" src="images/staffInfo-star.png" alt="" />
            </div>
            <div className="scoreBody scoretext">
                <span>派遣人員：李大媽</span>
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
            <input className="scoreBody scoreinput" type="text" placeholder="請寫下頻論內容" />
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
        </dialog >
    );
}

export default Score;
