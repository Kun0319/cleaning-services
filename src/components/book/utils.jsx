import axios from "axios";

export const scroll = () => {
  document.body.classList.add("smooth");
  window.scrollBy(0, 150);
};

export const sendVeriCode = (userMail) => {
  axios
    .post("http://localhost:4107/book/send-vericode", { userMail }) // mail參數
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
};

export const checkVeriCode = (code, userMail) => {
  axios
    .post("http://localhost:4107/book//varify-code", { code, userMail }) // code mail參數
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });

}
