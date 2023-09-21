import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Indexbg from "../components/homepage/indexbg";
import Service from "../components/homepage/Service";
import Title from "../components/homepage/Title";
import Process from "../components/homepage/Process";
import StaffInfos from "../components/homepage/StaffInfos";
import Topic from "../components/homepage/Topic";
import Footer from "../components/Footer";
import "./Home.css"; // 這裡替換為你的 CSS 文件路徑

const Home = () => {
  const [showGIF, setShowGIF] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGIF(false);

    }, 3000); // 設定3秒的計時器

    return () => clearTimeout(timer); // 清除計時器以防止內存洩漏
  }, []);


  return (
    <div className={`home-container ${showGIF ? "loading" : "content"}`}>
      {showGIF ? (
        <div className="loading-container">
          <img
            src="/images/loading.gif"
            alt="Loading..."
            className="loading-gif"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Indexbg />
          <Service />
          <div className="service-process">
            <Title />
            <Process />
          </div>
          <StaffInfos />
          <Topic />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;

