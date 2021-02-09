import React from "react";
import * as s from "./Banner.styled";

interface BannerI {
  imageLeftSrc: string;
  imageRightSrc: string;
  title: string;
}

const Banner: React.FC<BannerI> = ({ imageLeftSrc, imageRightSrc, title }) => {
  return (
    <s.Container>
      <s.ImageBanner src={imageLeftSrc} alt="image left" />
      <s.ImageBanner src={imageRightSrc} alt="image right" />
      <s.Title>{title}</s.Title>
    </s.Container>
  );
};

export default Banner;
