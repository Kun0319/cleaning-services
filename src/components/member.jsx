import React, { Component } from 'react';
import Sidebar from "./Sidebar";



class member extends Component {
    state = {};


    btn = {
        height: "2em",
        width: "8em",
        color: "#664D03",
    }



    render() {
        return (
            <div>
                <div className=' bg-dark'>
                    HH
                </div>


                <div className='d-flex container'
                    style={{ height: "807px", }}>




                    {/* 選單 */}
                    <div className=' '>
                        <Sidebar />
                    </div>



                    {/* 內容 */}
                    <div className=' ms-3 d-flex row align-items-center justify-content-center'
                        style={{ width: "1091px", height: "807px", border: "1px solid #ffc107", borderRadius: "50px" }}>
                        <h3 className=' justify-content-center'>管理訂單</h3>
                        <div className="d-flex  align-items-center " style={{ width: "913px", height: "584px", backgroundColor: "#FFF8E1" }}>
                            <h5 style={{ color: "#664D03", lineHeight: "50px" }}>
                                訂單編號：C00019<br />
                                顧客姓名：鍾秋節<br />
                                電話：0912345667<br />
                                Email：123@gmail<br />
                                地址：台中市黎明路二段658號<br />
                                訂單內容：客廳清潔<br />
                                附註：客廳的花瓶不要移動，那花瓶要十二萬，清理時要小心點。<br />
                            </h5>
                        </div>
                        {/* 用position? */}
                        <div className='d-flex row justify-content-center m-5  ' >
                            <button style={this.btn}>取消訂單</button>
                            <button style={this.btn}>確認付款</button>
                            <img src="/images/Frametree.png" alt="" />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default member;