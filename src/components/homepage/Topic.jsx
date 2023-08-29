import React from "react";

const Topic = () => {
    return (
        <div className="Topic-team">
            <div className="dr">
                <ul>
                    <li style={{ fontSize: "35px"}}>
                        321+
                    </li>
                    <li>Happy Customers</li>

                </ul>
                <ul>
                    <li>
                        <p>|</p>
                    </li>

                </ul>
                <ul>
                    <li style={{ fontSize: "35px" }}>
                        30
                    </li>
                    <li>Team Members</li>

                </ul>
                <ul>
                    <li>
                        <p>|</p>
                    </li>
                </ul>
                <ul><li style={{ fontSize: "35px" }}>8</li>
                    <li>Award Winning</li>
                </ul>
                <ul>
                    <li>
                        <p>|</p>
                    </li>
                </ul>
                <ul>
                    <li style={{ fontSize: "35px" }}>100+</li>
                    <li> Project Complete</li>
                </ul>

            </div>
            <div className="reserve">
                <p>立即了解預約</p>
                心動不如馬上行動，趕快讓浣熊管家陪伴您有個乾淨的家 !
                <br />
                <br />
                <br />
                <a href="/book/"><button className="inp">立即預約</button></a>
            </div>
        </div>
    );
};
export default Topic;