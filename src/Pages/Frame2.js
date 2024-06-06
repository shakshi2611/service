import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Frame2() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
      navigate("/frame3");
    } else {
      navigate("/Register");
    }
  };

  const handleSkipPage = () => {
    navigate("/Register");
  };

  return (
    <div className="frame-container">
      <img
        src="https://s3-alpha-sig.figma.com/img/58c0/bde1/9a95e58d1f650946ef23bdfe0c74bc48?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AH4aFrI39L4VkabFXbxoo4XO8lNQAXcXuSCjUe-ucLydsewhNgQaNoMBQCUWzTDGBba-rB91UTeCPOkHFNzM3Eu9BIeIDgY184nKCtP89f~FzpebMDZmydWb~tf9fZNQMC1Ofe0pTbY34AjHwutsUnj7YCmc3JjPuatWTXrEy5L9CQl4HIkW2-fZqrbNjWe-lEUzoQ7ZQQ0ikHq~veOxDHpdZm9Yx7nQhQAlD7MHdIARMtscpJmiL0FqpraI4KPt93cpr2-F8nVp-6~2OZTkc9JXCHc7MNy8vLccb97PjDDvLhpIBu4E7RknscHXejcXAfqUBfMcpYGs0UDRmuO6OA"
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
          {currentPage < 3 && (
            <button className="next-button" onClick={handleNextPage}>
              Next
            </button>
          )}
          {currentPage < 3 && (
            <button className="skip-button" onClick={handleSkipPage}>
              Skip
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Frame2;
