import React from "react";
import Navbar from "./Navbar";
import DisplaySortData from "./DisplaySortData";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="contentData">
        <div className="divclass">
          <img src="../images/bgimg.jpg" alt="Yoga" />

          <h2>Discover Your Inner Peace</h2>

          <h5>
            Join us for a series of wellness retreats designed to help you find
            tranquility and rejuvenation
          </h5>
        </div>

        <div>
          <DisplaySortData />
        </div>
      </div>
    </>
  );
};

export default App;
