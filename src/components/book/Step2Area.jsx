import React from "react";
import Button from "./Button";
import MyCalendar from "./MyCalendar";

const Step2Area = () => {
  const weeks = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  const time = ["08:00", "13:00", "18:00"];

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
              {weeks.map((week, index) => {
                return (
                  <div className="service-week" key={index}>
                    {week}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="step2Bottom">
            <h5>選擇服務時段</h5>
            <div className="chooseTime">
              {time.map((time, index) => {
                return (
                  <div className="service-week" key={index}>
                    {time}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right">
          <MyCalendar />
        </div>
      </div>
      <Button pre="/book1" next="/book3" />
    </form>
  );
};

export default Step2Area;
