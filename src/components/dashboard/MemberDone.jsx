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
        return "七";
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
    <>
    <div
      className={`staff-accordion ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="staff-header">
        {getFormatDay()}{`-星期${getOrderDay()}${item.donetime}`}
      </div>
    </div>
      {active && <h1>{getOrderDay()}{getFormatDay()}{orderImages && orderImages.map((data) =>
    <img src={data} className="orderImages" alt="orderImages" />
  )}</h1>}
    </>);
}

export default MemberDone;
