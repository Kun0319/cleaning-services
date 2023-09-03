import "./dashboard.css";

function StaffAccordion({ staffListData, active, onClick }) {
  const {
    ornumber,
    employeeid,
    efficiency, //效率
    clean, //整潔
    careful, //細心
    manner, //態度
    reply, //留言
    phone,
    email,
    city,
    rural,
    address,
    uid,
    name,
    money,
    pay,
    ordertime,
    orderdone,
    state,
  } = staffListData;

  return (
    <div
      className={`staff-accordion ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="staff-header">
        {ornumber}/{name}/{city}
        {rural}
        {address}/{money}元/{ordertime}
      </div>
      {active && (
        <div className="staff-content">
          <table border={1}></table>
        </div>
      )}
    </div>
  );
}

export default StaffAccordion;
