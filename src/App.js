import Title from "./components/homepage/Title";
import Process from "./components/homepage/Process";
import StaffInfos from "./components/homepage/StaffInfos";
import Narbar from "./components/narbar";
import Indexbg from "./components/homepage/indexbg";
import Service from "./components/homepage/Service.js";

function App() {
  return (
    <div className="service-process">
      <Narbar />
      <Indexbg />
      <Service/>
      <Title />
      <Process />
      <StaffInfos />
    </div>
  );
}

export default App;
