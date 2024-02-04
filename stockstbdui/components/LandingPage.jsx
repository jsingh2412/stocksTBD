import React from "react";

const LandingPage = () => {
  return (
    <div className="h-screen">
      <div className="h-1/3">
        <div
          className="w-full h-full bg-cover relative"
          style={{
            backgroundImage: 'url("/assets/images/manworking.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center 61%",
          }}
        >
          <div className="bg-black w-full h-full opacity-50 "></div>
          <div className="basic_text_italic absolute inset-0 flex  flex-col justify-center items-center">
            <h1>stocksTBD</h1>
            <p>daily stock price predictions</p>
            <button className="bg-red-200">Join</button>
          </div>
        </div>
      </div>
      <div className="bg-primary-green h-1/5 flex justify-center items-center">
        Daily Predictions
      </div>
      <div className="h-4/5">
        S&P 500
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="bg-secondary-green h-3/5">Our Misson</div>
      <div
        className="h-3/5"
        style={{
          backgroundImage: 'url("/assets/images/phone.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center 61%",
        }}
      >
        Stay Updated
      </div>
      <div className="bg-primary-green h-1/5 ">Footer</div>
    </div>
  );
};

export default LandingPage;
