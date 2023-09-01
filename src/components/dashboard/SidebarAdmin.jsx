import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const SidebarAdmin = () => {
  const changeStyle = (e) => {
    const otherItems = document.querySelectorAll("span");
    otherItems.forEach((item) => {
      item.classList.remove("sideBarBtnToggle");
    });
    e.target.classList.toggle("sideBarBtnToggle");
  };

  return (
    <div className="aside">
      <div className="aside-main">
        <div>
          <h5 className="aside-title">訂單狀態</h5>
          <Link
            to={"/dashboard"}
            className="Link-decoration"
            onClick={(e) => {
              changeStyle(e);
            }}
          >
            <span>新訂單</span>
          </Link>
          <Link
            to={"/dashboard/UndoneOrder"}
            className="Link-decoration"
            onClick={(e) => {
              changeStyle(e);
            }}
          >
            <span>未完成訂單</span>
          </Link>
          <Link
            to={"/dashboard/DoneOrder"}
            className="Link-decoration"
            onClick={(e) => {
              changeStyle(e);
            }}
          >
            <span>已完成訂單</span>
          </Link>
        </div>
        <div>
          <h5 className="aside-title">訂單修改</h5>
          <Link
            to={"/dashboard/delete"}
            className="Link-decoration"
            onClick={(e) => {
              changeStyle(e);
            }}
          >
            <span>刪除</span>
          </Link>
        </div>
        <div>
          <h5 className="aside-title">會員管理</h5>
          <Link
            to={"/dashboard/memberInfo"}
            className="Link-decoration"
            onClick={(e) => {
              changeStyle(e);
            }}
          >
            <span>會員資料</span>
          </Link>
          <Link
            to={"/dashboard/banlist"}
            className="Link-decoration"
            onClick={(e) => {
              changeStyle(e);
            }}
          >
            <span>員工資料</span>
          </Link>
          <Link
            to={"/dashboard/banlist"}
            className="Link-decoration"
            onClick={(e) => {
              changeStyle(e);
            }}
          >
            <span>黑名單</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
