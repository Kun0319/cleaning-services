import Narbar from "./components/narbar";
// import SidebarAdmin from "./components/SidebarAdmin";
import SidebarMember from "./components/SidebarMember";
import OrderList from "./components/OrderList";
function App() {
  return (
    <div className="service-process">
      <Narbar />
      <div
        className="container"
        style={{ display: "flex", gap: "15px", justifyContent: "center" }}
      >
        <SidebarMember />
        <OrderList />
      </div>
    </div>
  );
}

export default App;
