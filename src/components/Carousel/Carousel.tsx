import React from "react";
import * as s from "./Carousel.styled";
import testImage1 from "../../assets/images/testItem1.png";
import testImage2 from "../../assets/images/testImage2.png";
import testImage3 from "../../assets/images/testImage3.png";
import PaginationArrows from "../PaginationArrows";

interface CarouselI {
  title: string;
}

const testData = [
  {
    id: "1",
    name: "Сукня комбінація",
    tag: "New",
    price: "100",
    url: testImage1,
  },
  {
    id: "2",
    name: "Сукня комбінація",
    tag: "New",
    price: "100",
    url: testImage2,
  },
  {
    id: "3",
    name: "Сукня комбінація",
    tag: "New",
    price: "100",
    url: testImage3,
  },
];

const Carousel: React.FC<CarouselI> = ({ title }) => {
  return (
    <>
      <s.Head>
        <s.Title>{title}</s.Title>
        <PaginationArrows />
      </s.Head>

      <s.Container>
        {testData.map((item) => (
          <s.Card key={item.id}>
            <s.WrapperProportion>
              <s.WrapperProportionInner>
                <s.Image src={item.url} />
              </s.WrapperProportionInner>
            </s.WrapperProportion>
            <s.Tag>{item.tag}</s.Tag>
            <s.Name>{item.name}</s.Name>
            <s.Price>₴ {item.price}</s.Price>
          </s.Card>
        ))}
      </s.Container>
    </>
  );
};

export default Carousel;
