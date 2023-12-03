//a new landing page for users to learn about the company
//before jumping into the dashboard.
import React from "react";
import './home.css';
//basic template for the page for now, unsure of what we want here
//possibly meet the team with cards for each of us?
const Home = () => {
  return (
    <div>
        <div className="header">
        <h1>The future of stock trading</h1>
        <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p1>
        </div>
        <div className="aboutContainer">
        <h1>About Us</h1>
        <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p1>
        </div>
        <div className="joinContainer">
        <h1>Join Now!!!</h1>
        <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p1>
        </div>
    </div>
  );
};

export default Home;