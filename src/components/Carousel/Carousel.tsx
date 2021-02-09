import React, { useState } from "react";
import * as s from "./Carousel.styled";
import testImage1 from "../../assets/images/testItem1.png";
import testImage2 from "../../assets/images/testImage2.png";
import testImage3 from "../../assets/images/testImage3.png";
import PaginationArrows from "../PaginationArrows";

interface CarouselI {
  title: string;
  step?: number;
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
  {
    id: "4",
    name: "Сукня комбінація",
    tag: "New",
    price: "200",
    url: testImage1,
  },
  {
    id: "5",
    name: "Сукня комбінація",
    tag: "New",
    price: "300",
    url: testImage3,
  },
];

const Carousel: React.FC<CarouselI> = ({ title, step = 3 }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [items, setItems] = useState(testData);
  const [startIndex, setStartIndex] = useState(1);

  const showNext = () => {
    if (startIndex + step < items.length) {
      setStartIndex((p) => p + 1);
    }
  };

  const showPrev = () => {
    if (startIndex !== 0) {
      setStartIndex((p) => p - 1);
    }
  };

  const isDisabledNext = (): boolean => {
    return startIndex + step === items.length;
  };

  const isDisabledPrev = (): boolean => {
    return startIndex === 0;
  };

  return (
    <>
      <s.Head>
        <s.Title>{title}</s.Title>
        <PaginationArrows
          next={showNext}
          prev={showPrev}
          disabledNext={isDisabledNext()}
          disabledPrev={isDisabledPrev()}
        />
      </s.Head>

      <s.Container step={step}>
        {items.slice(startIndex, startIndex + step).map((item) => (
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
