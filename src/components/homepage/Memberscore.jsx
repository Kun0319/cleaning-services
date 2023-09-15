import Modal from 'react-modal';
import React, { useState } from 'react';
import '../caseshare/case';

const Memberscore = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="員工資料"
        className="memberscoreModal"
        overlayClassName="memberscoreOverlay"
      >
  
        <div className="memberscoreTop">
          <u>員工資料</u>
        </div>
        <div className="scorebd scoretext">
          <div className="memberlevel">
            <p>{props.name}</p>
            <p>Level.{props.Level}</p>
          </div>
        </div>
        <div className="scorebd">
          <img className="memberimg" src={props.img} alt="" />
          <div>
            <div className="scorepoint">
              <p>打掃技能</p>
              <img
                src="images\staffInfo-star.png"
                alt="star"
                style={{ clipPath: `inset(0 ${100 - props.clean * 20}% 0 0)` }}
              />
            </div>
            <div className="scorepoint">
              <p>效率技能</p>
              <img
                src="images\staffInfo-star.png"
                alt="star"
                style={{ clipPath: `inset(0 ${100 - props.efficiency * 20}% 0 0)` }}
              />
            </div>
            <div className="scorepoint">
              <p>細心技能</p>
              <img
                src="images\staffInfo-star.png"
                alt="star"
                style={{ clipPath: `inset(0 ${100 - props.careful * 20}% 0 0)` }}
              />
            </div>
            <div className="scorepoint">
              <p>態度技能</p>
              <img
                src="images\staffInfo-star.png"
                alt="star"
                style={{ clipPath: `inset(0 ${100 - props.manner * 20}% 0 0)` }}
              />
            </div>
          </div>
        </div>
        <div className="scorecomment">
          <div className="customername">{props.username}</div>
          <div className="customercomment">{props.reply}</div>
        </div>
      </Modal>
    </div>
  );
};

export default Memberscore;