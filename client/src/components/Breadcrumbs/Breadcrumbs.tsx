import React from "react";
import styled from "styled-components";
import { colors } from "../../consts/colors";

const Container = styled.div`
  margin-bottom: 46px;
  display: flex;
`;

const TextItem = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: ${`${colors.brown}45`};
  margin-right: 18px;
`;

const Wrapper = styled.div``;

const data = ["Головна", "Каталог", "Куртки"];

const Breadcrumbs: React.FC = () => {
  return (
    <Container>
      {data.map((i, idx, arr) => (
        <Wrapper key={i}>
          <TextItem>{i}</TextItem>
          {idx + 1 !== arr.length && <TextItem>/</TextItem>}
        </Wrapper>
      ))}
    </Container>
  );
};

export default Breadcrumbs;
