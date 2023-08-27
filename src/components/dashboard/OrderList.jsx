import "./leo.css";
import fakeList from "./fakeList.json"
import React, { useState, useEffect } from 'react'

const OrderList = (props) => {
  const [number, setNumber] = useState(1);//顯示幾筆
  const [start, setStart] = useState(0);//從哪開始
  // let page = (Math.ceil(data.length / number))
  useEffect(() => {
    console.log("Count updated:", start);
  }, [start]);
  const prevPageClick = () => {
    setStart(start - 1)
  }
  const nextPageClick = () => {
    setStart(start + 1)
  }
  // console.log(page, data.length)
  return (
    <div className="dashOrder">
      <h3>管理訂單</h3>
      <table>
        <thead className="orderThead">
          <tr>
            <th>訂單編號</th>
            <th>會員編號</th>
            <th>訂單日期</th>
            <th>清潔頻率</th>
            <th>清潔週數</th>
            <th>訂單金額</th>
            <th>訂單狀態</th>
          </tr>
        </thead>
        <tbody className="orderTbody">
          {fakeList.slice(start, number).map(({
            orderNumber,
            memberId,
            orderDate,
            weekOfTimes,
            weekOfAmount,
            price,
            orderStatus }, i) => {
            return (
              <tr key={i}>
                <td>{orderNumber}</td>
                <td>{memberId}</td>
                <td>{orderDate}</td>
                <td>{weekOfTimes}次&frasl;週</td>
                <td>{weekOfAmount}週</td>
                <td>{price}</td>
                <td>{orderStatus === "1" ? "新訂單" : "執行中"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <div className="orderBtn"
          onClick={prevPageClick}>
          上一頁
        </div>
        <div className="orderBtn"
          onClick={nextPageClick}>
          下一頁
        </div>
      </div>
    </div>
  );
};
export default OrderList;
