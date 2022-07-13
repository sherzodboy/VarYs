import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer py-5">
      <div className="container d-flex justify-content-between flex-wrap ">
        <div className="display-3 footer-logo fw-bold">
          Var<span className="text-success">Ys</span>
        </div>
        <div className="footer-div">
          <h3 className="fw-bold mb-5">Support</h3>
          <div className="line mb-3"></div>
          <p className="fs-5">Contact us</p>
          <p className="fs-5">Chat</p>
          <p className="fs-5">Help Center</p>
          <p className="fs-5">FAQ</p>
        </div>
        <div className="footer-div">
          <h3 className="fw-bold mb-5">Developers</h3>
          <div className="line mb-3"></div>
          <p className="fs-5">Cloud</p>
          <p className="fs-5">Commerce</p>
          <p className="fs-5">Pro</p>
          <p className="fs-5">Api</p>
        </div>
        <div className="footer-div">
          <h3 className="fw-bold mb-5">Company</h3>
          <div className="line mb-3"></div>
          <p className="fs-5">About</p>
          <p className="fs-5">Information</p>
          <p className="fs-5">Legal</p>
          <p className="fs-5">Privacy</p>
        </div>
        <div className="footer-div">
          <h3 className="fw-bold mb-5">Support</h3>
          <div className="line mb-3"></div>
          <p className="fs-5">
            <i class="fa-brands fa-facebook"></i>
          </p>
          <p className="fs-5">
            <i class="fa-brands fa-twitter"></i>
          </p>
          <p className="fs-5">
            <i class="fa-brands fa-linkedin"></i>
          </p>
          <p className="fs-5">
            <i class="fa-brands fa-github"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
