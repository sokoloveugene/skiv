import React, { useEffect, useState } from "react";
import { dictionary } from "consts/dictionary";
import { ProductI } from "types";
import { getAllProducts } from "api/productsApi";
import Carousel from "components/Carousel";

// TODO delete images imports
import imageLeft from "assets/images/BannerLeft.png";
import imageRight from "assets/images/BannerRight.png";
import Banner from "components/Banner";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<ProductI[]>([]);

  useEffect(() => {
    getAllProducts(setProducts);
  }, []);

  return (
    <>
      <Banner
        imageLeftSrc={imageLeft}
        imageRightSrc={imageRight}
        title={dictionary.bannerTitle}
      />
      <Carousel title="Новинки" items={products} />
    </>
  );
};

export default HomePage;
