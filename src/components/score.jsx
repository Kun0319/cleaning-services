import "./order.css";

const score = () => {
    return (
        <dialog open className="scoreOP">
            <div className="scoreTop"><u>填寫評價</u></div>
            <div className="scoreBody">
                <img className="orderStaff" src="images/orderStaff.png" alt="" />
            </div>
            <div className="scoreBody">
                <img className="scoreStart" src="images/staffInfo-star.png" alt="" />
            </div>
            <div className="scoreBody">
                <span>派遣人員：李大媽</span>
            </div>
            <div className="scoreBody">
                <span>派遣人員：李大媽</span>
            </div>
            <div className="scoreBody">
                <span>派遣人員：李大媽</span>
            </div>
            <div className="scoreBody">
                <span>派遣人員：李大媽</span>
            </div>
            <div className="scoreBody">
                <span>派遣人員：李大媽</span>
            </div>
        </dialog>
    );
}

export default score;