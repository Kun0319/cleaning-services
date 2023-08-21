import React from "react";
import StaffInfo from "./StaffInfo";
import "./StaffInfos.css";

const StaffInfos = () => {
  return (
    <div className="text-center p-4 container">
      <h1 style={{ color: "#FFC107" }} className="fw-bold">
        員工評價 <span>Employee Evaluation</span>
      </h1>
      <div>
        <img src="./images/flower.png" alt="" />
      </div>
      <div>
        <ul
          className="p-5"
          style={{
            listStyleType: "none",
            display: "flex",
            flexWrap: "nowrap",
            overflow: "auto",
            scrollbarWidth: "none",
          }}
        >
          <li style={{ flex: "1 0 auto" }}>
            <StaffInfo />
          </li>
          <li style={{ flex: "1 0 auto" }}>
            <StaffInfo />
          </li>
          <li style={{ flex: "1 0 auto" }}>
            <StaffInfo />
          </li>
          <li style={{ flex: "1 0 auto" }}>
            <StaffInfo />
          </li>
          <li style={{ flex: "1 0 auto" }}>
            <StaffInfo />
          </li>
          <li style={{ flex: "1 0 auto" }}>
            <StaffInfo />
          </li>
          <li style={{ flex: "1 0 auto" }}>
            <StaffInfo />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StaffInfos;
