import "./order.css";
import OrderStaff from "./orderStaff";

const Order = () => {
  // 假資料props
  const order = [
    { orderNumber: "C0019", content: "客廳清潔", orderStatus: 1 },
    { orderNumber: "C0123", content: "客廳清潔", orderStatus: 0 },
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
          <span>訂單編號</span>
          <span>訂單內容</span>
          <span>訂單狀態</span>
        </div>
        {order.map((order) => {
          return (
            <div
              className="orderTbody row"
              onClick={() => {
                alert("AAAAAAAAAAAAAAAAAA");
              }}
            >
              <span className="col">{order.orderNumber}</span>
              <span className="col">{order.content}</span>
              <span className="col">{order.orderStatus ? "處理中" : "已完成"}</span>
            </div>
          );
        })}
      </div>
      <div className="staffInfo"><OrderStaff/></div>
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
export default Order;
