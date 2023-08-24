import React from 'react';

const ContactCard = () => {
    return (
        <div className="card">
            <img src="images/orderStaff.png" alt="" />
            <div className="card-text">
                <p>聯絡負責人：李大媽</p>
                <p>聯絡電話：0912345678</p>
                <p>聯絡信箱: 123@gmail.com</p>
            </div>
        </div>
    );
}

export default ContactCard;