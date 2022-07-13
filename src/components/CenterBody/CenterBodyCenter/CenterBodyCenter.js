import React from "react";
import "./CenterBodyCenter.css";

function CenterBodyCenter() {
  return (
    <div className="centerbodycenter mb-5">
      <div className="container centerbodycenterdiv d-flex justify-content-between align-items-center pe-5">
        <div className="centerbodyleft">
          <p className="fs-1 fw-bold mb-2">
            Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin
          </p>
          <p className="mb-2">
            See all avilable assets: Cryptocurrencies and NFT's
          </p>
          <button className="centerbodycenter-btn btn btn-success mb-3 fw-bold">
            See More Coins
          </button>
        </div>
        <div className="d-flex row  row-cols-sm-1 row-cols-md-3 row-cols-lg-4 justify-content-around align-items-center flex-wrap">
          <div className="text-center center-icons ">
            <i className="fs-1 text-warning fa-brands fa-bitcoin"></i>
            <p className="fs-5 fw-bold">Bitcoin</p>
            <p className="bitcoin-money">$19,761.13</p>
            <i className="text-danger fw-bold fs-4 fa-solid fa-arrow-down">
              -3.43%
            </i>
          </div>
          <div className="text-center center-icons ">
            <i class="fa-brands fs-1 text-primary fa-ethereum"></i>
            <p className="fs-5 fw-bold">Ethereum</p>
            <p className="bitcoin-money">$19,761.13</p>
            <i className="text-danger fw-bold fs-4 fa-solid fa-arrow-down">
              -3.43%
            </i>
          </div>
          <div className="text-center center-icons ">
            <i class="fa-solid fs-1 text-success fa-network-wired"></i>
            <p className="fs-5 fw-bold">Tether</p>
            <p className="bitcoin-money">$19,761.13</p>
            <i className="text-danger fw-bold fs-4 fa-solid fa-arrow-down">
              -3.43%
            </i>
          </div>
          <div className="text-center center-icons ">
            <i class="fa-solid fs-1 text-primary fa-sack-dollar"></i>
            <p className="fs-5 fw-bold">USD Coin</p>
            <p className="bitcoin-money">$19,761.13</p>
            <i className="text-danger fw-bold fs-4 fa-solid fa-arrow-down">
              -3.43%
            </i>
          </div>
          <div className="text-center center-icons ">
            <i class="fa-brands fs-1 text-warning fa-airbnb"></i>
            <p className="fs-5 fw-bold">BNB</p>
            <p className="bitcoin-money">$19,761.13</p>
            <i className="text-danger fw-bold fs-4 fa-solid fa-arrow-down">
              -3.43%
            </i>
          </div>
          <div className="text-center center-icons ">
            <i class="fa-solid fs-1 text-warning fa-file-invoice-dollar"></i>
            <p className="fs-5 fw-bold">Binance USD</p>
            <p className="bitcoin-money">$19,761.13</p>
            <i className="text-danger fw-bold fs-4 fa-solid fa-arrow-down">
              -3.43%
            </i>
          </div>
          <div className="text-center center-icons ">
            <i class="fa-brands fs-1 fw-bold fa-xing"></i>
            <p className="fs-5 fw-bold">XRK</p>
            <p className="bitcoin-money">$19,761.13</p>
            <i className="text-danger fw-bold fs-4 fa-solid fa-arrow-down">
              -3.43%
            </i>
          </div>
          <div className="text-center center-icons ">
            <i class="fa-solid fs-1 text-primary fa-menorah"></i>
            <p className="fs-5 fw-bold">Cardano</p>
            <p className="bitcoin-money">$19,761.13</p>
            <i className="text-danger fw-bold fs-4 fa-solid fa-arrow-down">
              -3.43%
            </i>
          </div>
          <div className="text-center center-icons ">
            <i class="fa-brands fs-1 fw-bold fa-lastfm-square"></i>
            <p className="fs-5 fw-bold">Solana</p>
            <p className="bitcoin-money">$19,761.13</p>
            <i className="text-danger fw-bold fs-4 fa-solid fa-arrow-down">
              -3.43%
            </i>
          </div>
          <div className="text-center center-icons ">
            <i class="fa-solid fs-1 text-warning fa-circle-dollar-to-slot"></i>
            <p className="fs-5 fw-bold">Dogecoin</p>
            <p className="bitcoin-money">$19,761.13</p>
            <i className="text-danger fw-bold fs-4 fa-solid fa-arrow-down">
              -3.43%
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenterBodyCenter;
