import Narbar from "./components/narbar";
// import Order from "./components/AdminOrder";
import Sidebar from "./components/Sidebar";
// import PersonalInfo from "./components/PersonalInfo"
import Memberinfo from "./components/MemberInfo";

function App() {
  return (
    <div className="service-process">
      <Narbar />
      <div className="container"
        style={{ display: "flex", gap: "15px", justifyContent: "center" }}> <Sidebar />
        <Memberinfo />
      </div>
    </div>
  );
}

export default App;
