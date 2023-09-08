import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../components/member/member.css";
import { useNavigate } from "react-router-dom";
import ControllAccordion from "./ControllAccordion";
const StaffListInfo = () => {
  const { employeeid } = useParams();
  const [staffData, setStaffData] = useState({});
  const [staffListData, setStaffListData] = useState({});
  const [dataLength, setDatalength] = useState(null);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // 編輯變數
  // const [upPhoto, setUpPhoto] = useState("")
  const [upName, setUpName] = useState("")
  const [upPhone, setUpPhone] = useState("")
  const [upEmail, setUpEmail] = useState("")
  const [upVaccine, setUpVaccine] = useState("")
  const [upGoodid, setUpGoodid] = useState("")
  const [upRacheck, setUpRacheck] = useState("")
  const [upCases, setUpCases] = useState("")

  //接收資料
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:4107/dashboard/StaffList/${employeeid}`
        );
        setStaffData(result.data.data[0]); //員工資料
        setStaffListData(result.data.list); //訂單紀錄
        setDatalength(result.data.length[0].length); //員工總數
        setUpName(result.data.data[0].employeename)
        setUpPhone(result.data.data[0].employeephone)
        setUpEmail(result.data.data[0].employeeemail)
        setUpVaccine(result.data.data[0].vaccine)
        setUpGoodid(result.data.data[0].goodid)
        setUpRacheck(result.data.data[0].racheck)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [employeeid]);

  //   上一頁
  const prevStaffClick = () => {
    var data = parseInt(employeeid.slice(2))
    var res = data - 1 > 0 ? data - 1 : data
    navigate(`/dashboard/StaffList/${"RA" + String(res).padStart(3, 0)}`)
  }

  //   下一頁
  const nextStaffClick = () => {
    var data = parseInt(employeeid.slice(2))
    var res = data + 1 > dataLength ? data : data + 1
    navigate(`/dashboard/StaffList/${"RA" + String(res).padStart(3, 0)}`)
  }

  // 資料更新送出
  async function handleSendEdit() {
    try {
      await axios.put(
        `http://localhost:4107/dashboard/StaffList/update/${employeeid}`,
        {
          upName: upName,
          upPhone: upPhone,
          upEmail: upEmail,
          upVaccine: upVaccine,
          upGoodid: upGoodid,
          upRacheck: upRacheck,
          upCases: upCases
        }
      );
      window.location.reload();
    } catch (error) {
      console.error("Error updata data:", error);
    }
  }


  const { employeename, employeephone, employeeemail, photo, vaccine, goodid, racheck, cases } =
    staffData;

  return (
    <div>
      <div className="Container">
        <h3 className="orderh3">員工資料</h3>
        <div className="orderContainer">
          {edit ? <h5 className="orderContent">
            <ol>
              <img src={photo} alt="asd" style={{ width: "130px" }} />
              <li>疫苗接種:</li>
              <li><input
                type="checkbox"
                defaultChecked={upVaccine === 1}
                onChange={(e) => { setUpVaccine(e.target.checked ? 1 : 0); }}
                required={true}
              />是否接種疫苗</li>
              <li>良民證:</li>
              <li><input
                type="checkbox"
                checked={upGoodid === 1}
                onChange={(e) => { setUpGoodid(e.target.checked ? 1 : 0); }}
                required={true}
              />是否有案底</li>
              <li>racheck:</li>
              <li><input
                type="checkbox"
                defaultChecked={upRacheck === 1}
                onChange={(e) => { setUpRacheck(e.target.checked ? 1 : 0); }}
                required={true}
              />是否認證</li>
            </ol>
            <ol>
              <li>員工姓名:</li>
              <li><input type="text" defaultValue={employeename} onChange={(e) => setUpName(e.target.value)} pattern=".{2,20}" required={true} /></li>
              <li>員工編號:</li>
              <li><input type="text" defaultValue={employeeid} disabled={true} /></li>
              <li>E-mail:</li>
              <li><input type="email" defaultValue={employeeemail} onChange={(e) => setUpEmail(e.target.value)} required={true} /></li>
              <li>聯絡方式:</li>
              <li><input type="tel" defaultValue={employeephone} onChange={(e) => setUpPhone(e.target.value)} pattern="^09[0-9]{8}$" required={true} /></li>
              <li>案件數:</li>
              <li><input type="number" defaultValue={cases} disabled={true} /></li>
            </ol>
          </h5>
            : <h5 className="orderContent">
              <ol>
                <img src={photo} alt="asd" style={{ width: "130px" }} />
                <li>疫苗接種:</li>
                <li>{vaccine ? "已接種" : "未接種"}</li>
                <li>良民證:</li>
                <li>{goodid ? "無犯罪紀錄" : "有案底"}</li>
                <li>racheck:</li>
                <li>{racheck ? "浣熊公司認證會員" : "無認證"}</li>
              </ol>
              <ol>
                <li>員工姓名:</li>
                <li>{employeename}</li>
                <li>員工編號:</li>
                <li>{employeeid}</li>
                <li>E-mail:</li>
                <li>{employeeemail}</li>
                <li>聯絡方式:</li>
                <li>{employeephone}</li>
                <li>案件數:</li>
                <li>{cases}件</li>
              </ol>
            </h5>}
          {/* 視窗開關 */}
          {edit ?
            <div
              style={{ position: "relative", width: "100%", textAlign: "center" }}>
              <button className="btn btn-danger" onClick={() => setEdit(!edit)}>取消編輯</button>
              <button className="btn btn-primary" onClick={handleSendEdit}>完成編輯</button>
            </div>
            : <div>
              <button
                className="btn btn-success"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                員工歷史訂單
              </button>
              <button className="btn btn-primary" onClick={() => setEdit(!edit)}>編輯資料</button>
            </div>}

          {/* 彈跳視窗 */}
          {isOpen && (
            <div className="staffOrderList">
              <h3 className="orderh3" style={{ textAlign: "center" }}>
                歷史訂單
              </h3>
              <div className="ControllAccordion" style={{ overflow: "auto" }}>
                <ControllAccordion items={staffListData} />
              </div>
              <button
                className="btn btn-danger staff-listBtn"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                X
              </button>
            </div>
          )}
        </div>

        <div className="orderBtn-group">
          <div className="orderBtn" onClick={prevStaffClick}>
            上一頁
          </div>
          <div className="orderBtn" onClick={nextStaffClick}>
            下一頁
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffListInfo;
