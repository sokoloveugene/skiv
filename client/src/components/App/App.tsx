import React, { useEffect, useState } from "react";
// TODO replece fetch logic
import axios from "axios";
import * as s from "./App.styled";
import Header from "../Header";
import Footer from "../Footer";

import Banner from "../Banner";
import { dictionary } from "../../consts/dictionary";
// TODO delete images imports
import imageLeft from "../../assets/images/BannerLeft.png";
import imageRight from "../../assets/images/BannerRight.png";

import Carousel from "../Carousel";

const App: React.FC = () => {
  const [items, setitems] = useState<any>([]);

  return (
    <s.MainContainer>
      <s.GlobalStyle />
      <Header />
      <s.Content>
        <Banner
          imageLeftSrc={imageLeft}
          imageRightSrc={imageRight}
          title={dictionary.bannerTitle}
        />
        <Carousel title="Новинки" items={items} />
      </s.Content>

      <Footer />
    </s.MainContainer>
  );
};

export default App;
