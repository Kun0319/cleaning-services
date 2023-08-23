import "./dashboard.css";
const OrderList = () => {
  // 假資料props
  const orderList = [
    { orderNumber: "C0019", content: "客廳清潔", orderStatus: 1 },
    { orderNumber: "C0019", content: "客廳清潔", orderStatus: 1 },
    { orderNumber: "C0019", content: "客廳清潔", orderStatus: 1 },
    { orderNumber: "C0123", content: "客廳清潔", orderStatus: 0 },
    { orderNumber: "C0123", content: "客廳清潔", orderStatus: 0 },
    { orderNumber: "C0123", content: "客廳清潔", orderStatus: 0 },
  ];
  return (
    <div className="dashOrder">
      <h3>管理訂單</h3>
      <div className="orderTable">
        <div className="orderThead">
          <span>訂單編號</span>
          <span>訂單內容</span>
          <span>訂單狀態</span>
        </div>
        {orderList.map((orderList) => {
          return (
            <div
              className="orderTbody"
              onClick={() => {
                alert("AAAAAAAAAAAAAAAAAA");
              }}
            >
              <span>{orderList.orderNumber}</span>
              <span>{orderList.content}</span>
              <span>{orderList.orderStatus ? "新訂單" : "已接單"}</span>
            </div>
          );
        })}
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
export default OrderList;
