import Narbar from "./components/narbar";
// import SidebarAdmin from "./components/SidebarAdmin";
import SidebarMember from "./components/SidebarMember";
import Order from "./components/Order";
function App() {
  return (
    <div className="service-process">
      <Narbar />
      <div
        className="container"
        style={{ display: "flex", gap: "15px", justifyContent: "center" }}
      >
        <SidebarMember />
        <Order />
      </div>
    </div>
  );
}

export default App;
