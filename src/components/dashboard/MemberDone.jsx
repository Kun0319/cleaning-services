import "./dashboard.css";

function MemberDone({ item, active, onClick }) {

  const getOrderDay = () => { 
    const day = new Date().getDay(item.date) + 1;
    switch (day) {
      case 1:
        return "一";
      case 2:
        return "二";
      case 3:
        return "三";
      case 4:
        return "四";
      case 5:
        return "五";
      case 6:
        return "六";
      case 7:
        return "日";
      default:
        return "未知";
    }
  }

  function getOrderDoneImages(){ 
    return String(item.orderphoto).split(",")
  }
  const orderImages = getOrderDoneImages();

  const getFormatDay = () => new Date(item.date).toLocaleDateString("en-CA");
  
  return (
    <>{ item &&<div
      className={`staff-accordion ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="staff-header">
        完成時間:{getFormatDay()}{`-星期${getOrderDay()}${item.donetime || ""}`}
      </div>
    </div>}
      {active && <div className="staff-content animated-accordion">
        {orderImages && orderImages.map((data, index) => (index+1)%2 !==0 ?<div key={index} style={{marginTop:"2px" ,marginLeft:"2px",border:"1px solid black",borderRight:"0px",display:"block",padding:"5px", width:"100px"}}><span>清掃前</span><img src={data} className="orderImages w-100" alt="orderImages" /></div>
        :<div key={index} style={{marginTop:"2px" ,marginRight:"2px" ,borderLeft:"0px" ,border:"1px solid black",display:"block",padding:"5px", width:"100px"}}><span>清掃後</span><img src={data} className="orderImages w-100" alt="orderImages" /></div>
        )}
      </div>}
    </>);
}

export default MemberDone;
