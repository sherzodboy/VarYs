import React from "react";
import "./CenterBodyBottom.css";
import IphoneImg from "./iphone.png";

function CenterBodyBottom() {
  return (
    <div className="container d-flex justify-content-around flex-wrap align-items-center">
      <div>
        <img className="iphoneimg" src={IphoneImg} alt="img" />
      </div>
      <div className="centerbottomform">
        <h3 className="fs-1 fw-bold">Earn passive incom with crypto.</h3>
        <p className="mb-4">
          Earn up to 12% annual rewards on 30+ digital assets. Simply hold your
          assets in the app to automatically earn rewards at the end of each
          month with no lockups and no limits.
        </p>
        <form className="d-flex justify-content-start align-items-center">
          <input
            className="me-5 p-2 fw-bold centerbtninput"
            text="email"
            placeholder="Enter your email"
          />
          <button className="btn btn-success text-center centerbtnbtn  fw-bold">
            Learn More
          </button>
        </form>
      </div>
    </div>
  );
}

export default CenterBodyBottom;
