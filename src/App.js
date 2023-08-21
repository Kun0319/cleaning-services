import Title from "./components/Title";
import Process from "./components/Process";
import StaffInfos from "./components/StaffInfos";
import Narbar from "./components/narbar";
import Indexbg from "./components/indexbg";

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
