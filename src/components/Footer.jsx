import React from "react";

const Footer = () => {
    return (<footer class="team">
        <div class="footer-img">
            <img src="./images/go.png"/>

            <div>
                <ul class="footer-icon">
                    <li><a href="#"><img src="./images/1.png"/></a></li>
                    <li><a href="#"><img src="./images/2.png"/></a></li>
                    <li><a href="#"><img src="./images/3.png"/></a></li>
                    <li><a href="#"><img src="./images/4.png"/></a></li>
                </ul>
            </div>
        </div>

        <div class="item">

            <ul>
                <li class="colo" >Navigation</li>
                <br/>
                <li><a href="#" class="footer-a">公司介紹</a></li>
                <li><a href="#" class="footer-a">服務項目</a></li>
                <li><a href="#" class="footer-a">案例分享</a></li>
                <li><a href="#" class="footer-a">常見問題</a></li>
            </ul>


            <ul>
                <li class="colo">Quick Links</li>
                <br/>
                <li><a href="#" class="footer-a">隱私權政策</a></li>
                <li><a href="#" class="footer-a">加入我們</a></li>
            </ul>


            <ul>
                <li class="colo">Contact Info</li>
                <br />
                <li><img src="./images/5.png"/></li>
                <li><img src="./images/6.png"/></li>
                <li><img src="./images/7.png"/></li>
            </ul>

        </div>

    </footer>
    );
};
    export default Footer;