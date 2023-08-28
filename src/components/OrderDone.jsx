import "./order.css";
import OrderStaff from "./orderStaff";

const OrderDone = () => {
  // 假資料props
  const order = [
    {
      doneTime: (
        <>
          2023/08/12
          <br />
          17:20:13
        </>
      ), orderStaff: "李大媽", content: "客廳清潔", orderStatus: "完成訂單"
    }
  ];
  return (
    <div className="dashOrder">
      <div className="orderTable">
        <div className="orderInfo">
          <span class="orderCard">
            <img src="images/order.png" alt="" />
            <p class="orderText ">訂單成立</p>
          </span>
          <p class="line"></p>
          <span class="orderCard">
            <img src="images/orderGoing.png" alt="" />
            <p class="orderText ">已送達</p>
          </span>
          <p class="line"></p>
          <span class="orderCard">
            <img src="images/orderCleaning.png" alt="" />
            <p class="orderText ">清掃中</p>
          </span>
          <p class="line"></p>
          <span class="orderCard">
            <img src="images/orderCleaned.png" alt="" />
            <p class="orderText ">完成清潔</p>
          </span>
          <p class="line"></p>
          <span class="orderCard">
            <img src="images/orderDone.png" alt="" />
            <p class="orderText ">完成訂單</p>
          </span>
        </div>
        <div className="orderThead">
          <span>訂單成立</span>
          <span>派遣專員</span>
          <span>完成清潔</span>
          <span>完成狀態</span>
        </div>
        {order.map((order) => {
          return (
            <div className="orderTbody row orderDn">
              <span className="col">{order.doneTime}</span>
              <span className="col">{order.orderStaff}</span>
              <span className="col">{order.content}</span>
              <span className="col"><button className="orderDnbtn" onClick={() => {
                alert("AAAAAAAAAAAAAAAAAA");
              }}>{order.orderStatus}</button></span>
            </div>
          );
        })}
      </div>
      <div className="staffInfo">
      <OrderStaff />
      </div>
      <div className="orderBtns">
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
export default OrderDone;
