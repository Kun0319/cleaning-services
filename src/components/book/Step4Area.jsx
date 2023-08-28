import React from "react";
import Button from "./Button";

const Step4Area = () => {
  return (
    <>
      <form
        action=""
        method="post"
        className="container d-flex  justify-content-center align-items-center flex-column"
      >
        <div className="d-flex container justify-content-center align-items-center book-step1">
          <div className="left book4-left">
            <table id="book4-order">
              <tr>
                <th colspan="2">訂單內容</th>
              </tr>
              <tr>
                <td className="fw-bold">清潔頻率</td>
                <td>每週一次</td>
              </tr>
              <tr>
                <td className="fw-bold">清潔週數</td>
                <td>4週</td>
              </tr>
              <tr>
                <td className="fw-bold">服務時間</td>
                <td>星期三　13:00</td>
              </tr>
              <tr>
                <td className="fw-bold">開始日期</td>
                <td>2023/08/23</td>
              </tr>
              <tr>
                <td className="fw-bold">訂單金額</td>
                <td>8000元</td>
              </tr>
            </table>
          </div>
          <div className="right">
            <div className="book4-pay">
              <div className="payMethod">
                <label htmlFor="pay-method">付款方式</label>
                <select name="payMethod" id="pay-method">
                  <option value="payInFull">信用卡一次付清</option>
                </select>
              </div>
              <div className="d-flex justify-content-center my-3">
                <div className="creaditCard d-flex flex-column align-items-start ">
                  <label htmlFor="creaditCard-number" className="mt-2">
                    信用卡號碼
                  </label>
                  <div className="mt-2">
                    <input
                      id="creaditCard-number"
                      className="ms-0"
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
                  <div className="mt-4 mb-2">
                    <label htmlFor="deadline">有效月 / 年</label>
                    <input
                      id="deadline"
                      type="text"
                      placeholder="MM/YY"
                      pattern="(0[1-9]|1[0-2])/(2[3-9]|3[0-9])"
                      required
                    />
                    <label htmlFor="securityCode">背面末三碼</label>
                    <input
                      id="securityCode"
                      type="text"
                      placeholder="***"
                      pattern="[0-9]{3}"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="book4-comment">
            <input type="checkbox" name="isAgree" id="agree" required />
            我已閱讀 <u>非清潔服務範圍</u>、<u>取消或更改服務政策</u>、
            <u>服務條款</u> 及 <u>隱私權政策</u>
          </div>
        </div>
        <Button pre="/book/book3" next="/book/book5" />
      </form>
    </>
  );
};

export default Step4Area;
