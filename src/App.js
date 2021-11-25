import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninScreen from "./Screens/SigninScreen";
import SignupScreen from "./Screens/SignupScreen";


import Slidebar from "./components/layout/Slidebar";
import Main from "./components/Main";
import Mainnav from "./components/layout/Mainnav";
import Footer from "./components/layout/Footer";
import Textract from "./Screens/Textract";
function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="layer" />
        <Routes>
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
      
        </Routes>
        <a className="skip-link sr-only" href="#skip-target">
          Skip to content
        </a>

        <div className="page-flex">
          <Slidebar />
          <div className="main-wrapper">
            <Mainnav />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/textract" element={<Textract />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
