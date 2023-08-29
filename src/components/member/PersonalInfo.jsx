import React from 'react';

const PersonalInfo = () => {
    return (
        <div>
            {/* 8/30 註解內容是表示路徑用 還需修改 */}
            {/* <div className='position'>
                首頁
                /
                會員管理
                /
                會員資料
            </div> */}


            <div className='Container'>
                <h3 className='orderh3'>會員資料</h3>
                <div className="orderContainer" >
                    <h5 className='orderContentMem '>
                        會員編號:A01<br />
                        姓名:邱小如<br />
                        電話:0912345667<br />
                        身分證:A0912345667<br />
                        生日:1994/01/01<br />
                        Email:123@gmail.com<br />
                        地址:台中市黎明路二段658號<br />
                    </h5>
                </div>
                <div className='btncontain' >
                    <button >取消訂單</button>
                    <button >更新資料</button>
                </div>
            </div>
        </div>
    )
}


export default PersonalInfo;