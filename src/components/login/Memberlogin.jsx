import React from "react";
import { useState } from "react";
import './login.css'
import "../../components/dashboard/dashboard.css";
import SidebarMember from "../member/SidebarMember";
import Navbar from "../navbar";



const Memberlogin = () => {
  const adreessDist = [
    {
      dist: "中區",
      v: "Central",
    },
    {
      dist: "北區",
      v: "North",
    },
    {
      dist: "南區",
      v: "South",
    },
    {
      dist: "西區",
      v: "West",
    },
    {
      dist: "東區",
      v: "Eastern",
    },
    {
      dist: "北屯區",
      v: "Beitun",
    },
    {
      dist: "南屯區",
      v: "Nantun",
    },
    {
      dist: "西屯區",
      v: "Xitun",
    },
    {
      dist: "豐原區",
      v: "Fengyuan",
    },
    {
      dist: "大里區",
      v: "Dali",
    },
    {
      dist: "太平區",
      v: "Taiping",
    },
    {
      dist: "烏日區",
      v: "Uri",
    },
    {
      dist: "大雅區",
      v: "Daya",
    },
    {
      dist: "潭子區",
      v: "Tanzi",
    },
    {
      dist: "新社區",
      v: "Xinshe",
    },
    {
      dist: "神岡區",
      v: "Shengang",
    },
    {
      dist: "龍井區",
      v: "Longjing",
    },
    {
      dist: "沙鹿區",
      v: "Shalu",
    },
  ];


  // 定義會員資料的狀態
  const [memberData, setMemberData] = useState({
    name: "李小明",
    birthday: "1995/01/01",
    idNumber: "A12345678",
    phoneNumber: "0912345678",
    email: "123@gmail.com",
    address: {
      city: "台中市",
      district: "南屯區",
      detail: "黎明路658號",
    },
  });

  // 用於地址編輯的狀態變數
  const [editedAddress, setEditedAddress] = useState("");

  const [editedDistrict, setEditedDistrict] = useState(memberData.address.district);
  const [isEditingDistrict, setIsEditingDistrict] = useState(false);


  // 編輯模式的狀態
  const [isEditing, setIsEditing] = useState(false);

  // 編輯後的手機號碼
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("");

  // 編輯按鈕的點擊事件
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // 取消按鈕的點擊事件
  const handleCancelClick = () => {
    setIsEditing(false);
  };

  // 儲存按鈕的點擊事件
  const handleSaveClick = () => {
    // 執行儲存修改的邏輯，這裡可以將修改後的資料提交給後端或更新到狀態中

    setMemberData({
      ...memberData,
      phoneNumber: editedPhoneNumber,
      address: {
        ...memberData.address,
        district: editedDistrict, // 更新地區
        detail: editedAddress,   // 更新詳細地址
      },
    });


    setIsEditing(false);
  };

  // 處理手機號碼輸入框的變化
  const handlePhoneNumberChange = (event) => {
    const newPhoneNumber = event.target.value;
    setEditedPhoneNumber(newPhoneNumber);
  };


  // 處理地址輸入框的變化
  const handleAddressChange = (event) => {
    const newAddress = event.target.value;
    setEditedAddress(newAddress);
  };



  // 如果處於編輯模式，渲染編輯表單，否則渲染會員資料
  return (
    <div className="membercontainer">
      <div className="loginrightbox">
        <div className="loginflex">
          {isEditing ? (
            // 編輯模式下的表單
            <ul>
              <li className="loginli">
                <img src="/images/nameicon.png" className="loginicon" />
                <p>姓名</p>
                <input value={memberData.name} disabled="disabled"></input>
              </li>
              <li className="loginli">
                <img src="/images/date.png" className="loginicon" />
                <p>生日</p>
                <input value={memberData.birthday} disabled="disabled"></input>
              </li>
              <li className="loginli">
                <img src="/images/idnumber.png" className="loginicon" />
                <p>身分證字號</p>
                <input value={memberData.idNumber} disabled="disabled"></input>
              </li>
              <li className="loginli">
                <img src="/images/tet.png" className="loginicon" />
                <p>手機號碼</p>
                <input
                  placeholder="請輸入手機號碼"
                  value={editedPhoneNumber}
                  onChange={handlePhoneNumberChange}
                ></input>
              </li>
              <li className="loginli">
                <img src="/images/icon-4.png" className="loginicon" />
                <p>信箱</p>
                <input
                  type="email"
                  placeholder="請輸入信箱"
                  value={memberData.email}
                  disabled={isEditing} // 根據編輯模式來控制是否禁用
                ></input>
              </li>
              <li className="loginli">
                <img src="/images/icon-6.png" className="loginicon" />
                <p>地址</p>
                <select
                  value={editedDistrict}
                  onChange={(e) => setEditedDistrict(e.target.value)}
                >
                  {adreessDist.map((item, index) => (
                    <option value={item.v} key={index}>
                      {item.dist}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={editedAddress}
                  onChange={handleAddressChange}
                />
              </li>
            </ul>
          ) : (
            // 顯示會員資料
            <ul>
              <li className="loginli">
                <img src="/images/nameicon.png" className="loginicon" />
                <p>姓名</p>
                <input value={memberData.name} disabled="disabled"></input>
              </li>
              <li className="loginli">
                <img src="/images/date.png" className="loginicon" />
                <p>生日</p>
                <input value={memberData.birthday} disabled="disabled"></input>
              </li>
              <li className="loginli">
                <img src="/images/idnumber.png" className="loginicon" />
                <p>身分證字號</p>
                <input value={memberData.idNumber} disabled="disabled"></input>
              </li>
              <li className="loginli">
                <img src="/images/tet.png" className="loginicon" />
                <p>手機號碼</p>
                <input
                  value={memberData.phoneNumber}
                  disabled="disabled"
                ></input>
              </li>
              <li className="loginli">
                <img src="/images/icon-4.png" className="loginicon" />
                <p>信箱</p>
                <input value={memberData.email} disabled="disabled"></input>
              </li>
              <li className="loginli">
                <img src="/images/icon-6.png" className="loginicon" />
                <p>地址</p>
                <input
                  type="text"
                  value={`${memberData.address.city} ${memberData.address.district}`}
                  id="cleaning-city"
                  disabled="disabled"
                />
                <input
                  type="text"
                  value={memberData.address.detail}
                  id="detail-address"
                  required
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



export default Memberlogin;