import "./order.css";

function ContactCard() {
  return (
    <div>
      <table className="contact-table">
        <tr>
          <td>
            <img src="images/orderStaff.png" alt="" className="contact-image" />
          </td>
          <td>
            <p>聯絡負責人：李大媽</p>
            <p>聯絡電話：0912345678</p>
            <p>聯絡信箱: 123@gmail.com</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ContactCard;