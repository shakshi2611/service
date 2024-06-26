import React,{useState} from 'react'

function SelectLanguage() {
  const API_BASE_URL = 'https://your-api-base-url.com';
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make an API request to select the language
      const response = await fetch(`${API_BASE_URL}/select-language`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ language: selectedLanguage })
      });
      // Handle response
      console.log(response);
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  return (
    <div className="app">
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
        <div className="title-topic">Select Language</div>
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
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <div className="input-icon" >
              <label htmlFor="phoneNumber">Select Language</label>
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67 2 2 0 0 1 2.18-2h3a2 2 0 0 1 2 1.71 13.71 13.71 0 0 1 3 3 13.71 13.71 0 0 1 3 3 2 2 0 0 1 1.71 2z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="language"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            />
          </div>
          <button type="submit" className="login-button">
            Continue
          </button>
        </form>
        <div className="account-link-forgotpassword">You don't have an account?</div>
        <div className="account-link-forgotpassword">You remember my password!</div>
      </div>
    </div>
  )
}

export default SelectLanguage