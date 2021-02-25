import React from "react";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import currency from "../../helpers/currencyFormatter";

const Text = styled.p<{ customMargin?: string }>`
  font-size: 24px;
  line-height: 28px;
  color: ${colors.brown};
  margin: ${(props) => props.customMargin || ""};
`;

interface CurrencyI {
  value: number;
  customMargin?: string;
}

const Currency: React.FC<CurrencyI> = ({ value, customMargin }) => {
  return <Text customMargin={customMargin}>{currency(value)}</Text>;
};

export default Currency;
