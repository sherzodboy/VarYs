import React from "react";
import "./CenterBodyTop.css";
import LaptopImg from "./image/laptop.jpg";

function CenterBodyTop() {
  return (
    <div className="container">
      <div className="center my-5 d-flex justify-content-around align-items-center flex-wrap">
        <div className="center-left">
          <p className="center-left-text">
            Buy & Sell Crypto 24?7 using your retirement account
          </p>
          <p className="center-text">
            Invest in <br></br> Cryptocurreny with <br></br> Your IRA
          </p>
          <p>Buy, Sell and store hundreds of cryptocurrenies</p>
          <form className="d-flex mt-3 justify-content-start align-items-center">
            <input
              className="center-form-input"
              placeholder="Enter your email"
            />
            <button className="center-form-btn fw-bold text-center btn btn-success">
              Learn More
            </button>
          </form>
        </div>
        <div>
          <img className="laptop-img" src={LaptopImg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default CenterBodyTop;
