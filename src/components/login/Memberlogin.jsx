import React from "react";

const Memberlogin = () => {


    return <>

        <div className="loginflex">

            <ul>
                <li className="loginli">
                    <img src="./images/nameicon.png" className="loginicon" />
                    <p>姓名</p>
                    <input placeholder="請輸入帳號"></input>
                </li>
                <li className="loginli">
                    <img src="./images/date.png" className="loginicon" />
                    <p>生日</p>
                    <input type="date" placeholder="請輸入密碼"></input>
                </li>
                <li className="loginli">
                    <img src="./images/tet.png" className="loginicon" />
                    <p>手機號碼</p>
                    <input placeholder="請輸入手機號碼"></input>
                </li>
                <li className="loginli">
                    <img src="./images/icon-4.png" className="loginicon" />
                    <p>信箱</p>
                    <input type="email" placeholder="請輸入信箱"></input>
                </li>
                <li className="loginli">
                    <img src="./images/idnumber.png" className="loginicon" />
                    <p>身分證字號</p>
                    <input placeholder="請輸入身分證字號"></input>
                </li>
                <li className="loginli">
                    <img src="./images/icon-6.png" className="loginicon" />
                    <p>地址</p>
                    <input placeholder="請輸入密碼"></input>
                </li>
                <li className="loginli">
                    <img src="./images/password.png" className="loginicon" />
                    <p>密碼</p>
                    <input placeholder="請輸入密碼"></input>
                </li>
            </ul>

            <button className="signupbtn">確認修改</button>


        </div>


    
    
    
    </>

}

export default Memberlogin;