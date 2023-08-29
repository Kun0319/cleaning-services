import React, { Component } from 'react';



class Narbar extends Component {
    state = {

    };

    styles = {
        // backgroundColor: "#ffc107",
        height: "6em",
    };

    btn = {
        backgroundColor: "#ffc107",
        color: "#664D03",



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
                            <a href=""> <img src="images/info.png" alt=""
                                className='m-3'
                                style={{ width: "2rem" }} /></a>
                            <button className='px-3 mx-2 btn  ' style={this.btn}>登入</button>
                        </div>
                    </nav >
                </div>




            </div >
        );
    }
}

export default Narbar;


// #ffc107

