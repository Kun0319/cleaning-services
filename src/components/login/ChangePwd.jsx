import React from "react";
import './login.css'
import "../../components/dashboard/dashboard.css";
import SidebarMember from "../member/SidebarMember";
import Navbar from "../navbar";



const ChangePwd = () => {


    return <>
        
            <div className="membercontainer">
                <div className="loginrightbox">
                    <div className="loginflex">
                        <ul>
                            <li className="loginli">
                                <p>輸入密碼</p>
                                <input placeholder="請輸入密碼"></input>
                            </li>
                            <li className="loginli">
                                <p>請再次輸入密碼</p>
                                <input type="email" placeholder="請輸入信箱"></input>
                            </li>
                        </ul>
            
                        <div>
                            <button className="cancelbtn">取消</button>
                            <button className="signupbtn">確認修改</button>
                        </div>
                    </div>
                </div>
                <div className="loginbg">
                  <br></br><br>
                  </br><br></br><br></br>
                </div>
            </div>


    
    
    
    </>

}

export default ChangePwd;