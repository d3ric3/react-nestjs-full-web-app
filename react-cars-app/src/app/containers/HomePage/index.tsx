import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../../components/BookCard";
import { Marginer } from "../../components/Marginer";
import { NavBar } from "../../components/NavBar";
import BookingSteps from "./BookingSteps";
import TopSection from "./TopSection";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="8em" />
      <BookingSteps />
    </PageContainer>
  );
}
