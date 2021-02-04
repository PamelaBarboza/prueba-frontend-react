import React from 'react'
import NavBar from "./components/navBar/NavBar"
import Carousel from "./components/carousel/Carousel"
import BestSellers from "./components/bestSellers/BestSellers";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <BestSellers />
    </div>
  );
}

export default App
