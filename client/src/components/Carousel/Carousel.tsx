import React, { useState } from "react";
import { ProductReducedI } from "types";
import ItemCard from "../ItemCard";
import PaginationArrows from "../PaginationArrows";
import Button from "../Button";
import * as s from "./Carousel.styled";

interface CarouselI {
  title: string;
  step?: number;
  items: ProductReducedI[];
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
        {!showAll && items.length > step && (
          <PaginationArrows
            next={showNext}
            prev={showPrev}
            disabledNext={isDisabledNext()}
            disabledPrev={isDisabledPrev()}
          />
        )}
      </s.Head>

      <s.Container step={step}>
        {dataToShow.map((item: ProductReducedI) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </s.Container>
      {!showAll && items.length > step && (
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
