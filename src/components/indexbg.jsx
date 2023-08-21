import React, { Component } from "react";

class indexbg extends Component {
  state = {};
  btn = {
    backgroundColor: "#ffc107",
    height: "2em",
  };

  roundpic = {
    top: "25rem",
    right: "35rem",
  };
  render() {
    return (
      <div>
        <div className="position-relative d-flex">
          {/* 背景圖片 */}
          <img
            src="images/Frame.png"
            alt=""
            className=" rounded mx-auto d-block img-fluid position-absolute"
            style={{ top: "20rem", width: "100vw" }}
          />
          <img
            src="images/raccoon.png"
            alt="error"
            className="position-absolute"
            style={{ top: "20rem", left: "50rem" }}
          />
          {/* 文字及預約按鈕 */}
          {/*  top-50 start-0  translate-middle-y*/}
          <div
            className="position-absolute "
            style={{ top: "15rem", left: "20rem" }}
          >
            <h1>
              浣熊管家
              <br />
              讓你有個乾淨的家
            </h1>
            <button className="btn " style={this.btn}>
              立即預約
            </button>
          </div>
          {/* 圓形圖片 */}
          <div className="position-absolute  " style={this.roundpic}>
            <div className="position-absolute top-50 start-50 translate-middle">
              <img
                src="images/circleImage1.webp"
                alt=""
                className="rounded-circle"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="position-absolute bottom-50 end-50 translate-middle">
              <img
                src="images/circleImage2.webp"
                alt=""
                className="rounded-circle"
                style={{ width: "250px", height: "250px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default indexbg;
