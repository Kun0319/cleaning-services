import React from "react";
import Button from "./Button";
import Calender from "./Calendar.jsx";

const Step2Area = () => {
  return (
    <form
      action=""
      method="post"
      className="container d-flex  justify-content-center align-items-center flex-column"
    >
      <div className="d-flex container justify-content-center align-items-center book-step1">
        <div className="left">
          <div className="step2Top">
            <h5>選擇服務時間</h5>
            <div className="chooseTime">
              <div className="service-week">星期一</div>
              <div className="service-week">星期二</div>
              <div className="service-week">星期三</div>
              <div className="service-week">星期四</div>
              <div className="service-week">星期五</div>
              <div className="service-week">星期六</div>
            </div>
          </div>
          <div className="step2Bottom">
            <h5>選擇服務時段</h5>
            <div className="chooseTime">
              <div className="service-week">08:00</div>
              <div className="service-week">13:00</div>
              <div className="service-week">18:00</div>
            </div>
          </div>
        </div>
        <div className="right">
          <Calender />
        </div>
      </div>
      <Button />
    </form>
  );
};

export default Step2Area;
