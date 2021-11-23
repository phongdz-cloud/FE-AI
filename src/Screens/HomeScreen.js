import React from "react";
import Slidebar from "../components/layout/Slidebar";
import Footer from "../components/layout/Footer";
import Mainnav from "../components/layout/Mainnav";
import Main from "../components/Main";
function HomeScreen() {
  return (
    <>
      <div>
        <div className="layer" />
        {/* ! Body */}
        <a className="skip-link sr-only" href="#skip-target">
          Skip to content
        </a>
        <div className="page-flex">
          {/* ! Sidebar */}
          <Slidebar />
          <div className="main-wrapper">
            {/* ! Main nav */}
            <Mainnav />
            {/* ! Main */}
            <Main />
            {/* ! Footer */}
            <Footer />
          </div>
        </div>
        {/* Chart library */}
      </div>
    </>
  );
}

export default HomeScreen;
