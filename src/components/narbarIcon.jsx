import React, { Component } from 'react';
// import background from '../../public/images/Frame.png';  // ./images/Frame.png
// import circleImage1 from '../../public/image/circleImage1.webp'; //  ./images/circleImage1.webp
// import circleImage2 from '../../public/image/circleImage2.webp';  // ./images/circleImage2.webp
// import logo from '../../public/image/logo.png'; // ./images/logo.png
// import raccoon from '../../public/image/raccoon.png'; // ./images/raccoon.png'



class narbar extends Component {
    state = {

    };

    styles = {
        // backgroundColor: "#ffc107",
        height: "6em",
    };

    btn = {
        backgroundColor: "#ffc107",
        height: "2em",
        color: "#664D03"

    };
    atagstyle = {
        color: "#664D03"
    };




    render() {
        return (
            <div>
                {/* 導覽列 */}
                <div className='container'>
                    <nav style={this.styles} className='d-flex'>
                        {/* logo */}
                        <img src='images/logo.png' style={{ width: "10em", height: "6em" }} alt="" className='img-fluid' />

                        <div className='ms-auto d-flex align-items-center' >
                            <a href="" style={this.atagstyle} className=' mx-3  text-decoration-none '>關於我們</a>
                            <a href="" style={this.atagstyle} className=' mx-3 text-decoration-none'>服務項目</a>
                            <a href="" style={this.atagstyle} className='mx-3   text-decoration-none'>案例分享</a>
                            <a href="" style={this.atagstyle} className='mx-3   text-decoration-none'>常見問題</a>
                            {/* icon */}
                            <a href="">
                                <img src="images/info.png" alt=""
                                    className='m-3'
                                    style={{ width: "2rem" }} />
                            </a>

                            <a href="">
                                <img src="images/login.png" alt=""
                                    style={{ width: "2rem" }} />
                            </a>

                        </div>
                    </nav >
                </div >


                {/* 封面 */}

            </div >
        );
    }
}

export default narbar;


// #ffc107

