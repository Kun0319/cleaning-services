import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../../components/member/member.css";
const PersonalInfo = () => {
  const { uid } = useParams();
  const [personNumber, setPersonNumber] = useState(parseInt(uid));
  const [memberData, setMemberData] = useState({});
  const [dataLength, setDatalength] = useState(null);
  const navigate = useNavigate();

  //接收資料
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:4107/dashboard/PersonalInfo/${personNumber}`
        );
        setMemberData(result.data.data[0]);
        setDatalength(result.data.length);
        setPersonNumber(parseInt(uid));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [personNumber, uid]);

  //   上一頁
  function prevPage() {
    const newPersonNumber =
      personNumber - 1 > 0 ? personNumber - 1 : personNumber;
    setPersonNumber(newPersonNumber);
    navigate(`/dashboard/PersonalInfo/${newPersonNumber}`);
  }

  //   下一頁
  function nextPage() {
    const newPersonNumber =
      personNumber + 1 <= dataLength ? personNumber + 1 : personNumber;
    setPersonNumber(newPersonNumber);
    navigate(`/dashboard/PersonalInfo/${newPersonNumber}`);
  }

  const {
    name,
    birthday,
    phone,
    email,
    id,
    password,
    city,
    rural,
    address,
    admin,
    userid,
  } = memberData;

  return (
    <div>
      <div className="Container">
        <h3 className="orderh3">會員資料</h3>
        <div className="orderContainer">
          <h5 className="orderContent">
            <ol>
              <li>會員姓名:</li>
              <li>{name}</li>
              <li>會員編號:</li>
              <li>{userid}</li>
              <li>身分證字號:</li>
              <li>{id}</li>
              <li>出生年月日:</li>
              <li>{birthday}</li>
              <li>聯絡方式:</li>
              <li>{phone}</li>
            </ol>
            <ol>
              <li>地址:</li>
              <li>{city + rural + address}</li>
              <li>E-mail:</li>
              <li>{email}</li>
              <li>密碼:</li>
              <li>{password}</li>
              <li>權限:</li>
              <li>{admin}</li>
            </ol>
          </h5>
          {/* 黑名單還要取值做判斷 */}
          <div>
            {true ? (
              <button className="btn btn-danger">加入黑名單</button>
            ) : (
              <button className="btn btn-success">解除黑名單</button>
            )}
          </div>
        </div>

        <div className="btncontain">
          <button onClick={prevPage}>上一頁</button>
          <button onClick={nextPage}>下一頁</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
