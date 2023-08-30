import React from "react";
import './Accepting.css';
import Navbar from '../navbar';
import Footer from '../Footer';
const Accepting = () => {
    return (
    
        <div>
            < Navbar />
            <div class="row Accepting-img">
                <div class="col-2"><img src="images/Accepting-001.png" width="" /></div>
                <div class="col-2"><img src="images/Accepting-002.png" width="" /></div>
                <div class="col-2"><img src="images/Accepting-003.png" width="" /></div>
                <div class="col-2"><img src="images/Accepting-004.png" width="" /></div>
                <div class="col-2"><img src="images/Accepting-005.png" width="" /></div>
                <div class="col-2"><img src="images/Accepting-006.png" width="" /></div>
            </div>

            <div className="container Accepting">
                <h3 className="Accepting-title">服務項目 Service Area</h3>
                <img src="images/flower.png" alt="flower" />
                <p>浣熊管家提供全面的居家清潔服務，涵蓋臥室、廚房、客廳、陽台及廁所等各個空間。我們的派遣員工擁有多年清潔經驗，專業且可信賴。無論是深入清潔、地面打掃還是家具擦拭，我們都能精心照料，確保您的居所煥然一新，營造舒適的生活環境。以浣熊管家的服務，您將享受到高品質的家居環境，讓您的家始終保持整潔明亮。</p>

                <div><h3 className="Accepting-title">服務流程 Service Area</h3>
                    <img src="images/flower.png" alt="flower" /></div>

                <div className="Accepting-form">
                    <ul>
                        <li><img src="images/Accepting-img.png" /></li>
                        <li></li>
                        <li><h3>填寫表單</h3></li>
                        <li className="Accepting-text">依照需求填寫申請</li>
                    </ul>
                    <ul>
                        <li className="Accepting-li ">_____________</li>
                    </ul>
                    <ul>
                        <li><img src="images/Accepting-img.png" /></li>
                        <li></li>
                        <li><h3>到府清潔</h3></li>
                        <li className="Accepting-text">專員到府開始清潔</li>
                    </ul>
                    <ul>
                        <li className="Accepting-li">_____________</li>
                    </ul>
                    <ul>
                        <li><img src="images/Accepting-img.png" /></li>
                        <li></li>
                        <li><h3>服務驗收</h3></li>
                        <li className="Accepting-text">清潔完畢檢查驗收</li>
                    </ul>
                </div>

                <div class="Accepting-fee"><h3 className="Accepting-title">服務費用 Service Area</h3>
                    <img src="images/flower.png" alt="flower" />
                    <p>每小時 500元  優惠()</p>
                </div>


            </div>
           
                <Footer />
        </div>




    );


}
export default Accepting;
