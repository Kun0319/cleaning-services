import Narbar from "./components/narbar";
import Sidebar from "./components/Sidebar";
import OrderList from "./components/OrderList";
function App() {
  return (
    <div className="service-process">
      <Narbar />
      <div
        className="container"
        style={{ display: "flex", gap: "15px", justifyContent: "center" }}
      >
        <Sidebar />
        <OrderList />
      </div>
    </div>
  );
}

export default App;
