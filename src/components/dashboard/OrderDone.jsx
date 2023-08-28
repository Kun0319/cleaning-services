import "./order.css";
import OrderStaff from "./orderStaff";

const OrderDone = () => {
  const order = [
    {
      doneTime: (
        <>
          2023/08/12
          <br />
          17:20:13
        </>
      ),
      orderStaff: "李大媽",
      content: "客廳清潔",
      orderStatus: "完成訂單"
    }
  ];

  return (
    <div className="dashOrder">
      <div className="orderTable">
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
              <th>訂單成立</th>
              <th>派遣專員</th>
              <th>完成清潔</th>
              <th>完成狀態</th>
            </tr>
          </thead>
          <tbody>
            {order.map((orderItem, index) => (
              <tr key={index} className="orderTbody orderDn">
                <td className="col">{orderItem.doneTime}</td>
                <td className="col">{orderItem.orderStaff}</td>
                <td className="col">{orderItem.content}</td>
                <td className="col">
                  <button className="orderDnbtn" onClick={() => alert("AAAAAAAAAAAAAAAAAA")}>
                    {orderItem.orderStatus}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
    </div>
  );
};

export default OrderDone;
