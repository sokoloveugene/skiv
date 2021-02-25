import React from "react";
import Carousel from "../../components/Carousel";

// TODO delete images imports
import imageLeft from "../../assets/images/BannerLeft.png";
import imageRight from "../../assets/images/BannerRight.png";
import Banner from "../../components/Banner";
import { dictionary } from "../../consts/dictionary";
import { testProducts } from "../../mockData";

const HomePage: React.FC = () => {
  return (
    <>
      <Banner
        imageLeftSrc={imageLeft}
        imageRightSrc={imageRight}
        title={dictionary.bannerTitle}
      />
      <Carousel title="Новинки" items={testProducts} />
    </>
  );
};

export default HomePage;
