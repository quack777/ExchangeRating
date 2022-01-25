import React from "react";
import "./MainPage.css";
import CaculateFirst from "../../components/CalculateFirst/CalculateFirst";
import CalculateSecond from "../../components/CalculateSecond/CalculateSecond";

const MainPage = () => {
  return(
    <div className="container">
      {/* <CaculateFirst /> */}
      <CalculateSecond />
    </div>
  )
}

export default MainPage;