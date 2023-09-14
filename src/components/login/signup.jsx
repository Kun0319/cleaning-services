
import React, { useRef, useState, useEffect } from 'react'
import AuthContext, { AuthProvider } from './AuthContext';


import axios from './axios'


const SignUp = () => {


  const [name, setName] = useState("")
  const [birthday, setBirthday] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [rural, setRural] = useState("")
  const [id, setId] = useState("") //身分證字號
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")





  const data = {
    name,
    birthday,
    email,
    phone,
    id,
    rural,
    address,
    password,
  };

  // 送出註冊資料 
  // 處理表單提交
  const handleSubmit = async (e) => {
    e.preventDefault(); // 阻止默認的表單提交行為
    try {
      // 使用 Axios 將使用者資料發送到後端
      await axios.post('/signup', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // 成功提交後清空表單
      setName("");
      setBirthday("");
      setEmail("");
      setPhone("");
      setId("");
      setRural("");
      setAddress("");
      setPassword("");

      // 可以在這裡添加處理成功響應的程式碼
    } catch (error) {
      // 處理錯誤
      console.log(JSON.stringify(data));
      console.error("註冊錯誤：", error);
    }
  }




  const adreessDist = [
    {
      dist: "中區",
      value: "中區",
    },
    {
      dist: "北區",
      value: "北區",
    },
    {
      dist: "南區",
      value: "南區",
    },
    {
      dist: "西區",
      value: "西區",
    },
    {
      dist: "東區",
      value: "東區",
    },
    {
      dist: "北屯區",
      value: "北屯區",
    },
    {
      dist: "南屯區",
      value: "南屯區",
    },
    {
      dist: "西屯區",
      value: "西屯區",
    },
    {
      dist: "豐原區",
      value: "豐原區",
    },
    {
      dist: "大里區",
      value: "大里區",
    },
    {
      dist: "太平區",
      value: "太平區",
    },
    {
      dist: "烏日區",
      value: "烏日區",
    },
    {
      dist: "大雅區",
      value: "大雅區",
    },
    {
      dist: "潭子區",
      value: "潭子區",
    },
    {
      dist: "新社區",
      value: "新社區",
    },
    {
      dist: "神岡區",
      value: "神岡區",
    },
    {
      dist: "龍井區",
      value: "龍井區",
    },
    {
      dist: "沙鹿區",
      value: "沙鹿區",
    },
  ];




  return (
    <div className="loginflex">
      <form
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        onSubmit={handleSubmit}
      >
        <ul>
          <li className="loginli">
            <img src="./images/nameicon.png" className="loginicon" />
            <p>姓名</p>
            <input
              type="text"
              placeholder="請輸入帳號"
              value={name}
              onChange={(e) => setName(e.target.value)}>
            </input>
          </li>


          <li className="loginli">
            <img src="./images/date.png" className="loginicon" />
            <p>生日</p>
            <input
              type="date"
              placeholder="請輸入密碼"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}>

            </input>
          </li>


          <li className="loginli">
            <img src="./images/tet.png" className="loginicon" />
            <p>手機號碼</p>
            <input
              type="number"
              placeholder="請輸入手機號碼"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            >

            </input>
          </li>


          <li className="loginli">
            <img src="./images/icon-4.png" className="loginicon" />
            <p>信箱</p>
            <input
              type="email"
              placeholder="請輸入信箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}>

            </input>
          </li>


          <li className="loginli">
            <img src="./images/idnumber.png" className="loginicon" />
            <p>身分證字號</p>
            <input
              placeholder="請輸入身分證字號"
              value={id}
              onChange={(e) => setId(e.target.value)}
            >

            </input>
          </li>


          <li className="loginli">
            <img src="./images/icon-6.png" className="loginicon" />
            <p>地址</p>
            <input
              type="text"
              value="台中市"
              id="cleaning-city" />


            <select name="cleaningAddress"
              id="userAddress"
              value={rural}
              onChange={(e) => setRural(e.target.value)}

            >
              {adreessDist.map((item, index) => {
                return (
                  <option value={item.value} key={index} >
                    {item.dist}
                  </option>
                );
              })}
            </select>

            <input
              type="text"
              placeholder="請輸入詳細地址"
              id="detail-address"
              required
              value={address} onChange={(e) => setAddress(e.target.value)}
            />
          </li>


          <li className="loginli">
            <img src="./images/password.png" className="loginicon" />
            <p>密碼</p>
            <input
              placeholder="請輸入密碼"
              value={password} onChange={(e) => setPassword(e.target.value)}>
            </input>
          </li>



        </ul>

        <button className="signupbtn">註冊</button>
      </form>


    </div>
  );
};

export default SignUp;

