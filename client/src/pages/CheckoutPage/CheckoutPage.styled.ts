import { colors } from "consts/colors";
import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
`;

export const InputsGridLayout = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-areas:
    "firstName lastName"
    "address address"
    "phoneNumber phoneNumber"
    "email email";
`;

export const Left = styled.div`
  flex-basis: 628px;
`;

export const Right = styled.div`
  flex-grow: 1;
  background-color: ${colors.beige};
  margin-left: 50px;
  padding: 20px 25px;
  min-width: 300px;
`;

export const RightTitle = styled.p`
  font-size: 18px;
  color: ${colors.brown};
  margin-bottom: 17px;
`;

export const RadioGroup = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-column-gap: 8px;
`;

export const RadioTitle = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: ${colors.brown};
`;

export const CheckoutItemContainer = styled.div`
  height: 135px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
