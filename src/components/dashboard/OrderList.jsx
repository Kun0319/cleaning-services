import "./dashboard.css";
import data from "./fakeList.json"
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const OrderList = (props) => {
  const limitCount = 8;//顯示幾筆
  const [number, setNumber] = useState(limitCount);
  const [start, setStart] = useState(0);//從哪開始
  const [getData, setGetData] = useState(data)
  const [inputVal, setInPutVal] = useState('')
  const navigate = useNavigate()//導向
  // 目標頁數
  // const pages = (Math.ceil(data.length / number))
  // 起始頁數
  // const [page, setPage] = useState(1);


  const handleInPutVal = (e) => {
    setInPutVal(e.target.value)
  }
  const sreachOrder = () => {
    data.filter((obj) => {
      let res = {}
      for (let val in obj) {
        if (obj[val] === inputVal) {
          res = obj
        }
      }
      console.log(res);
    })
  }

  const handleOrderStatus = (orderStatus) => {
    if (orderStatus === "1") {
      return "新訂單"
    } else if (orderStatus === "99") {
      return "已完成"
    } return "未完成"
  }

  const prevPageClick = () => {
    setNumber(number - limitCount > 0 ? number - limitCount : limitCount)
    setStart(start - limitCount > 0 ? start - limitCount : 0)
  }
  const nextPageClick = () => {
    setNumber(start + limitCount < data.length ? number + limitCount : number)
    setStart(start + limitCount < data.length ? start + limitCount : start)
  }
  return (
    <div className="dashOrder">
      <div className="orderHead">
        <h3>管理訂單</h3>
        <img src="/images/search.png" alt="img-button" className="aside-img-button"
          onClick={sreachOrder} />
        <input className="aside-input" type="text" placeholder="查詢訂單" value={inputVal} onChange={handleInPutVal}
          onClick={(e) => { e.target.value = '' }} />
      </div>
      <table>
        <thead className="orderThead">
          <tr id="orderTh">
            <th>訂單編號</th>
            <th>會員編號</th>
            <th>訂單日期</th>
            <th>清潔頻率</th>
            <th>清潔週數</th>
            <th>訂單金額</th>
            <th>訂單狀態</th>
          </tr>
          <tr id="orderTh_RWD">
            <th>No.</th>
            <th>ID</th>
            <th>Date</th>
            <th>WoT</th>
            <th>WoA</th>
            <th>Price</th>
            <th>status</th>
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
                <td>{handleOrderStatus(orderStatus)}</td>
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