import React from "react";
import "./StaffInfos.css";
const StaffInfo = () => {
  return (
    <div className="staffInfo-card">
      {/* 接種疫苗 */}
      <div className="staffCovid">
        <span>已接種疫苗</span>
      </div>
      {/* 員工頭像 */}
      <div className="staffImg">
        <img src="images\staffInfo-staff.png" alt="staff" />
      </div>
      {/* 員工編號 */}
      <span className="staffText">
        員工編號: <span>A01</span>
      </span>
      {/* 員工姓名 */}
      <span className="staffText">
        員工姓名: <span>邱小文</span>
      </span>
      {/* 評分 */}
      <img src="images\staffInfo-star.png" alt="start" />
      {/* 員工案件數 */}
      <div className="staffAbility">
        <div>
          <img src="images\staffInfo-case.png" alt="case" />
          <span>服務件數</span>
        </div>
        <span>189件</span>
      </div>
      {/* 服務態度 */}
      <div className="staffAbility">
        <div>
          <img src="images\staffInfo-smile.png" alt="smile" />
          <span>服務態度</span>
        </div>
        <span>Levle 4</span>
      </div>
      {/* 良民證 */}
      <div className="staffAbility">
        <div>
          <img src="images\staffInfo-goodguy.png" alt="goodguy" />
          <span>良民證</span>
        </div>
      </div>
      {/* 浣熊管家 */}
      <div className="staffAbility">
        <div>
          <img src="images\staffInfo-raccoon.png" alt="raccoon" />
          <span>浣熊管家認證</span>
        </div>
      </div>
    </div>
  );
};

export default StaffInfo;
