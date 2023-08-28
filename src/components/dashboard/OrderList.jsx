import "./dashboard.css";
const OrderList = () => {
  // 假資料props
  const orderList = [
    { orderNumber: "C0019", content: "客廳清潔", orderStatus: 1 },
    { orderNumber: "C0019", content: "客廳213213清潔", orderStatus: 1 },
    { orderNumber: "C012312019", content: "客廳清潔", orderStatus: 1 },
    { orderNumber: "C0123", content: "客廳12321清潔", orderStatus: 0 },
    { orderNumber: "C01123123", content: "客廳清潔", orderStatus: 0 },
    { orderNumber: "C0123", content: "客廳清潔哭哭哭", orderStatus: 0 },
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
              className="orderTbody row"
              onClick={() => {
                alert("AAAAAAAAAAAAAAAAAA");
              }}
            >
              <span className="col">{orderList.orderNumber}</span>
              <span className="col">{orderList.content}</span>
              <span className="col">{orderList.orderStatus ? "新訂2132132131單qwdq" : "已接單"}</span>
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
