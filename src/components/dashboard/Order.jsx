import React, { useState } from 'react';
import "./order.css";
import data from "./orderFake.json";

const Order = () => {

  return (
    <div className="dashOrder">
      <div className="orderInfo">
        <span className="orderCard">
          <img src="images/order.png" alt="" />
          <p className="orderText ">訂單成立</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="images/orderGoing.png" alt="" />
          <p className="orderText ">已送達</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="images/orderCleaning.png" alt="" />
          <p className="orderText ">清掃中</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="images/orderCleaned.png" alt="" />
          <p className="orderText ">完成清潔</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="images/orderDone.png" alt="" />
          <p className="orderText ">完成訂單</p>
        </span>
      </div>
      <table>
        <thead className="orderThead">
          <tr>
            <th>訂單編號</th>
            <th>訂單內容</th>
            <th>訂單狀態</th>
          </tr>
        </thead>
        <tbody className="orderTbody">
          {data.map(({
            index,
            orderNumber,
            content,
            orderStatus }) => {
            return (
              <tr
                key={index}
                onClick={() => {
                  alert("AAAAAAAAAAAAAAAAAA");
                }}
              >
                <td>{orderNumber}</td>
                <td>{content}</td>
                <td>
                  {orderStatus === "0"
                    ? "新訂單"
                    : orderStatus === "1"
                      ? "處理中"
                      : orderStatus === "99"
                        ? "已完成"
                        : "未知狀態"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="orderBtn-group">
        <button
          onClick={() => {
            alert("AAAAAAAAAAAAAAAAAA");
          }}
          className="orderBtn"
        >
          上一頁
        </button>
        <button
          onClick={() => {
            alert("AAAAAAAAAAAAAAAAAA");
          }}
          className="orderBtn"
        >
          下一頁
        </button>
      </div>
    </div>
  );
};

export default Order;
