import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../components/member/member.css";
import ControllAccordion from "./ControllAccordion";
const StaffListInfo = () => {
  const { employeeid } = useParams();
  const [staffData, setStaffData] = useState({});
  const [staffListData, setStaffListData] = useState({});
  const [dataLength, setDatalength] = useState(null); //預留員工換頁變數
  const [isOpen, setIsOpen] = useState(false);

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [employeeid]);
  //   //   上一頁
  //   function prevPage() {
  //     const newPersonNumber =
  //       personNumber - 1 > 0 ? personNumber - 1 : personNumber;
  //     setPersonNumber(newPersonNumber);
  //     navigate(`/dashboard/PersonalInfo/${newPersonNumber}`);
  //   }

  //   //   下一頁
  //   function nextPage() {
  //     const newPersonNumber =
  //       personNumber + 1 <= dataLength ? personNumber + 1 : personNumber;
  //     setPersonNumber(newPersonNumber);
  //     navigate(`/dashboard/PersonalInfo/${newPersonNumber}`);
  //   }

  const { name, phone, email, photo, vaccine, goodid, racheck, cases } =
    staffData;

  return (
    <div>
      <div className="Container">
        <h3 className="orderh3">員工資料</h3>
        <div className="orderContainer">
          <h5 className="orderContent">
            <ol>
              <li>會員姓名:</li>
              <li>{name}</li>
              <li>會員編號:</li>
              <li>{employeeid}</li>
              <li>疫苗接種:</li>
              <li>{vaccine}</li>
              <li>照片:</li>
              <li>{photo}</li>
              <li>聯絡方式:</li>
              <li>{phone}</li>
            </ol>
            <ol>
              <li>良民證:</li>
              <li>{goodid}</li>
              <li>E-mail:</li>
              <li>{email}</li>
              <li>racheck:</li>
              <li>{racheck}</li>
              <li>案件數:</li>
              <li>{cases}</li>
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

        <div className="btncontain">
          <button>上一頁</button>
          <button>下一頁</button>
        </div>
      </div>
    </div>
  );
};

export default StaffListInfo;
