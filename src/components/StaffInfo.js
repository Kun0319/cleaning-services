import React from "react";
import "./StaffInfos.css";
const StaffInfo = () => {
  return (
    // 卡片本體
    <div id="staffCard" className={addCardStyle()}>
      {/* 疫苗接踵確認 */}
      <span id="Vaccination" className={getVaccination()}>
        已接種疫苗
      </span>
      {/* 卡片上半部 */}
      <div id="cardInfo" className={addCardInfoStyle()}>
        {/* 員工照片 */}
        <div id="cardImg" className={addCardImg()}>
          <img className="leoImg" src="images/staffimg.jpg" alt="staffImg" />
        </div>
        {/* 員工資訊 */}
        <div>
          編號:<span>24865</span>
        </div>
        <div>員工姓名</div>
        {/* 評價 */}
        <div className="position-relative">
          <img src="images/star2.png" alt="star" />
          {/* clip-path: inset(0 50% 0 0)改變星星數 */}
          <img className="staffScore" src="images/star2Fill.png" alt="Fill" />
          <span>5.0</span>
        </div>
      </div>
      {/* 卡片下半部 */}
      <div className={addAbilityStyle()}>
        <div className="row ">
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-wallet-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z" />
            </svg>
            服務件數
          </div>
          <div className="col">512</div>
        </div>
        <div className="row ">
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-emoji-smile"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
            服務態度
          </div>
          <div className="col">86%</div>
        </div>
        <div className="row ">
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="gold"
              fill="currentColor"
              class="bi bi-bookmark-check-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
              />
            </svg>
            良民證
          </div>
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="gold"
              fill="currentColor"
              class="bi bi-award-fill"
              viewBox="0 0 16 16"
            >
              <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
            </svg>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="gold"
              fill="currentColor"
              class="bi bi-mortarboard-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
            </svg>
            服務證照
          </div>
          <div className="col">居家專業培訓證照</div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">全國清潔專家證照</div>
        </div>
      </div>
    </div>
  );
};

const addCardStyle = () => {
  return "rounded rounded-3 fw-bold p-4 position-relative me-5 staffCard";
};
function addCardInfoStyle() {
  return "container d-flex flex-column align-items-center rounded rounded-3 p-2 staffCardbackgroundColor";
}

function getVaccination() {
  return "border border-danger border-2 position-absolute top-0 end-0 text-danger fs-6";
}
const addCardImg = () => {
  return "border border-2 rounded-circle overflow-hidden object-fit-contain cardImg";
};
const addAbilityStyle = () => {
  return "container text-center p-2";
};
export default StaffInfo;
