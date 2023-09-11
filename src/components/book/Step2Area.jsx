import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import MyCalendar from "./MyCalendar";
import axios from "axios";

const Step2Area = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const [weekMode, setWeekMode] = useState([]);
  const [timeMode, setTimeMode] = useState([1, 1, 1]);
  const [dayMode, setDayMode] = useState([]);
  const checkDataNum = document.getElementsByClassName("selected");

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
  const changeClickStyle2 = (e, pElm, tElm, t) => {
    const otherItems = document.querySelectorAll(pElm);
    const clearTime = document.querySelectorAll(t);
    otherItems.forEach((item) => {
      item.classList.remove("selected");
    });
    clearTime.forEach((item) => {
      item.classList.remove("selected");
    });
    let targetElement = e.target;
    while (!targetElement.classList.contains(tElm)) {
      targetElement = targetElement.parentElement;
    }
    targetElement.classList.toggle("selected");
    formData.week = Number(e.target.id);
    setFormData(formData);
    if (formData.week) {
      axios
        .get(
          `http://localhost:4107/book/free-time?employeeid=${formData.employeeid}&weekDay=${formData.week}`
        )
        .then((res) => {
          setTimeMode(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const changeClickStyle3 = (e, pElm, tElm) => {
    const otherItems = document.querySelectorAll(pElm);
    otherItems.forEach((item) => {
      item.classList.remove("selected");
    });
    let targetElement = e.target;
    while (!targetElement.classList.contains(tElm)) {
      targetElement = targetElement.parentElement;
    }
    targetElement.classList.toggle("selected");
    formData.time = Number(e.target.id);
    setFormData(formData);
    if (formData.week) {
      axios
        .get(
          `http://localhost:4107/book/free-time?employeeid=${formData.employeeid}&weekDay=${formData.week}&timespan=${formData.time}`
        )
        .then((res) => {
          setDayMode(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    axios
      .get(
        `http://localhost:4107/book/free-time?employeeid=${formData.employeeid}`
      )
      .then((res) => {
        setWeekMode(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const checkForm = (e) => {
    e.preventDefault();
    if (checkDataNum.length === 3) navigate("/book/book3");
    else {
      alert("請完成表單填寫!");
    }
  };

  return (
    <form
      action=""
      method="post"
      className="container d-flex  justify-content-center align-items-center flex-column"
    >
      <div className="d-flex container justify-content-center align-items-center book-step1">
        <div className="left">
          <div className="step2Top">
            <h5>1. 選擇服務時間</h5>
            <div className="chooseTime">
              {weekMode.map((week, index) => {
                if (week) {
                  return (
                    <div
                      className="service-week"
                      key={index}
                      id={index}
                      onClick={(e) => {
                        changeClickStyle2(
                          e,
                          ".service-week",
                          "service-week",
                          ".service-time"
                        );
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
            <h5>2. 選擇服務時段</h5>
            <div className="chooseTime">
              {timeMode.map((t, index) => {
                if (t) {
                  return (
                    <div
                      className="service-time"
                      key={index}
                      id={index}
                      onClick={(e) => {
                        changeClickStyle3(e, ".service-time", "service-time");
                      }}
                    >
                      {time[index]}
                    </div>
                  );
                } else {
                  return (
                    <div className="not-choose" key={index}>
                      {time[index]}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="right">
          <MyCalendar
            formData={formData}
            setFormData={setFormData}
            freeDays={dayMode}
            // setNextBtn={setNextBtn}
            // nextBtn={nextBtn}
            checkDataNum={checkDataNum}
          />
        </div>
      </div>
      <Button pre="/book" next="/book/book3" onClick={checkForm} />
    </form>
  );
};

export default Step2Area;
