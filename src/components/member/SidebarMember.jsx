import React from "react";
import "../../components/dashboard/dashboard.css";
const SidebarMember = () => {
  const arrowRight = () => {
    return <img src="/images/chevron-right.png" alt="right" />;
  };
  return (
    <div className="aside">
      <div className="aside-main">
        <h3>會員專區</h3>
        <div className="member">
          <h5 className="aside-title aside-title-member">會員資料</h5>
          <span>{arrowRight()}修改密碼</span>
          <span>{arrowRight()}更改密碼</span>
        </div>
        <div className="member">
          <h5 className="aside-title aside-title-member">訂單查詢</h5>
        </div>
        <div className="member">
          <h5 className="aside-title aside-title-member">歷史訂單</h5>
        </div>
        <div className="member">
          <h5 className="aside-title aside-title-member">我的評價</h5>
        </div>
      </div>
    </div>
  );
};

export default SidebarMember;
