import React, { useState, useEffect } from "react";
import "./order.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const limitCount = 4;
  const [number, setNumber] = useState(limitCount);
  const [start, setStart] = useState(0); //從哪開始
  const navigate = useNavigate();
  const [orderAPI, setOrderAPI] = useState([]); //API變數

  // 會員資料API
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          "http://localhost:4107/member", {
          withCredentials: true
        });
        if (Array.isArray(result.data)) {
          setOrderAPI(result.data);
        } else {
          console.error("Received non-array data from the API.");
        }
        setOrderAPI(() => {
          return result.data;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // 判斷訂單狀態
  const handleOrderStatus = (state) => {
    if (state === 0) {
      return "新訂單";
    } else if (state === 1) {
      return "未完成";
    }
    return "已完成";
  };

  // 換頁
  const prevPageClick = () => {
    setNumber(number - limitCount > 0 ? number - limitCount : limitCount);
    setStart(start - limitCount > 0 ? start - limitCount : 0);
  };
  const nextPageClick = (data) => {
    setNumber(start + limitCount < data.length ? number + limitCount : number);
    setStart(start + limitCount < data.length ? start + limitCount : start);
  };

  return (
    <div className="dashOrder">
      <div className="orderInfo">
        <span className="orderCard">
          <img src="/images/order.png" alt="" />
          <p className="orderText ">訂單成立</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderGoing.png" alt="" />
          <p className="orderText ">已送達</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderCleaning.png" alt="" />
          <p className="orderText ">清掃中</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderCleaned.png" alt="" />
          <p className="orderText ">完成清潔</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderDone.png" alt="" />
          <p className="orderText ">完成訂單</p>
        </span>
      </div>
      <table>
        <thead className="orderThead">
          <tr>
            <th>訂單編號</th>
            <th>員工編號</th>
            <th>訂單日期</th>
            <th>清潔週數</th>
            <th>剩餘次數</th>
            <th>訂單金額</th>
            <th>訂單狀態</th>
          </tr>
        </thead>
        <tbody className="orderTbody">
          {orderAPI
            .slice(start, number)
            .map(
              ({
                ornumber,
                employeeid,
                ordertime,
                weeks,
                donetime,
                money,
                state,
              }) => {
                return (
                  <tr
                    key={ornumber}
                    onClick={() => {
                      navigate(`/member/${ornumber}`);
                    }}
                  >
                    <td>{ornumber}</td>
                    <td>{employeeid}</td>
                    <td>{new Date(ordertime).toLocaleDateString('en-CA')}</td>
                    <td>{weeks}週</td>
                    <td>{donetime}次</td>
                    <td>{money}</td>
                    <td>{handleOrderStatus(state)}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      <div className="orderBtn-group">
        <button onClick={() => prevPageClick()} className="orderBtn">
          上一頁
        </button>
        <button onClick={() => nextPageClick(orderAPI)} className="orderBtn">
          下一頁
        </button>
      </div>
    </div>
  );
};

export default Order;
