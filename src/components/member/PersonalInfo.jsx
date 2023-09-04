import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../../components/member/member.css";
const PersonalInfo = () => {
  const { uid } = useParams();
  const [personNumber, setPersonNumber] = useState(parseInt(uid));
  const [memberData, setMemberData] = useState({});
  const [addBlackList, setAddBlackList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [why, setWhy] = useState("");
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
        setWhy(result.data.why[0].why || "");
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

  // 加黑名單
  function handleBlacklist() {
    setAddBlackList(!addBlackList);
  }

  // 送出黑名單理由
  function sendBlackList() {
    try {
      axios.put(
        `http://localhost:4107/dashboard/PersonalInfo/blacklist/${uid}`,
        { why: inputValue }
      );
      setAddBlackList(!addBlackList);
      setInputValue("");
      alert("成功送出");
      window.location.reload();
    } catch (error) {
      console.error("Error updata data:", error);
    }
  }

  // 解除黑名單
  async function deleteBlackList() {
    try {
      await axios.put(
        `http://localhost:4107/dashboard/PersonalInfo/removeblacklist/${uid}`,
        { uid: uid }
      );
      await axios.delete(
        `http://localhost:4107/dashboard/PersonalInfo/removeblacklist/${uid}`,
        { uid: uid }
      );
      alert("成功解除");
      window.location.reload();
    } catch (error) {
      console.error("Error updata data:", error);
    }
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
    blacklist,
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
              <li>黑名單:</li>
              <li>
                {blacklist ? (
                  <span className="text-danger fw-bold">黑名單:{why}</span>
                ) : (
                  <span className="text-success fw-bold">正常用戶</span>
                )}
              </li>
            </ol>
          </h5>

          <div
            style={{ position: "relative", width: "100%", textAlign: "center" }}
          >
            {addBlackList ? (
              <div className="blacklist-content">
                <label htmlFor="black">{`"${name}"`}加入黑名單的原因:</label>
                <input
                  type="text"
                  id="black"
                  className="w-100"
                  autoComplete="off"
                  value={inputValue}
                  onInput={(e) => {
                    setInputValue(e.target.value);
                  }}
                />
                <button
                  className="btn btn-primary ms-0"
                  onClick={sendBlackList}
                >
                  送出
                </button>
                <button
                  className="btn btn-danger ms-0"
                  onClick={() => {
                    setAddBlackList(!addBlackList);
                    setInputValue("");
                  }}
                >
                  取消
                </button>
              </div>
            ) : (
              ""
            )}
            {blacklist ? (
              <button className="btn btn-success" onClick={deleteBlackList}>
                解除黑名單
              </button>
            ) : (
              <button className="btn btn-danger" onClick={handleBlacklist}>
                加入黑名單
              </button>
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
