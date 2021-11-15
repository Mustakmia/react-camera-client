import React from "react";
import { Accordion } from "react-bootstrap";
import Appbar from "../../Shared/Appbar/Appbar";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import HomeService from "../HomeService/HomeService";
import Review from "../Review/Review";

const Home = () => {
  return (
    <>
      <Appbar></Appbar>
      <Banner></Banner>
      <HomeService></HomeService>
      <Accordion />
      <Review></Review>
      <Footer></Footer>
    </>
  );
};

export default Home;
