import React from "react";

const LandingPage = () => {
  return (
    <div className="h-screen">
      <div className="h-1/2">
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
            <h1 className="text-9xl sm:text-11xl">stocksTBD</h1>
            <p>daily stock price predictions</p>
            <button className="bg-primary-gray p-3 pl-5 pr-5 basic_text_black text-lg mt-2 text-center">
              Join
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-primary-green h-1/5 flex justify-center items-center text-7xl basic_text">
        Daily Predictions
      </div> */}
      <div className="text-7xl sm:text-9xl basic_text_black flex flex-col justify-center items-center">
        <div className="items-begin w-full pl-4">S&P 500</div>
        <div
          className="grid grid-cols-3 gap-4 w-1/2"
          style={{ gridAutoRows: "auto" }}
        >
          <div className="col-span-1 flex justify-center items-center flex-grow">
            <img
              className="h-1/2"
              src="/assets/images/apple-logo.svg"
              alt="apple logo"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center flex-grow">
            <img
              className="h-1/2"
              src="/assets/images/amazon-logo.svg"
              alt="amazon logo"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center flex-grow">
            <img
              className="h-1/2"
              src="/assets/images/meta-logo.svg"
              alt="meta logo"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center flex-grow">
            <img
              className="h-1/2"
              src="/assets/images/Microsoft-logo.svg"
              alt="Microsoft logo"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center flex-grow">
            <img
              className="h-1/2"
              src="/assets/images/apple-logo.svg"
              alt="apple logo"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center flex-grow">
            <img
              className="h-1/2"
              src="/assets/images/amazon-logo.svg"
              alt="amazon logo"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center flex-grow">
            <img
              className="h-1/2"
              src="/assets/images/meta-logo.svg"
              alt="meta logo"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center flex-grow">
            <img
              className="h-1/2"
              src="/assets/images/meta-logo.svg"
              alt="meta logo"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center flex-grow">
            <img
              className="h-1/2"
              src="/assets/images/amazon-logo.svg"
              alt="amazon logo"
            />
          </div>
        </div>
      </div>
      <div className="bg-secondary-green text-7xl sm:text-9xl basic_text">
        <div className="pl-4">Our Mission</div>
        <div className="sm:text-7xl p-20">
          Our mission is to provide accurate stock predictions on the S&P 500
          daily. We want to help make people well informed decision with the
          latest prices, news stories, and estimates.
        </div>
      </div>

      <div className="h-3/5">
        <div
          className="w-full h-full bg-cover relative"
          style={{
            backgroundImage: 'url("/assets/images/phone.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center 61%",
          }}
        >
          <div className="bg-black w-full h-full opacity-50 "></div>
          <div className="basic_text_italic absolute inset-0 flex  flex-col justify-center items-center">
            <h1 className="text-9xl sm:text-11xl">Stay Updated</h1>
            <p>Join our text message club to get daily updates!</p>
          </div>
        </div>
      </div>
      <div className="bg-primary-green h-1/5 flex justify-center items-center basic_text">
        ©stocksTBD
      </div>
    </div>
  );
};

export default LandingPage;
