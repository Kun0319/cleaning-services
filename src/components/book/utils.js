import axios from "../login/axios";

export const scroll = () => {
  document.body.classList.add("smooth");
  window.scrollBy(0, 150);
};

export const sendVeriCode = () => {
  axios
    .post("http://localhost:4107/book/send-vericode") // mail參數
    .then(() => {}) // 倒數秒數
    .catch((err) => {
      console.log(err);
    }); // 發信失敗提示
};
