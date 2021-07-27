import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { Logo } from "../Logo";

const FooterContainer = styled.div`
  min-height: 30em;
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-4
    md:pt-12
    pb-1
    items-center
    justify-center
  `}
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    max-w-screen-2xl
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
  `}
`;

function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
        </AboutContainer>
      </InnerContainer>
    </FooterContainer>
  );
}

export default Footer;
