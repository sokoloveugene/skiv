import React, { useCallback, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { parseQuery } from "helpers/parseQuery";
import useOutsideAction from "hooks/useClickOutside";
import { Sort, ArrowDown } from "assets/icons";
import * as s from "./SortSelector.styled";

interface SortOptionI {
  title: string;
  query: string;
}

const options: Array<SortOptionI> = [
  { title: "Новi надходження", query: "date" },
  { title: "Цiна, Висока", query: "price-high" },
  { title: "Цiна, Низька", query: "price-low" },
];

const SortSelector: React.FC = () => {
  const { search } = useLocation();
  const history = useHistory();

  const getInitialOption = () => {
    const query = parseQuery(search, "sortBy") || "date";
    return options.find((opt) => opt.query === query) || options[0];
  };

  const [selectedOption, setSelectedOption] = useState<SortOptionI>(
    getInitialOption
  );

  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const [contentRef] = useOutsideAction(handleClose);

  const handleChangeOption = (option: SortOptionI) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("sortBy", option.query);

    history.push({
      pathname: "/catalog",
      search: searchParams.toString(),
    });

    setSelectedOption(option);
    handleClose();
  };

  return (
    <s.Container>
      <s.SvgIcon src={Sort} />
      <s.InnerContainer onClick={() => setOpen(true)}>
        <s.Text>{selectedOption.title}</s.Text>
        <s.SvgArrowIcon src={ArrowDown} toggle={open} />
      </s.InnerContainer>
      {open && (
        <s.SortBlock ref={contentRef}>
          {options
            .filter((option) => option.title !== selectedOption.title)
            .map((el) => (
              <s.SortText key={el.query} onClick={() => handleChangeOption(el)}>
                {el.title}
              </s.SortText>
            ))}
        </s.SortBlock>
      )}
    </s.Container>
  );
};

export default SortSelector;
