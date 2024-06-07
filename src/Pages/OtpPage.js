import React, { useState } from "react";

function OtpPage() {
  const API_BASE_URL = 'https://api.intechnicalservice.com/';
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    // Move to the next input field if the current input is filled
    if (e.target.value.length === 1 && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleConfirm = async () => {
    try {
      // Construct the OTP string from the array
      const otpString = otp.join('');
      
      // Make an API request to verify the OTP
      const response = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ otp: otpString })
      });
      
      // Handle response
      const data = await response.json();
      console.log("OTP confirmation response:", data);
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  return (
    <div className="app-otp">
      <div className="header">
        <div className="back-button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
        </div>
        <div className="title-topic">OTP</div>
        <div className="title">Service Provider</div>
        <div className="subtitle">
          Welcome to the best service provider system!
        </div>
      </div>
      <div className="content">
        <div className="logo-box">
          <img
            src="https://s3-alpha-sig.figma.com/img/7469/6a2c/5bd7e1e3d93d92af33de2ce9fd832514?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KuOu6X8mPfb5iuKY7~ZyfVKX7F~LT4XC5Vwd2pb-gLGVQemEpwlNvgPuMxsIyp1yz~3NVBS3pkdgFENZzrwcYJqbZP0WwnScCgak5zJlYmyLR7ymblTjTOmE40Bn77MCUSwpv-WwlUUuyhYJgKIHNNQ2K8APiQRskFo8kCGIeE97acQSbE5dM0i-UYeWOyzEz4~0D4RkGKXofodjBsxK7qzUVcJyLyj3T6mCVmw4mcR3R2ara6BOUfXbwkTkNyM-0K-YhyAlfEMLi9~c0qJJY4UPpvKOxd5f55ayV2w8It86pvfzLUqHWZcb1A-gkyPgDwiV6txZtA3O0YxYUehZ8A_"
            alt="Logo"
            className="logo-image"
          />
        </div>
        <form>
          <div className="otp-inputs">
            <h3>OTP Verification Code</h3>
            <p>
              We have sent the verification <br /> code to your phone number
            </p>
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                value={value}
                onChange={(e) => handleOtpChange(e, index)}
                placeholder=" "
                maxLength={1}
                id={`otp-${index}`}
              />
            ))}
          </div>
          <button className="login-button" onClick={handleConfirm}>
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpPage;
