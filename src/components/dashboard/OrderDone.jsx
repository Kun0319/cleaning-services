import React, { useState ,useEffect} from "react";
import "./order.css";
import OrderStaff from "./orderStaff";
import Score from "./score";
import axios from "../login/axios";
import { useParams } from "react-router-dom";





const OrderDone = () => {
  const [modal, setModal] = useState(false)
  const [orderAPI, setOrderAPI] = useState('')
  const [staffAPI, setStaffAPI] = useState('')
  const [evaluateAPI, setEvaluateAPI] = useState({})
  const [isClose, setIsclose] = useState(false)
  const {orderNumber}=useParams()
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `/member/${orderNumber}`
        );
        setOrderAPI(() =>result.data.results1[0]);//訂單資料
        setStaffAPI(()=>result.data.results2[0])//員工資料
        setEvaluateAPI(()=>result.data.results3[0])//評價
        setIsclose(()=>result.data.results4[0]?.reply)//評價
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [orderNumber]);

const {note,time,donetime,weeks,ornumber,orcity,orrural,oraddress,money,state,orderdone,ordertime,pay}=orderAPI

function handleTime(time){
  if(time===0)return "08:00"
  if(time===1)return "13:00"
  if(time===2)return "18:00"
}

  return (
    <div className="dashOrder">
      {modal && <Score setModal={setModal} orderAPI={orderAPI} evaluateAPI={evaluateAPI} staffAPI={staffAPI} />}
      <div className="orderInfo">
        <span className="orderCard">
          <img src="/images/order.png" alt="" />
          <p className="orderText ">預約快速</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderGoing.png" alt="" />
          <p className="orderText ">使命必達</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderCleaning.png" alt="" />
          <p className="orderText ">專業清掃</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderCleaned.png" alt="" />
          <p className="orderText ">價格實惠</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderDone.png" alt="" />
          <p className="orderText ">嚴格把關</p>
        </span>
      </div>
      <div className="contact-table">
        <table border={1} className="w-100">
          <thead className="orderThead">
            <tr>
              <th>訂單編號</th>
              <th>清潔地點</th>
              <th>成立時間</th>
              <th>打掃時段</th>
              <th>備註</th>
            </tr>
          </thead>
          <tbody className="doneTbody orderDn">
            <tr>
              <td>{ornumber}</td>
              <td>{orcity+orrural+oraddress}</td>
              <td>{new Date(ordertime).toLocaleDateString("en-CA")}</td>
              <td>{handleTime(time)}</td>
              <td>{note||"無備註"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="contact-table">
        <table border={1} className="w-100">
          <thead className="orderThead">
            <tr>
              <th>服務次數</th>
              <th>訂單金額</th>
              <th>付款方式</th>
              <th>完成狀態</th>
              <th>完成時間</th>
            </tr>
          </thead>
          <tbody className="doneTbody orderDn">
                <tr>
                  <td><span className="text-danger">{donetime}</span>{`/${weeks}次`}</td>
                  <td>{money}元</td>  
                  <td>{pay?"信用卡":"其他"}</td>
                  <td>{state===2?<span className="text-success fw-bold">已完成</span>:<span className="text-danger fw-bold">進行中</span>}</td>
                  <td>{orderdone?new Date(orderdone).toLocaleDateString("en-CA"):"尚未完成"}</td>
                </tr>
          </tbody>
        </table>
      </div>
      <OrderStaff 
      staffAPI={staffAPI}
      evaluateAPI={evaluateAPI} />
      {!isClose && state === 2 ? (
        <button onClick={() => { setModal(true) }} className="orderBtn">
    給辛苦的專員評價吧
  </button>
):<h3 className="contact-table">訂單評論:{isClose}</h3>}
    </div>
  );
};

export default OrderDone;
