import React from "react";
import { Instagram, Facebook, Viber } from "assets/icons";
import * as s from "./SocialLinks.styled";

const socialArray = [
  { icon: Viber, link: "#", alt: "viber icon" },
  { icon: Facebook, link: "#", alt: "facebook icon" },
  { icon: Instagram, link: "#", alt: "instagram icon" },
];

const SocialLinks: React.FC = () => {
  return (
    <s.SocialList>
      {socialArray.map(({ icon, link, alt }) => (
        <s.SocialItem key={alt}>
          <s.SocialLink href={link} target="_blank" rel="noopener noreferrer">
            <s.SocialIcon src={icon} alt={alt} />
          </s.SocialLink>
        </s.SocialItem>
      ))}
    </s.SocialList>
  );
};

export default SocialLinks;
