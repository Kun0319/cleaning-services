import React, { useState, useEffect } from "react";
import Button from "./Button";
import MyCalendar from "./MyCalendar";
import axios from "axios";

const Step2Area = ({ formData, setFormData }) => {
  const weeks = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const time = ["08:00", "13:00", "18:00"];
  const changeClickStyle2 = (e, pElm, tElm) => {
    const otherItems = document.querySelectorAll(pElm);
    otherItems.forEach((item) => {
      item.classList.remove("selected");
    });
    let targetElement = e.target;
    while (!targetElement.classList.contains(tElm)) {
      targetElement = targetElement.parentElement;
    }
    targetElement.classList.toggle("selected");
  };
  const [weekMode, setWeekMode] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4107/book/free-time")
      .then((res) => {
        setWeekMode(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              {weekMode.map((week, index) => {
                if (week) {
                  return (
                    <div
                      className="service-week"
                      key={index}
                      onClick={(e) => {
                        changeClickStyle2(e, ".service-week", "service-week");
                      }}
                    >
                      {weeks[index]}
                    </div>
                  );
                } else {
                  return (
                    <div className="not-choose" key={index}>
                      {weeks[index]}
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="step2Bottom">
            <h5>選擇服務時段</h5>
            <div className="chooseTime">
              {time.map((time, index) => {
                return (
                  <div
                    className="service-time"
                    key={index}
                    onClick={(e) => {
                      changeClickStyle2(e, ".service-time", "service-time");
                    }}
                  >
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
      <Button pre="/book" next="/book/book3" />
    </form>
  );
};

export default Step2Area;
