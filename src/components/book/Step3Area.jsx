import React from "react";
import Button from "./Button";

const Step3Area = () => {
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
  return (
    <>
      <form
        action=""
        method="post"
        className="d-flex flex-column align-items-center container "
      >
        <div className=" book-step3 ">
          <div id="clientInfo">
            <div>
              <input type="checkbox" name="isSame" id="same" />
              <label htmlFor="same">同會員基本資料</label>
            </div>
            <div>
              <img src="./images/staffInfo-raccoon.png" alt="icon" />
              <label htmlFor="userName">姓　　名</label>
              <input
                type="text"
                placeholder="請輸入姓名"
                id="userName"
                required
              />
            </div>
            <div>
              <img src="./images/phone.png" alt="icon" />
              <label htmlFor="userPhone">手機號碼</label>
              <input
                id="userPhone"
                type="tel"
                placeholder="09********"
                pattern="[0][9][0-9]{8}"
                required
              />
            </div>
            <div>
              <img src="./images/mail.png" alt="icon" />
              <label htmlFor="userMail">電子信箱</label>
              <input
                id="userMail"
                type="email"
                placeholder="abc123@gmail.com"
                required
              />
            </div>
            <div>
              <img src="./images/address.png" alt="icon" />
              <label htmlFor="userAddress">清掃地址</label>
              <input type="text" value="台中市" />
              <select name="cleaningAddress" id="userAddress">
                {adreessDist.map((item, index) => {
                  return (
                    <option value={item.v} key={index}>
                      {item.dist}
                    </option>
                  );
                })}
              </select>
              <input type="text" placeholder="請輸入詳細地址" required />
            </div>
            <div>
              <img src="./images/info.png" alt="icon" />
              <label htmlFor="notes">訂單備註</label>
              <input type="text" id="notes" />
            </div>
          </div>
        </div>
        <Button pre="/book2" next="/book4" />
      </form>
    </>
  );
};

export default Step3Area;
