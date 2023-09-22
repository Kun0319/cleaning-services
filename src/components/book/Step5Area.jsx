import { React, useContext, useEffect } from "react";
import BookContext from "./book-context";
import { scroll } from "./utils";

const Step5Area = () => {
  useEffect(() => scroll());
  const ctx = useContext(BookContext);
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

  return (
    <div
      className="book-step1 flex-column align-items-center container "
      id="book-step5"
    >
      <div id="book5-top">
        <i className="bi bi-check-circle me-2"></i>
        <h5>預約完成！</h5>
      </div>
      <p className="mt-2 fs-5">我們會將訂單詳細內容寄至您的電子信箱</p>
      <div id="book5-bottom">
        <img src="/images/raccoon.gif" alt="raccoon" />
      </div>
    </div>
  );
};

export default Step5Area;
