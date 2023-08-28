import "./order.css";

const score = () => {
    return (
        <dialog open className="scoreOP">
            <div className="scoreTop"><u>填寫評價</u></div>
            <div className="scoreBody">
                <img className="orderStaff" src="images/orderStaff.png" alt="" />
            </div>
            <div className="scoreBody ">
                <img className="scoreStart" src="images/staffInfo-star.png" alt="" />
            </div>
            <div className="scoreBody scoretext">
                <span>派遣人員：李大媽</span>
            </div>
            <div className="scoreBody scoretext">
                <span>打掃點數：
                    <button className="scorebtn">-</button>
                    <span>0</span>
                    <button className="scorebtn">+</button>
                </span>
            </div>
            <div className="scoreBody scoretext">
                <span>效率點數：
                    <button className="scorebtn">-</button>
                    <span>0</span>
                    <button className="scorebtn">+</button>
                </span>
            </div>
            <div className="scoreBody scoretext">
                <span>態度點數：
                    <button className="scorebtn">-</button>
                    <span>0</span>
                    <button className="scorebtn">+</button>
                </span>
            </div>
            <div className="scoreBody scoretext">
                <span>細心點數：
                    <button className="scorebtn">-</button>
                    <span>0</span>
                    <button className="scorebtn">+</button>
                </span>
            </div>
            <input className="scoreBody scoreinput" type="text" placeholder="請寫下頻論內容" />
            <div className="scoreBody">
            <div className="orderBtns">
                <button
                    onClick={() => {
                        alert("AAAAAAAAAAAAAAAAAA");
                    }}
                    className="orderBtn"
                >
                    略過
                </button>
                <button
                    onClick={() => {
                        alert("AAAAAAAAAAAAAAAAAA");
                    }}
                    className="orderBtn"
                >
                    送出評論
                </button>
            </div>
        </div>
        </dialog >
    );
}

export default score;