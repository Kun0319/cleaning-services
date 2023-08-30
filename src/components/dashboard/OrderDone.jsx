import "./order.css";
import OrderStaff from "./orderStaff";
import data from "./orderDonefake.json";

function orderDonetime(orderDonetime) {
  const date = new Date(orderDonetime);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}/${month}/${day}<br />${hours}:${minutes}:${seconds}`;
}

const OrderDone = () => {
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
            <th>訂單完成</th>
            <th>派遣專員</th>
            <th>完成清潔</th>
            <th>完成狀態</th>
          </tr>
        </thead>
        <tbody className="doneTbody orderDn">
          {data.map(({
            index,
            doneTime,
            orderStaff,
            content,
            orderStatus }) => {
            return (
              <tr key={index}
                onClick={() => {
                  alert("AAAAAAAAAAAAAAAAAA");
                }}
              >
                <td dangerouslySetInnerHTML={{ __html: orderDonetime(doneTime) }}></td>
                <td>{orderStaff}</td>
                <td>{content}</td>
                <td>
                  {orderStatus === "99" ? (
                    <button className="orderDnbtn">完成訂單</button>
                  ) : (
                    orderStatus === "0" ? "新訂單" : "處理中"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <OrderStaff />
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

export default OrderDone;