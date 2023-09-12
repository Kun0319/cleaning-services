import React, { useState } from "react";
import './login.css'
import "../../components/dashboard/dashboard.css";
import SidebarMember from "../member/SidebarMember";
import Navbar from "../navbar";

const ChangePwd = () => {
  // 定義密碼的狀態變數
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // 點擊事件
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // 取消按鈕的點擊事件
  const handleCancelClick = () => {
    setIsEditing(false);
  };

  // 儲存按鈕的點擊事件
  const handleSaveClick = () => {
    if (password === confirmPassword) {
      // 密碼驗證通過，執行儲存修改的邏輯，這裡可以將新密碼提交給後端或更新到狀態中
      // 將新密碼設置到狀態中
      setPassword(password);
      setIsEditing(false);
    } else {
      // 密碼驗證失敗，顯示錯誤
      alert("密碼不相符。");
    }
  };

  return (
    <div className="membercontainer">
      <div className="loginrightbox">
        <div className="loginflex">
          {isEditing ? (
            // 編輯模式
            <ul>
              <li className="loginli">
                <p>新密碼</p>
                <input
                  type="password"
                  placeholder="請輸入新密碼"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </li>
              <li className="loginli">
                <p>確認密碼</p>
                <input
                  type="password"
                  placeholder="請再次輸入新密碼"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </li>
            </ul>
          ) : (
            // 顯示會員資料
            <ul>
              <li className="loginli">
                <p>密碼</p>
                <input
                  type="password"
                  value="********" // 將密碼設置為星號形式
                  disabled="disabled"
                />
              </li>
            </ul>
          )}

          <div>
            {isEditing ? (
              // 顯示儲存和取消按鈕
              <>
                <button className="cancelbtn" onClick={handleCancelClick}>
                  取消
                </button>
                <button className="signupbtn" onClick={handleSaveClick}>
                  確認修改
                </button>
              </>
            ) : (
              // 顯示編輯按鈕
              <button className="revisebtn" onClick={handleEditClick}>
                修改
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="loginbg">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default ChangePwd;
