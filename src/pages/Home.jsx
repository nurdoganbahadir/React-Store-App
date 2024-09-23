import React from "react";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <Stats />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
