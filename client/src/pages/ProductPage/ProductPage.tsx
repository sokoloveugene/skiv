import React, { useState } from "react";
import styled from "styled-components";
import ProportionWrapper from "../../components/ProportionWrapper";
import { Divider } from "../../ui/ui.styled";
import Carousel from "../../components/Carousel";
import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";
import image1 from "../../assets/images/testImage1.png";
import image2 from "../../assets/images/testImage2.png";
import image3 from "../../assets/images/testImage3.png";
import { WishNotActive } from "../../assets/icons";
import { colors } from "../../consts/colors";
import Currency from "../../components/Currency";
import DropDown from "../../components/DropDown";
import SelectSize from "../../components/SelectSize";
import NotificationPortal from "../../components/NotificationPortal/NotificationPortal";

const SideImage = styled.img<{ active?: boolean }>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: ${(props) => (props.active ? "" : "grayscale(60%)")};
  opacity: ${(props) => (props.active ? 1 : 0.8)};
`;

const MainImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  max-height: 770px;
`;

const RightContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-left: 84px;
`;

const PreviewContainer = styled.ul`
  list-style: none;
  margin-right: 84px;
  max-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  overflow-x: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

const PreviewListItem = styled.li`
  height: 94px;
  width: 89px;
  margin-bottom: 12px;
`;

const ProductTitle = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: ${colors.brown};
  margin-bottom: 18px;
`;

const images = [
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
];

const ProductPage: React.FC = () => {
  const [mainUrl, setMainUrl] = useState(image1);

  const handleSelectImage = (e: React.MouseEvent<HTMLImageElement>) => {
    setMainUrl(e.currentTarget.dataset.url || "");
  };

  return (
    <>
      <Breadcrumbs />
      <Container>
        <LeftContainer>
          <PreviewContainer>
            {images.map((url) => (
              <PreviewListItem>
                <SideImage
                  active={mainUrl === url}
                  data-url={url}
                  onClick={handleSelectImage}
                  src={url}
                  alt="product"
                />
              </PreviewListItem>
            ))}
          </PreviewContainer>
          <ProportionWrapper horizontalRation={586} verticatRation={770}>
            <MainImage src={mainUrl} alt="product" />
          </ProportionWrapper>
        </LeftContainer>
        <RightContainer>
          <ProductTitle>Куртка</ProductTitle>
          <Currency customMargin="0px 0px 46px 0px" value={1234} />
          <SelectSize />
          <Button
            customMargin="0px 0px 32px 0px"
            maxWidth="206px"
            onClick={() => null}
            title="Add to cart"
          />
          <Button
            transparent
            customMargin="0px auto 88px 0px"
            customPadding="0px"
            icon={WishNotActive}
            onClick={() => null}
            title="Додати до бажань"
          />

          <DropDown
            title="Склад виробу"
            data={[
              " Довжина виробу: 114 см",
              "Обхват грудей: 124 см",
              "Обхват стегон: 120 см",
              "Довжина рукава: 64 см",
            ]}
          />
          <Divider customMargin="8px 0px 20px 0px" />

          <DropDown
            title="Обміри виробу"
            data={[
              " Довжина виробу: 114 см",
              "Обхват грудей: 124 см",
              "Обхват стегон: 120 см",
              "Довжина рукава: 64 см",
            ]}
          />
        </RightContainer>
      </Container>
      <NotificationPortal open />
      <Divider customMargin="67px 0px 42px 0px" />
      <Carousel title="Вам може сподобатись" items={[]} />
    </>
  );
};

export default ProductPage;
