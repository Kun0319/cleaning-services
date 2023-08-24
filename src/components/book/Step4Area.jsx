import React from "react";
import Button from "./Button";

const Step4Area = () => {
  return (
    <>
      <form
        action=""
        method="post"
        className="book-step3 flex-column justify-content-between align-items-center container"
      >
        <div className="book4-top">
          <table className="w-100">
            <tr>
              <th colspan="5">訂單內容</th>
            </tr>
            <tr>
              <td className="fw-bold">清潔頻率</td>
              <td className="fw-bold">清潔週數</td>
              <td className="fw-bold">服務時間</td>
              <td className="fw-bold">開始日期</td>
              <td className="fw-bold">訂單金額</td>
            </tr>
            <tr>
              <td>每週一次</td>
              <td>4週</td>
              <td>星期三　13:00</td>
              <td>2023/08/23</td>
              <td>8000元</td>
            </tr>
          </table>
        </div>
        <div className="book4-middle">
          <label htmlFor="">付款方式</label>
          <select name="" id="">
            <option value="">信用卡一次付清</option>
          </select>
        </div>
        <div className="book4-bottom">
          <div className="d-flex flex-wrap justify-content-center creaditCard">
            <label htmlFor="">信用卡號碼</label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="****"
                pattern="[0-9]{4}"
                required
              />
              -
              <input
                type="text"
                placeholder="****"
                pattern="[0-9]{4}"
                required
              />
              -
              <input
                type="text"
                placeholder="****"
                pattern="[0-9]{4}"
                required
              />
              -
              <input
                type="text"
                placeholder="****"
                pattern="[0-9]{4}"
                required
              />
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="mb-2">
              <label htmlFor="">有效月/年</label>
              <input
                type="text"
                placeholder="MM/YY"
                pattern="(0[1-9]|1[0-2])/(2[3-9]|3[0-9])"
                required
              />
            </div>
            <div>
              <label htmlFor="">背面末三碼</label>
              <input
                type="text"
                placeholder="***"
                pattern="[0-9]{3}"
                required
              />
            </div>
          </div>
        </div>
        <div className="book4-comment">
          <input type="checkbox" name="" id="" required />
          我已閱讀 <u>非清潔服務範圍</u>、<u>取消或更改服務政策</u>、
          <u>服務條款</u> 及 <u>隱私權政策</u>
        </div>
        <input type="submit" />
      </form>
      <Button />
    </>
  );
};

export default Step4Area;
