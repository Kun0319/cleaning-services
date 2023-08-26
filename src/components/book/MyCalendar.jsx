import React, { useState } from "react";
import Calendar from "react-calendar";
import "../../pages/book/book_style.css";

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekday = ["日", "一", "二", "三", "四", "五", "六"];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    alert(
      `Selected Date: ${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`
    );
  };
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <div className="calendar-container">
      <h5 className="mb-4">選擇服務開始日期</h5>
      <Calendar
        onChange={handleDateChange}
        value={null}
        minDate={tomorrow}
        calendarType="hebrew"
        showNeighboringMonth={false}
        formatDay={(locale, date) => {
          return date.getDate().toString();
        }}
        formatShortWeekday={(locale, date) => {
          return weekday[date.getDay()];
        }}
      />
    </div>
  );
}
export default MyCalendar;
