import React from "react";
import './Question.css';
const Question = () => {
    return (

        <div className="container">
            <div className="question">常見問題</div>

            <div className="arrangement">
                <div className="lattice">
                    <ul className="list-group" style={{ borderRadius: "15px 15px 0 0" }}>
                        <li className="list-group-item  tabe" style={{ backgroundColor: " #FFF8E1", fontSize: "18px" }}>
                            <b>請問有哪些付款方式 ?</b>
                        </li>
                        <li className="list-group-item tabe" style={{ color: "#997404" }}>付款方式目前採用信用卡支付。</li>
                    </ul>
                </div>

                <div className="lattice">
                    <ul className="list-group" style={{ borderRadius: "15px 15px 0 0" }}>
                        <li className="list-group-item  tabe" style={{ backgroundColor: " #FFF8E1", fontSize: "18px" }}>
                            <b>請問目前服務範圍只有台中嗎？</b>
                        </li>
                    </ul>
                    <li className="list-group-item tabe" style={{ backgroundColor: " #FFF8E1", fontSize: "18px" }}>對的，目前因人手狀況只提供台中服務，未來如有擴展其他區域將於官網通知，敬啟等候！</li>
                    <ul />
                </div>


                <div div className="lattice">
                    <ul className="list-group" style={{ borderRadius: "15px 15px 0 0" }}>
                        <li className="list-group-item  tabe" style={{ backgroundColor: " #FFF8E1", fontSize: "18px" }}>
                            <b>為何需要定期清潔？</b>
                        </li>
                        <li className="list-group-item tabe" style={{ color: "#997404" }}>
                            空氣中的污染物或有害粒子會留在室內。定期清潔除了能避免刺激過敏之外，也能維持良好的生活品質、照顧您的健康！</li>
                    </ul>
                </div>


                <div div className="lattice">
                    <ul className="list-group" style={{ borderRadius: "15px 15px 0 0" }}>
                        <li className="list-group-item  tabe" style={{ backgroundColor: " #FFF8E1", fontSize: "18px" }}>
                            <b>服務員清潔時，屋主一定要在家嗎？</b>
                        </li>
                        <li className="list-group-item tabe" style={{ color: "#997404" }}>
                            不需要。除了第一次服務時，我們希望客戶在場告知個人的居家習慣外，爾後我們的服務專員可以在客戶外出前到宅開始服務。</li>
                    </ul>
                </div>


                <div div className="lattice">
                    <ul className="list-group" style={{ borderRadius: "15px 15px 0 0" }}>
                        <li className="list-group-item  tabe" style={{ backgroundColor: " #FFF8E1", fontSize: "18px" }}>
                            <b>若你們公司清潔人員工作完畢，但沒能達到我的要求時該如何？</b>
                        </li>
                        <li className="list-group-item tabe" style={{ color: "#997404" }}>
                            我們的服務專員都是受過專業的清潔訓練，公司服務專員第一次到府打掃時會先與您溝通所想要的打掃重點，針對不滿意的地方即時改善達到您的要求，請您別擔心。</li>
                    </ul>
                </div>


                <div div className="lattice">
                    <ul className="list-group" style={{ borderRadius: "15px 15px 0 0" }}>
                        <li className="list-group-item  tabe" style={{ backgroundColor: " #FFF8E1", fontSize: "18px" }}>
                            <b>如果我不滿意服務員，可以當面糾正她或換人嗎？</b>
                        </li>
                        <li className="list-group-item tabe" style={{ color: "#997404" }}>
                            您可以與服務專員做適度的溝通，請將不滿意的情形告知公司，客服人員將依狀況做適度的處理，若仍無法解決您的問題，將為您做人員更換。</li>
                    </ul>
                </div>


                <div div className="lattice">
                    <ul className="list-group" style={{ borderRadius: "15px 15px 0 0" }}>
                        <li className="list-group-item  tabe" style={{ backgroundColor: " #FFF8E1", fontSize: "18px" }}>
                            <b>屋主需要準備哪些清潔用品及器材嗎？</b>
                        </li>
                        <li className="list-group-item tabe" style={{ color: "#997404" }}>不需要。我們服務專員每次到府服務時，均會自備。</li>
                    </ul>
                </div>


                <div className="lattice">
                    <ul className="list-group" style={{ borderRadius: "15px 15px 0 0" }}>
                        <li className="list-group-item  tabe" style={{ backgroundColor: " #FFF8E1", fontSize: "18px" }}>
                            <b>你們的服務人員可以固定嗎？</b>
                        </li>
                        <li className="list-group-item tabe" style={{ color: "#997404" }}>
                            可以指定服務專員，如遇到特殊狀況（病假、事假），門市會另外與您協調其他人員為您繼續服務。</li>
                    </ul>
                </div>
            </div>


            <div className="question-line">
                <p>還有想了解的嗎?</p>
                <p>歡迎加入我們官方Line與我們聯繫 !
                </p>

                <div className="line-img"><img src="images/question-002.png" width="150px" /></div>
                <div>
                    <ul className="question-icon">
                        <li><a href="#"><img src="images/question-003.png" width="55px" /></a></li>
                        <li><a href="#"><img src="images/question-004.png" width="55px" /></a></li>
                        <li><a href="#"><img src="images/question-005.png" width="55px" /></a></li>
                        <li><a href="#"><img src="images/question-006.png" width="55px" /></a></li>
                    </ul>
                </div>
                <div className="Raccoon"><img src="images/question-007.png" width="477px" height="393px" /></div>

            </div>     
            </div>


    );


}
export default Question;