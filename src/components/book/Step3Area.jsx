import React from "react";
import Button from "./Button";

const Step3Area = ({ formData, setFormData }) => {
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
  const checkPhone = () => {
    let phone = document.querySelector("#userPhone");
    document.querySelector("#userPhone+span").innerHTML =
      phone.validity.patternMismatch === true ? "&#10005;" : "&#10003;";
  };
  const checkName = () => {
    let name = document.querySelector("#userName");
    document.querySelector("#userName+span").innerHTML =
      name.validity.patternMismatch === true ? "&#10005;" : "&#10003;";
  };

  return (
    <>
      <form
        action=""
        method="post"
        className="d-flex flex-column align-items-center container "
      >
        <div className=" book-step3 container">
          <div id="clientInfo">
            <div className="sameMember">
              <input type="checkbox" name="isSame" id="same" />
              <label htmlFor="same">同會員基本資料</label>
            </div>
            <div>
              <img src="/images/staffInfo-raccoon.png" alt="icon" />
              <label htmlFor="userName">姓　　名</label>
              <input
                type="text"
                placeholder="請輸入姓名"
                pattern=".{2,20}"
                id="userName"
                required
                onInput={checkName}
              />
              <span>&nbsp;</span>
            </div>
            <div>
              <img src="/images/phone.png" alt="icon" />
              <label htmlFor="userPhone">手機號碼</label>
              <input
                id="userPhone"
                type="tel"
                placeholder="09********"
                pattern="^09[0-9]{8}$"
                required
                onInput={checkPhone}
              />
              <span>&nbsp;</span>
            </div>
            <div>
              <img src="/images/mail.png" alt="icon" />
              <label htmlFor="userMail">電子信箱</label>
              <input
                id="userMail"
                type="email"
                placeholder="abc123@gmail.com"
                required
              />
            </div>
            <div className="d-flex align-items-center flex-wrap book3-address ">
              <img src="/images/address.png" alt="icon" />
              <label htmlFor="userAddress">清掃地址</label>

              <div className="d-flex align-items-center detail-address ">
                <input type="text" value="台中市" id="cleaning-city" />
                <select name="cleaningAddress" id="userAddress">
                  {adreessDist.map((item, index) => {
                    return (
                      <option value={item.v} key={index}>
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
                />
              </div>
            </div>
            <div>
              <img src="/images/info.png" alt="icon" />
              <label htmlFor="notes">訂單備註</label>
              <input type="text" id="notes" />
            </div>
          </div>
        </div>
        <Button pre="/book/book2" next="/book/book4" />
      </form>
    </>
  );
};

export default Step3Area;
