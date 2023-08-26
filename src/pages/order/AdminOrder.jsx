import React, { Component } from 'react';




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
                <div className='position'>
                    首頁
                    /
                    訂單狀態
                    /
                    管理訂單
                </div>

                {/* 內容 */}
                <div className='Container'>
                    <h3 className='orderh3'>管理訂單</h3>
                    <div className="orderContainer" >
                        <h5 className='orderContent'>
                            訂單編號：C00019<br />
                            顧客姓名：鍾秋節<br />
                            電話：0912345667<br />
                            Email：123@gmail<br />
                            地址：台中市黎明路二段658號<br />
                            訂單內容：客廳清潔<br />
                            附註：客廳的花瓶不要移動，那花瓶要十二萬，清理時要小心點。<br />
                        </h5>
                        <img src="/images/vase.png" alt="" />
                    </div>

                    <div className='btncontain' >
                        <button >取消訂單</button>
                        <button >確認付款</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default member;