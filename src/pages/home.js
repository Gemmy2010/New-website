import React from "react";
import Banner from "../components/HomePage/Banner";
import Features from "../components/HomePage/Features";
import Vision from "../components/HomePage/Vision";
import Mission from "../components/HomePage/Mission";
import Team from "../components/HomePage/Team";
import Contact from "../components/HomePage/Contact";


const Home = () => {
  return (
    <>
      <Banner />
      <Features title="lock" />
      <Vision />
      <Mission />
      <Team />
      <Contact />
     
      
    </>
  );
};

export default Home;
