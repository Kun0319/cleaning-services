import "./order.css";

const ContactCard = () => {
    return (
            <dialog open class="card">
                <img src="images/orderStaff.png" alt="" />
                <div class="card-text">
                    <p>聯絡負責人：李大媽</p>
                    <p>聯絡電話：0912345678</p>
                    <p>聯絡信箱: 123@gmail.com</p>
                </div>
            </dialog>
    );
}

export default ContactCard;