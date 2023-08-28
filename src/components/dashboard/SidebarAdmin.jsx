import React from "react";
import "./dashboard.css";
const SidebarAdmin = () => {
  const arrowRight = () => {
    return <img src="./images/chevron-right.png" alt="right" />;
  };
  return (
    <div className="aside">
      <div className="aside-main">
        <input className="aside-input" type="text" placeholder="查詢訂單" />
        <div>
          <h5 className="aside-title">訂單狀態</h5>
          <span>{arrowRight()}新訂單</span>
          <span>{arrowRight()}未完成訂單</span>
          <span>{arrowRight()}已完成訂單</span>
          <span>{arrowRight()}已評論</span>
        </div>
        <div>
          <h5 className="aside-title">訂單修改</h5>
          <span>{arrowRight()}修改</span>
          <span>{arrowRight()}刪除</span>
        </div>
        <div>
          <h5 className="aside-title">會員管理</h5>
          <span>{arrowRight()}會員資料</span>
          <span>{arrowRight()}黑名單</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
