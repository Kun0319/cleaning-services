import React from "react";


const Login = () => {

    return (
        
        <div className="loginflex">
            
            

            <img src="./images/loginimg.png" className="loginimg"/>

            <ul>
                <li className="loginli">
                    <img src="./images/nameicon.png" className="loginicon"/>
                    <p>帳號</p>
                    <input placeholder="請輸入帳號"></input>
                </li>
                <li className="loginli">
                    <img src="./images/password.png" className="loginicon"/>
                    <p>密碼</p>
                    <input placeholder="請輸入密碼"></input>
                </li>
            </ul>

            <button className="signupbtn">登入</button>

        </div>
    );
};

export default Login;


