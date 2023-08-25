import React from "react";
import Member from "./Member";
import Button from "./Button";

const Step1Area = () => {
  return (
    <form
      action=""
      method="post"
      className="container d-flex  justify-content-center align-items-center flex-column"
    >
      <div className="d-flex container justify-content-center align-items-center book-step1">
        <div className="left">
          <h5>定期清掃目前僅提供一週一次的清潔頻率</h5>
          <div className="serviceItem">
            <div id="itemTitle">
              <h4>每週打掃一次</h4>
            </div>
            <div id="itemInfo">
              <h5>每次打掃4小時</h5>
              <p>每次派遣一位專員前往打掃</p>
            </div>
          </div>
          <div id="chooseWeeks">
            <label htmlFor="serviceWeeks">
              <h4>選擇服務週數</h4>
            </label>
            <select name="service_weeks" id="serviceWeeks">
              <option value="4">4週</option>
              <option value="5">5週</option>
              <option value="6">6週</option>
              <option value="7">7週</option>
              <option value="8">8週</option>
              <option value="9">9週</option>
              <option value="10">10週</option>
              <option value="11">11週</option>
              <option value="12">12週</option>
              <option value="13">13週</option>
              <option value="14">14週</option>
              <option value="15">15週</option>
              <option value="16">16週</option>
              <option value="17">17週</option>
              <option value="18">18週</option>
              <option value="19">19週</option>
              <option value="20">20週</option>
              <option value="21">21週</option>
              <option value="22">22週</option>
              <option value="23">23週</option>
              <option value="24">24週</option>
            </select>
          </div>
          <div id="cleanArea">
            <h5>定期提供以下區域的清潔服務</h5>
            <div id="cleanInfo">
              <p>
                客廳
                <i className="bi bi-info-circle"></i>
              </p>
              <p>
                臥室
                <i className="bi bi-info-circle"></i>
              </p>
              <p>
                廚房
                <i className="bi bi-info-circle"></i>
              </p>
              <p>
                浴室
                <i className="bi bi-info-circle"></i>
              </p>
              <p>
                陽台
                <i className="bi bi-info-circle"></i>
              </p>
              <p>
                窗戶
                <i className="bi bi-info-circle"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div id="chooseMember">
            <div id="not-specify">
              <h5>不指定人員</h5>
            </div>
            <div id="specify">
              <Member score="4.8" name="王美美" img="./images/cleaner1.jpg" />
              <Member score="4.2" name="陳家家" img="./images/cleaner2.jpg" />
              <Member score="4.3" name="邱仙仙" img="./images/cleaner3.jpg" />
              <Member score="4.0" name="高帥帥" img="./images/cleaner4.jpg" />
            </div>
          </div>
        </div>
      </div>
      <Button class="not-press" />
    </form>
  );
};

export default Step1Area;
