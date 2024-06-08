import logo from './logo.svg';
import { BrowserRouter , Route, Routes} from "react-router-dom";
import './App.css';
import Logo from './Pages/Logo';
import Frame2 from './Pages/Frame2';
import Frame3 from './Pages/Frame3';
import Frame4 from './Pages/Frame4';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';
import OtpPage from './Pages/OtpPage';
import SelectLanguage from './Pages/SelectLanguage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Logo/>} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/frame2" element={<Frame2 />} />
          <Route path="/frame3" element={<Frame3 />} />
          <Route path="/frame4" element={<Frame4 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/otppage" element={<OtpPage/>} />
          <Route path="/selectlanguage" element={<SelectLanguage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
