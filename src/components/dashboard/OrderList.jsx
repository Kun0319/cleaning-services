import "./dashboard.css";
import data from "./fakeList.json"
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const OrderList = (props) => {
  const [number, setNumber] = useState(5);//顯示幾筆
  const [start, setStart] = useState(0);//從哪開始
  // 目標頁數
  // const pages = (Math.ceil(data.length / number))
  // 起始頁數
  // const [page, setPage] = useState(1);
  const navigate = useNavigate()

  const prevPageClick = () => {
    console.log(number, start)
    setNumber(number - 5 > 0 ? number - 5 : 5)
    setStart(start - 5 > 0 ? start - 5 : 0)
  }
  const nextPageClick = () => {
    console.log(number, start)
    setNumber(start + 5 < data.length ? number + 5 : number)
    setStart(start + 5 < data.length ? start + 5 : start)
  }
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
          {data.slice(start, number).map(({
            orderNumber,
            memberId,
            orderDate,
            weekOfTimes,
            weekOfAmount,
            price,
            orderStatus }) => {
            return (
              <tr key={memberId} onClick={() => {
                navigate(`/dashboard/AdminOrder/${memberId}`)
              }}>
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
      <div className="orderBtn-group">
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