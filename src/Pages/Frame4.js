import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Frame4() {
  const [currentPage, setCurrentPage] = useState(3);
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/Register");
  };

  const handleSkipPage = () => {
    navigate("/Register");
  };

  return (
    <div className="frame-container">
      <img
        src="https://s3-alpha-sig.figma.com/img/c0ac/c21b/f3add2e4763d0da0aecf3d16e43b86ed?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DWXAlLXsoTr572D6mF2TVYPAWkrdCSuzv2xjvRrz7GW0HRK~LLEaZ6Y~aWtBnn41lhHCMedGeQJil9ffePLVkZkZ053ImC1jcQSHIUg-uMYc6ArpDITKqYQAiCxmxBqGEBTVJRkfZOnjuBHUteWvxPvtjZu6OD~QLh8BTN4lIUWyGD1XE9Y467DygdkB01AWwzQbKxK5Cyj6cUPfMKBgBQosInPglvu2kTrrBkmZVLUUlE3sNsx3fvsB3Gyq9qOpycb5bMfsHgMdSro7XkPRSK4Q9eTU6EcNb-DLbVK7b14GTPA5pqVil5wMJ3SZ~huCFiSeI35NKSz4iLMiBT0njA__"
        alt=""
        className="frame-img"
      />
      <div className="circle">
        <div className="text-container">
          <h1>
            Best Services For
            <br /> Your Home
          </h1>
          <p>
            Homecare is health care provided by a professional
            <br /> caregiver in the individual home.
          </p>
        </div>
        <div className="pagination">
          <div className={`dot ${currentPage === 1 ? "active" : ""}`}></div>
          <div className={`dot ${currentPage === 2 ? "active" : ""}`}></div>
          <div className={`dot ${currentPage === 3 ? "active" : ""}`}></div>
        </div>
        <div className="button-container">
          <button className="next-button" onClick={handleNextPage}>
            Next
          </button>
          <button className="skip-button" onClick={handleSkipPage}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}

export default Frame4;
