import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import image1 from "../../assets/images/testImage1.png";
import { colors } from "../../consts/colors";
import currency from "../../helpers/currencyFormatter";

const Container = styled.div`
  background-color: ${colors.white};
  padding: 16px 28px;
  border: 1px solid ${colors.lightGrey};
  border-radius: 10px;
  width: 277px;
  position: fixed;
  right: 120px;
  top: 100px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Image = styled.img`
  height: 91px;
  width: 71px;
  object-fit: cover;
  margin-right: 21px;
`;

const Title = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${colors.brown};
  margin-bottom: 12px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: ${colors.brown};
  margin-bottom: 3px;
`;

const AdditionalText = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${colors.peach};
  margin-bottom: 7px;
`;

interface NotificationPortalI {
  open: boolean;
  // onClose?: () => void;
}

const NotificationPortal: React.FC<NotificationPortalI> = ({
  open,
  // onClose,
}) => {
  const portalDiv = document.getElementById("notification");

  return open && portalDiv
    ? ReactDOM.createPortal(
        <Container>
          <Title>1 ITEM(S) ADDED TO YOUR CART </Title>
          <Wrapper>
            <Image src={image1} alt="product" />
            <Info>
              <ProductTitle>Coats and Jackets</ProductTitle>
              <AdditionalText>XS</AdditionalText>
              <AdditionalText>{currency(1213)}</AdditionalText>
            </Info>
          </Wrapper>
        </Container>,
        portalDiv
      )
    : null;
};

export default NotificationPortal;
