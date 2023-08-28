import React from "react";
import { Link } from 'react-router-dom'
import "./dashboard.css";

const SidebarAdmin = () => {
  return (
    <div className="aside">
      <div className="aside-main">
        <input className="aside-input" type="text" placeholder="查詢訂單" />
        <div>
          <h5 className="aside-title">訂單狀態</h5>
          <Link to={"/dashboard"} className="Link-decoration"><span>新訂單</span></Link>
          <Link to={"/dashboard"} className="Link-decoration"><span>未完成訂單</span></Link>
          <Link to={"/dashboard"} className="Link-decoration"><span>已完成訂單</span></Link>
        </div>
        <div>
          <h5 className="aside-title">訂單修改</h5>
          <Link to={"/dashboard/"} className="Link-decoration"><span>修改</span></Link>
          <Link to={"/dashboard/"} className="Link-decoration"><span>刪除</span></Link>
        </div>
        <div>
          <h5 className="aside-title">會員管理</h5>
          <Link to={"/dashboard/memberInfo"} className="Link-decoration"><span>會員資料</span></Link>
          <Link to={"/dashboard/"} className="Link-decoration"><span>黑名單</span></Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
