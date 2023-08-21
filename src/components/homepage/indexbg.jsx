import React, { Component } from "react";

class indexbg extends Component {
  state = {};
  btn = {
    backgroundColor: "#ffc107",
    height: "3em",
    width: "15em",
    color:"#664D03"
  };

  roundpic = {
    top: "25%",
    left: "55%",
  };

  render() {
    return (

      <div className='d-flex row   position-relative '>
        {/* 空白 */}
        <div style={{ height: '25em' }}></div>

        <div className="d-flex"
          style={{ position: 'absolute', top: '10em', right: '25em', width: '100%', height: '15em', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: "#3F3350",textAlign:"center" }}>
            浣熊管家<br />讓你有個乾淨的家
          </h1>
          <button className='btn'
            style={this.btn}>
            立即預約
          </button>

          {/* 圓形圖片 */}
          <div
            className='position-relative'
            style={this.roundpic}>
            <div
              className='position-absolute translate-middle'>
              <img
                src="images/circleImage1.webp"
                alt=""
                className='rounded-circle'
                style={{ width: '200px', height: '200px' }} />
            </div>

            <div
              className='position-absolute bottom-50 end-50 translate-middle'>

              <img
                src="images/circleImage2.webp"
                alt=""
                className='rounded-circle'
                style={{ width: '250px', height: '250px' }} />

            </div>
          </div>
        </div>

        <div className='d-flex '
          style={{ width: '100vw', height: "40em" }}>

          {/* 背景圖片 */}
          <img src='images/background.png'
            alt=""
            className='img-fluid'
            style={{ maxWidth:'100%', height: '40em' }} />
        </div>
      </div>




    );
  }
}

export default indexbg;
