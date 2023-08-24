import Narbar from "./components/narbar";
import Indexbg from "./components/homepage/indexbg";
import Service from "./components/homepage/Service.js";
import Topic from "./components/homepage/Topic";
import Footer from "./components/Footer";
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