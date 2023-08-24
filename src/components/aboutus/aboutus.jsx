import React from "react";
import './aboutus.css';

const Aboutus = () => {
    return (
        <div>
            <div className="conatainer">
                <h3>公司介紹 HISTORY</h3>
                <img src="public/images/flower.png" alt="flower"></img>
                <p>浣熊管家清潔公司於2023年成立，由六位充滿活力的年輕創辦人發起，專為忙碌的上班族量身打造。我們以可愛浣熊形象為特色，致力於提供高品質清潔服務，讓您的家環境煥然一新。讓浣熊管家成為您信賴的伙伴，帶來整潔舒適的生活，讓您專注於更重要的事務。</p>

            </div>

            <div className="carditem">
                <div className="card">
                    <h3 className="title1">專業團隊</h3>
                    <img src="public/images/aboutus-001.png"></img>
                    <p>我們擁有專業團隊，經驗豐富且熟練，致力於提供卓越清潔服務，確保您的家環境潔凈無比</p>
                </div>
                <div className="card">
                    <h3 className="title2">細心負責</h3>
                    <img src="public/images/aboutus-002.png"></img>
                    <p>細心負責，徹底清潔每個角落，從細微之處展現專業，確保您的居所煥然一新，舒適無比</p>
                </div>
                <div className="card">
                    <h3 className="title3">即時回復</h3>
                    <img src="public/images/aboutus-003.png"></img>
                    <p>我們以即時快速回覆為信念，隔天即為您掃清潔，確保您的需求得到優先處理，讓居家生活無憂</p>
                </div>

            </div>

            <div className="serviceArea">
                <h3>服務地區 Service Area</h3>
                <img src="public/images/flower.png" alt="flower"></img>
                <div className="content">
                    <div><img src="public/images/aboutus-004.png"></img></div>
                    <div><p>台中市全區皆可預約，
                        預約後，師傅將於選擇日期抵達您的宅邸，不需另外收取工人費或樓層費等費用、價格保證公開透明 !！</p></div>
                </div>

            </div>

            <div className="location">
                <h3>地點 Location</h3>
                <img src="public/images/flower.png" alt="flower"></img>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.4184949785486!2d120.63260162534858!3d24.157051678395053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dc6f8bd1971%3A0xf7ce6c40c06fb76!2z5Lit6I-v6Zu75L-h6KiT57e05omA57ac5ZCI5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1692776380122!5m2!1szh-TW!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="socialmedia">
                        <ul>
                            <li class="colo">聯絡資訊</li>
                            <br />
                            <li><img src="./images/5.png" /></li>
                            <li><img src="./images/6.png" /></li>
                            <li><img src="./images/7.png" /></li>
                        </ul>
                    </div>
                </div>


            </div>

        </div>

    );


}


export default Aboutus;