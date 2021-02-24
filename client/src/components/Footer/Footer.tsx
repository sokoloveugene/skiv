import React from "react";
import SocialLinks from "../SocialLinks";
import * as s from "./Footer.styled";
import { dictionary } from "../../consts/dictionary";

interface SubCategoryI {
  title: string;
  link: string;
}

const data: SubCategoryI[] = [
  { title: "Доставка і оплата", link: "#" },
  { title: "Повернення та обмін", link: "#" },
  { title: "FAQ", link: "#" },
];

const Footer: React.FC = () => {
  return (
    <s.Container>
      <s.Wrapper>
        <s.Title>ІНФОРМАЦІЯ</s.Title>
        {data.map((d) => (
          <s.SubTitle key={d.title}>{d.title}</s.SubTitle>
        ))}
      </s.Wrapper>

      <s.Wrapper>
        <s.Title>КОНТАКТИ</s.Title>
        <s.SubTitle>{dictionary.phoneNumber}</s.SubTitle>
        <SocialLinks />
      </s.Wrapper>
    </s.Container>
  );
};

export default Footer;
