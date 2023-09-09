import React, { useEffect, useState } from 'react'
import axios from "axios";


const AddStaff = () => {
    const [orderAPI, setOrderAPI] = useState([]);
    const [imageData, setImageData] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(
                    `http://localhost:4107/dashboard/addstaff`
                );
                setOrderAPI(result.data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    async function handleSignUp(e) {
        e.stopPropagation()
        const formData = new FormData();
        formData.append('key', imageData)
        const a2b = formData.get("key")
        try {
            await axios.post(`http://localhost:4107/dashboard/addstaff/upload`, a2b, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function handleImagePut(e) {
        const imageUpdata = e.target.files[0]
        setImageData(imageUpdata)
        console.log(imageUpdata)
    }


    return (
        <div className="dashOrder">
            <div className="orderHead">
                <h3>員工註冊</h3>
            </div>
            <div className="orderContainer">
                <h5 className="orderContent">
                    <ol>
                        <li>員工姓名:</li>
                        <li><input type="text" /></li>
                        <li>身分證字號:</li>
                        <li><input type="text" /></li>
                        <li>聯絡方式:</li>
                        <li><input type="tel" /></li>
                        <li>出生年月日:</li>
                        <li><input type="date" /></li>
                        <li>E-mail:</li>
                        <li><input type="email" /></li>
                        <li>密碼:</li>
                        <li><input type="password" /></li>
                    </ol>
                    <ol>
                        <li>疫苗接種:</li>
                        <li><select>
                            <option value="0">未接種</option>
                            <option value="1">已接種</option>
                        </select></li>
                        <li>良民證:</li>
                        <li><select>
                            <option value="1">無犯罪紀錄</option>
                            <option value="0">有案底</option>
                        </select></li>
                        <li>公司認證:</li>
                        <li><select>
                            <option value="0">無認證</option>
                            <option value="1">浣熊公司認證會員</option>
                        </select></li>
                        <li>地址:</li>
                        <li>
                            <input type='text' defaultValue={"臺中市"} disabled />
                            <select>
                                {orderAPI.map((dist, index) => {
                                    return (
                                        <option value={dist.dist} key={index}>
                                            {dist.dist}
                                        </option>
                                    );
                                })}
                            </select>
                            <input type="text" />
                        </li>
                        <li>上傳頭像</li>
                        <li><input type="file" accept='image/*' onChange={(e) => handleImagePut(e)} /></li>
                    </ol>
                </h5>
                <div
                    style={{ position: "relative", width: "100%", textAlign: "center" }}
                >
                    <button className="btn btn-primary ms-0" onClick={handleSignUp}>送出</button>
                    <button className="btn btn-danger ms-0">取消</button>
                </div>
            </div>
        </div>)
}
export default AddStaff