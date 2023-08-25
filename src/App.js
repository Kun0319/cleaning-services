import Title from "./components/homepage/Title";
import Process from "./components/homepage/Process";
import StaffInfos from "./components/homepage/StaffInfos";
import Narbar from "./components/narbar";
import Indexbg from "./components/homepage/indexbg";
import Service from "./components/homepage/Service.js";
import Topic from "./components/homepage/Topic";
import Footer from "./components/Footer";


function App() {
  return ( <div>
      <Narbar />
      <Indexbg />
      <Service />
      <Title />
      <Process />
      <StaffInfos />
      <Topic /> 
      <Footer />
    </div>
  );
}

export default App;