import React from "react";
import Member from "./Member";
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Step1Area = () => {
  const members = [
    {
      name: "王美美",
      score: 4.8,
      img: "./images/cleaner1.jpg",
    },
    {
      name: "陳家家",
      score: 4.2,
      img: "./images/cleaner2.jpg",
    },
    {
      name: "邱仙仙",
      score: 4.4,
      img: "./images/cleaner3.jpg",
    },
    {
      name: "高強強",
      score: 4.9,
      img: "./images/cleaner4.jpg",
    },
  ];
  const areaInfo = [
    {
      area: "客廳",
      detail: "桌櫃擦拭、地板清潔、地毯除塵、沙發與隙縫處清潔",
    },
    {
      area: "臥室",
      detail: "衣櫃外觀擦拭、地板清潔、桌面清潔、家電外觀擦拭",
    },
    {
      area: "廚房",
      detail: "流理檯、瓦斯爐台、地板、抽油煙機清潔、冰箱外觀、桌櫃擦拭",
    },
    {
      area: "浴室",
      detail:
        "馬桶刷洗、浴缸清潔、鏡面光亮、洗手檯面清潔、磁磚刷洗、浴門地板清潔",
    },
    {
      area: "窗戶",
      detail: "內側底溝擦拭、紗窗內部清潔、玻璃窗內部清洗",
    },
    {
      area: "陽台",
      detail: "地板刷洗、水管擦拭、曬衣桿擦拭",
    },
  ];
  const changeClickStyle1 = (e, pElm, tElm) => {
    const otherItems = document.querySelectorAll(pElm);
    otherItems.forEach((item) => {
      item.classList.remove("selected");
    });
    let targetElement = e.target;
    while (!targetElement.classList.contains(tElm)) {
      targetElement = targetElement.parentElement;
    }
    targetElement.classList.toggle("selected");
  };

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
              {Array.from({ length: 21 }, (v, i) => i).map((item) => {
                return (
                  <option value={item + 4} key={item}>
                    {item + 4}週
                  </option>
                );
              })}
            </select>
          </div>
          <div id="cleanArea">
            <h5>定期提供以下區域的清潔服務</h5>
            <div id="cleanInfo">
              {areaInfo.map((item, index) => {
                return (
                  <p key={index}>
                    {item.area}
                    <OverlayTrigger
                      key={index}
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${index}`}
                          className="custom-tooltip"
                        >
                          {item.detail}
                        </Tooltip>
                      }
                    >
                      <i className="bi bi-info-circle"></i>
                    </OverlayTrigger>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right">
          <div id="chooseMember">
            <div
              className="not-specify"
              onClick={(e) => {
                changeClickStyle1(e, ".memberItem", "not-specify");
              }}
            >
              <h5>不指定人員</h5>
            </div>
            <div>
              <div className="specify">
                {members.map((p, index) => {
                  return (
                    <Member
                      onClick={(e) => {
                        changeClickStyle1(e, ".memberItem", "memberItem");
                        document
                          .querySelector(".not-specify")
                          .classList.remove("selected");
                      }}
                      score={p.score}
                      name={p.name}
                      img={p.img}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button class="not-press" next="/book/book2" />
    </form>
  );
};

export default Step1Area;
