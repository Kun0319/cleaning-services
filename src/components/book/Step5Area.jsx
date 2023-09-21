import React from "react";

const Step5Area = ({ formData, setFormData }) => {
  return (
    <div
      className="book-step1 flex-column align-items-center container "
      id="book-step5"
    >
      <div id="book5-top">
        <i className="bi bi-check-circle me-2"></i>
        <h5>預約完成！</h5>
      </div>
      <p className="mt-2 fs-5">我們將於 2023/8/23 星期三 13:00 開始為您服務!</p>
      <div id="book5-bottom">
        <img src="/images/raccoon-salute.gif" alt="raccoon" />
      </div>
    </div>
  );
};

export default Step5Area;
