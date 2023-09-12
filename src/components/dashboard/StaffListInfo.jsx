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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [useridarr, setUserIdArr] = useState({});


  //接收資料
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:4107/dashboard/StaffList/${employeeid}`
        );
        setStaffData(result.data.data[0]); //員工資料
        setStaffListData(result.data.list); //訂單紀錄
        setUserIdArr(()=>{
          const arr=[];
          result.data.useridarr.map((obj)=>{arr.push(obj.employeeid)})
          return arr
        })//員工總數
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [employeeid]);


      //   上一頁
      const prevStaffClick = () => {
        var data = useridarr[useridarr.indexOf(employeeid)-1]
        var res = data ? data : employeeid
        navigate(`/dashboard/StaffList/${res}`)
      }
       //   下一頁
      const nextStaffClick = () => {
        var data = useridarr[useridarr.indexOf(employeeid)+1]
        var res = data ? data : employeeid
        navigate(`/dashboard/StaffList/${res}`)
      }


  const { employeename, employeephone, employeeemail, photo, vaccine, goodid, racheck, cases } =
    staffData;

  return (
    <div>
      <div className="Container">
        <h3 className="orderh3">員工資料</h3>
        <div className="orderContainer">
          <h5 className="orderContent">
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
              <li>會員姓名:</li>
              <li>{employeename}</li>
              <li>會員編號:</li>
              <li>{employeeid}</li>
              <li>E-mail:</li>
              <li>{employeeemail}</li>
              <li>聯絡方式:</li>
              <li>{employeephone}</li>
              <li>案件數:</li>
              <li>{cases}件</li>
            </ol>
          </h5>
          {/* 視窗開關 */}
          <div>
            <button
              className="btn btn-success"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              員工歷史訂單
            </button>
          </div>

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
