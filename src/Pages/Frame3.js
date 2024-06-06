import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";


function Frame3() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
      navigate("/frame4");
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
        src="https://s3-alpha-sig.figma.com/img/5214/ecd1/f724a8a09f0e90d5bb410f67d7838a39?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p8qD-3gMIyo7k8NJjz~-enZN8afK2oySOJCaRDt14eqmQSkQPQ~DlVlqx~pqWEzf4ecf7KiRdb5n8-I~Aw5Xq~TClQdJgXgPlQXoDm9AsZYmxpOTsCW6JerCpgSw-IVzCP2z552vMsW8tWS6HEW4lPlj7i4r2FVmHjR9ruue1VFUHY~vf15-hy9xBMQs5ACiM8a1EJHijBlp9R5Fmtj4DgEB3DvmSavM8W9uz~Fz0OLqYH2F4EbfbkNgMuYiufS-dGJqe9wM86YGS6LLS9yy7-7KitFhUhLjue~dJ5iRLyv8~QilddulP~2hdJjSZF-DnTJm26u01X1YHxYzpvdG8A__"
        alt=""
        className="frame-img"
      />
      <div className="circle">
        <div className="text-container">
          <h1>Best Services For<br/> Your Home</h1>
          <p>
            Homecare is health care provided by a professional<br/> caregiver in the
            individual home.
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
  )
}

export default Frame3