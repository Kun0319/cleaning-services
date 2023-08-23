import React from "react";
import Button from "./Button";

const Step3Area = () => {
  return (
    <>
      <form
        action=""
        method="post"
        className="container book-step1 book-step3 flex-column"
      >
        <div id="clientInfo">
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">同會員基本資料</label>
          </div>
          <div>
            <img src="./images/staffInfo-raccoon.png" alt="icon" />
            <label htmlFor="">姓　　名</label>
            <input type="text" placeholder="請輸入姓名" required />
          </div>
          <div>
            <img src="./images/phone.png" alt="icon" />
            <label htmlFor="">手機號碼</label>
            <input
              type="tel"
              placeholder="09********"
              pattern="[0][9][0-9]{8}"
              required
            />
          </div>
          <div>
            <img src="./images/mail.png" alt="icon" />
            <label htmlFor="">電子信箱</label>
            <input type="email" placeholder="abc123@gmail.com" required />
          </div>
          <div>
            <img src="./images/address.png" alt="icon" />
            <label htmlFor="">清掃地址</label>
            <input type="text" value="台中市" />
            <select name="" id="">
              <option value="">中區</option>
              <option value="">東區</option>
              <option value="">西區</option>
              <option value="">南區</option>
              <option value="">北區</option>
              <option value="">南屯區</option>
              <option value="">西屯區</option>
              <option value="">北屯區</option>
              <option value="">豐原區</option>
              <option value="">大里區</option>
              <option value="">太平區</option>
              <option value="">烏日區</option>
              <option value="">大雅區</option>
              <option value="">潭子區</option>
            </select>
            <input type="text" placeholder="請輸入詳細地址" required />
          </div>
          <div>
            <img src="./images/info.png" alt="icon" />
            <label htmlFor="">訂單備註</label>
            <input type="text" />
          </div>
        </div>
      </form>
      <Button />
    </>
  );
};

export default Step3Area;
