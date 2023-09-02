import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../components/member/member.css";
const Member = () => {
  const { order } = useParams();
  const [orderData, setOrderData] = useState({});
  //接收資料
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:4107/AdminOrder/${order}`
        );
        setOrderData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  });

  const {
    memberId,
    memberName,
    IDnum,
    email,
    phone,
    city,
    adreess,
    staffName,
    staffId,
    staffPhone,
    staffEmail,
    time_W,
    time_T,
    common,
    pay,
    weekOfTimes,
    orderDate,
    orderNumber,
    orderStatus,
    weekOfAmount,
    finish,
    price,
  } = orderData;

  const handleOrderStatus = (orderStatus) => {
    if (orderStatus === 0) {
      return "新訂單";
    } else if (orderStatus === 1) {
      return "未完成";
    }
    return "已完成";
  };

  async function handleOrderUpdata() {
    try {
      const result = await axios.put(
        "http://localhost:4107/AdminOrder/updata",
        { orderData }
      );
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <div className="Container">
        <h3 className="orderh3">管理訂單</h3>
        <div className="orderContainer">
          <div className="orderContent">
            <table border={1}>
              <tr>
                <th style={{ fontWeight: "600" }}>訂單資料</th>
                <th></th>
              </tr>
              <tr>
                <td>訂單編號:{orderNumber}</td>
                <td>服務星期:{time_W}</td>
              </tr>
              <tr>
                <td>訂單狀態:{handleOrderStatus(orderStatus)}</td>
                <td>服務時段:{time_T}</td>
              </tr>
              <tr>
                <td>付款方式:{pay}</td>
                <td>服務週數:{weekOfAmount}</td>
              </tr>
              <tr>
                <td>訂單金額:{price}</td>
                <td>服務次數:{weekOfTimes}</td>
              </tr>
              <tr>
                <td>訂單日期:{orderDate}</td>
                <td>
                  完成次數:<span style={{ color: "red" }}>{finish}</span>/
                  {weekOfAmount}
                </td>
              </tr>
            </table>
            <table border={1}>
              <tr>
                <th style={{ fontWeight: "600" }}>會員資料</th>
              </tr>
              <tr>
                <td>會員編號:{memberId}</td>
              </tr>
              <tr>
                <td>會員姓名:{memberName}</td>
              </tr>
              <tr>
                <td>身分證字號:{IDnum}</td>
              </tr>
              <tr>
                <td>手機:{phone}</td>
              </tr>
              <tr>
                <td>Email:{email}</td>
              </tr>
              <tr>
                <td>地址:{city + adreess}</td>
              </tr>
            </table>
            <table border={1}>
              <tr>
                <th style={{ fontWeight: "600" }}>清潔員</th>
              </tr>
              <tr>
                <td>編號:{staffId}</td>
              </tr>
              <tr>
                <td>姓名:{staffName}</td>
              </tr>
              <tr>
                <td>手機:{staffPhone}</td>
              </tr>
              <tr>
                <td>Email:{staffEmail}</td>
              </tr>
            </table>
          </div>
          <h5 className="orderContent">備註:{common}</h5>
        </div>

        <div className="btncontain">
          {/* 送出後更改訂單狀態 */}
          <button
            className={finish !== weekOfAmount ? "notClear" : ""}
            disabled={finish !== weekOfAmount ? true : false}
            onClick={() => {
              setOrderData((status) => {
                return { ...status, orderStatus: 2 };
              });
              handleOrderUpdata();
            }}
          >
            訂單完成
          </button>
          <button
            onClick={() => {
              setOrderData((count) => {
                return {
                  ...count,
                  finish:
                    count.finish + 1 <= weekOfAmount
                      ? count.finish + 1
                      : count.finish,
                };
              });
              handleOrderUpdata();
            }}
          >
            打掃完成
          </button>
        </div>
      </div>
    </div>
  );
};

export default Member;
