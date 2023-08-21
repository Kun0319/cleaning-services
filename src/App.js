import Title from "./components/homepage/Title";
import Process from "./components/homepage/Process";
import StaffInfos from "./components/homepage/StaffInfos";
import Narbar from "./components/narbar";
import Indexbg from "./components/homepage/indexbg";

function App() {
  return (
    <div className="service-process">
      <Narbar />
      <Indexbg />
      <Title />
      <Process />
      <StaffInfos />
    </div>
  );
}

export default App;
