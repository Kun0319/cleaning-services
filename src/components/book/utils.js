import axios from "../login/axios";

export const scroll = () => {
  document.body.classList.add("smooth");
  window.scrollBy(0, 150);
};

export const sendVeriCode = () => {
  axios.get('http://localhost:4107/book/send-vericode').then().catch((err) => console.log(err))
}
