import React from "react";
import FooterStyled, {
  FooterBody,
  FooterText,
  TextArea,
  Text,
  IconArea,
} from "./styles/FooterStyled.styled";
import { Logo } from "./styles/Header.styled";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterBody>
        <div>
          <Logo src="./images/logo_white.png"></Logo>
        </div>
        <FooterText>
          <TextArea>
            <Text>1775 Tysons Blvd. 5th Floor. Tysons, VA 22102</Text>
            <Text>+1 (571) 360 66 77b</Text>
            <Text>contact@clarusway.com</Text>
          </TextArea>
          <TextArea>
            <Text>About Us</Text>
            <Text>What We Do</Text>
            <Text>FAQ</Text>
          </TextArea>
          <TextArea>
            <Text>Career</Text>
            <Text>Blog</Text>
            <Text>Contact Us</Text>
          </TextArea>
          <IconArea>
            <TiSocialTwitterCircular size={50} />
            <TiSocialFacebookCircular size={50} />
            <TiSocialLinkedinCircular size={50} />
          </IconArea>
        </FooterText>
      </FooterBody>
    </FooterStyled>
  );
};

export default Footer;
