import React, { useState } from "react";
import Calendar from "react-calendar";
import "../../pages/book/book_style.css";

function MyCalendar({ formData, setFormData, freeDays }) {
  // console.log(freeDays);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekday = ["日", "一", "二", "三", "四", "五", "六"];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    formData.date = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    setFormData(formData);
  };
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const maxdate = new Date();
  // maxdate.setMonth(maxdate.getMonth() + 2);
  maxdate.setMonth(maxdate.getMonth() + 1);
  let allowedDates = [];
  allowedDates = freeDays.map((d, index) => {
    console.log(d);
    return new Date(d);
  });
  const tileDisabled = ({ date }) => {
    // 如果日期在允许的日期数组中，则返回false，允许选择
    return !allowedDates.some(
      (allowedDate) => date.toDateString() === allowedDate.toDateString()
    );
  };
  return (
    <div className="calendar-container">
      <h5 className="mb-4">3. 選擇服務開始日期</h5>
      <Calendar
        onChange={handleDateChange}
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
        tileDisabled={tileDisabled} // 使用自定义的tileDisabled函数
      />
    </div>
  );
}
export default MyCalendar;
