import React, { useState } from "react";
import Calendar from "react-calendar";
import "../../pages/book/book_style.css";

// setNextBtn, nextBtn,
function MyCalendar({ formData, setFormData, freeDays, checkDataNum }) {
  // console.log(freeDays);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekday = ["日", "一", "二", "三", "四", "五", "六"];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    formData.date = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    setFormData(formData);
    // if (checkDataNum.length === 2) {
    //   setNextBtn('/book/book3');
    // } else {
    //   setNextBtn('#');
    // }
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const maxdate = new Date();
  maxdate.setMonth(maxdate.getMonth() + 2);
  let allowedDates = [];
  allowedDates = freeDays.map((d, index) => {
    return new Date(d);
  });
  const tileDisabled = ({ date }) => {
    return !allowedDates.some(
      (allowedDate) => date.toDateString() === allowedDate.toDateString()
    );
  };
  const tileClassName = ({ date }) => {
    if (
      selectedDate &&
      date.toDateString() === selectedDate.toDateString() &&
      date.toDateString() !== new Date().toDateString()
    ) {
      return "selected";
    } else return "";
  };
  return (
    <div className="calendar-container">
      <h5 className="mb-4">3. 選擇服務開始日期</h5>
      <Calendar
        onClickDay={handleDateChange}
        value={null}
        minDate={tomorrow}
        maxDate={maxdate}
        calendarType="hebrew"
        showNeighboringMonth={false}
        formatDay={(locale, date) => {
          return date.getDate().toString();
        }}
        formatShortWeekday={(locale, date) => {
          return weekday[date.getDay()];
        }}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
      />
    </div>
  );
}
export default MyCalendar;
