import React from "react";
import * as s from "./App.styled";
import Header from "../Header";
import Footer from "../Footer";

import Banner from "../Banner";
import { dictionary } from "../../consts/dictionary";
import imageLeft from "../../assets/images/BannerLeft.png";
import imageRight from "../../assets/images/BannerRight.png";

import Carousel from "../Carousel";

const App: React.FC = () => {
  return (
    <s.MainContainer>
      <s.GlobalStyle />
      <Header />
      <s.Content>
        <Carousel title="Новинки" />
        <Banner
          imageLeftSrc={imageLeft}
          imageRightSrc={imageRight}
          title={dictionary.bannerTitle}
        />
      </s.Content>

      <Footer />
    </s.MainContainer>
  );
};

export default App;
