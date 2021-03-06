import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { Logo } from "../Logo";

const FooterContainer = styled.div`
  //min-height: 24em;
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `}
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `}
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `}
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-gray-300
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    w-52
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pr-3
    md:pl-3
  `}
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-xs
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex 
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pr-3
    md:pl-3
    mt-7
    md:mt-0
  `}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `}

  & > a {
    ${tw`
      text-xs
      text-white
        transition-all
        hover:text-gray-500
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `}
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const RedIcon = styled.span`
  ${tw`
    w-10
    h-10
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;

function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Yourcar is a Car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#Home">Home</a>
            </ListItem>
            <ListItem>
              <a href="#AboutUs">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#Services">Services</a>
            </ListItem>
            <ListItem>
              <a href="#Models">Models</a>
            </ListItem>
            <ListItem>
              <a href="#Blogs">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#FAQ">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#ContactUs">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#Support">Support</a>
            </ListItem>
            <ListItem>
              <a href="#PrivacyPolicy">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#TermNConditions">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+91 555-234-8469</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourcar.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}

export default Footer;
