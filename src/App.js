import Narbar from "./components/dashboard/narbar";
// import SidebarAdmin from "./components/SidebarAdmin";
import SidebarMember from "./components/dashboard/SidebarMember";
import OrderDone from "./components/dashboard/OrderDone";
import Order from "./components/dashboard/Order";
import Score from "./components/dashboard/score";

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
        {/* <Score /> */}
      </div>
    </div>
  );
}

export default App;
