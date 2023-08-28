import Narbar from "./components/narbar";
// import SidebarAdmin from "./components/SidebarAdmin";
import SidebarMember from "./components/SidebarMember";
import OrderDone from "./components/OrderDone";
// import Order from "./components/Order";
// import orderStaff from "./components/orderStaff";
function App() {
  return (
    <div className="service-process">
      <Narbar />
      <div
        className="container"
        style={{ display: "flex", gap: "15px", justifyContent: "center" }}
      >
        <SidebarMember />
        <OrderDone />
      </div>
    </div>
  );
}

export default App;
