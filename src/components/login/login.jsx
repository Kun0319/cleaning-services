import React from "react";
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext, { AuthProvider } from './AuthContext';


import axios from './axios'

const LOGIN_URL = '/login';














const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();


    const [email, setUseremail] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers:
                    {
                        "Content-Type": "application/json"
                    },
                    credentials: 'include',
                }

            );




            function getCookieValue(cookieName) {
                const name = cookieName + "=";

                // decodeURIComponent會對網頁上cookie做解碼
                const decodedCookie = decodeURIComponent(document.cookie);

                // 將cookie拆分
                const cookieArray = decodedCookie.split(';');
                // 找指定的cookie名稱
                for (let i = 0; i < cookieArray.length; i++) {
                    let cookie = cookieArray[i];

                    // "connect.sid"
                    while (cookie.charAt(0) === ' ') {
                        // 切割空格部分
                        cookie = cookie.substring(1);

                    }
                    // 找指定的name 也就是connect.sid
                    if (cookie.indexOf(name) === 0) {
                        // 去除名稱部分只留下值(資料)
                        return cookie.substring(name.length, cookie.length);
                    }
                }
                // 如果沒有找到該cookie 返回空字串
                return "";
            }

            // 將 Cookie 值存到 localStorage
            const cookieValue = getCookieValue("connect.sid"); // Cookie 名稱
            console.log(cookieValue);
            if (cookieValue) {
                localStorage.setItem("userdata", cookieValue); //  localStorage 鍵名 可以自行修改
                sessionStorage.setItem("userdata", cookieValue); //  localStorage 鍵名可以自行修改
            }



            // console.log(JSON.stringify(response?.data))
            // console.log(JSON.stringify(response))

            // const accessToken = response?.data?.accessToken;
            // const roles = response?.data?.roles;

            // setAuth({ email, password, roles, accessToken });
            setUseremail('');
            setPwd('');
            setSuccess(true);
            document.cookie = 'isLoggedIn=true; path=/'

        } catch (err) {
            if (!err?.response) {
                setErrMsg('沒有伺服器服務')
            } else if (err.response?.status === 400) {
                setErrMsg('帳號或密碼錯誤!!!')
            } else if (err.response?.status === 401) {
                setErrMsg("帳號或密碼錯誤!!!")
            } else {
                setErrMsg('登入失敗!!')
            }
            errRef.current.focus();
        }
    }

    // 儲存session
    // 从 Cookie 中获取需要的值





    return (
        <>
            {success ? (
                <section>
                    <h1>登入成功!!</h1>
                    <br />
                    <p>
                        <a href="/">回首頁</a>
                    </p>
                </section>
            ) : (
                <div className="loginflex">


                    <p ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive">{errMsg}</p>


                    <img src="./images/loginimg.png" className="loginimg" />
                    <form action="" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <ul>
                            <li className="loginli">
                                <img src="./images/nameicon.png" className="loginicon" />
                                <p>帳號</p>
                                <input placeholder="請輸入帳號"
                                    type="text"
                                    ref={userRef}
                                    id="mail"
                                    autoComplete="off"
                                    onChange={(e) => setUseremail(e.target.value)}
                                    value={email}
                                    required></input>
                            </li>
                            <li className="loginli">
                                <img src="./images/password.png" className="loginicon" />
                                <p>密碼</p>
                                <input placeholder="請輸入密碼"
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={password}
                                    required></input>
                            </li>
                        </ul>
                        <button className="signupbtn" style={{}} >登入</button>
                    </form>

                </div >

            )}
        </>
    )
}
export default Login;


