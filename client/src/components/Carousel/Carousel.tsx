import React, { useState } from "react";
import ItemCard from "../ItemCard";
import * as s from "./Carousel.styled";
import PaginationArrows from "../PaginationArrows";
import Button from "../Button";
import { ProductI } from "../../types";

interface CarouselI {
  title: string;
  step?: number;
  items: ProductI[];
}

const Carousel: React.FC<CarouselI> = ({ title, step = 3, items = [] }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

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

  const dataToShow = showAll
    ? items
    : items.slice(startIndex, startIndex + step);

  return (
    <>
      <s.Head>
        <s.Title>{title}</s.Title>
        {!showAll && (
          <PaginationArrows
            next={showNext}
            prev={showPrev}
            disabledNext={isDisabledNext()}
            disabledPrev={isDisabledPrev()}
          />
        )}
      </s.Head>

      <s.Container step={step}>
        {dataToShow.map((item: ProductI) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </s.Container>
      {!showAll && (
        <Button
          customMargin="50px auto 0 auto"
          onClick={() => setShowAll(true)}
          title="Show All"
        />
      )}
    </>
  );
};

export default Carousel;
