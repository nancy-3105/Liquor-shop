import React from "react";
import styled from "styled-components";
import { device } from "../src/constants/theme";
import { GoArrowRight, GoArrowLeft, GoX, GoHome } from "react-icons/go";
import { Search } from "../src/components/Search";
import { Filter } from "../src/components/Filter";
import { ProductsGrid } from "../src/components/ProductsGrid";

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  overflow-x: hidden;
  min-height: 700px;
`;
const HeaderWrapper = styled.div`
  margin-bottom: 10px;
  background-color: #dedede;
  padding: 10px;
`;
const Title = styled.div`
  padding: 0;
  margin: 0 0 5px 0;
`;
const HomeLinks = styled.div`
  margin: 0 5px;
  width: 23%;
  @media ${device.tablet} {
    width: 18%;
  }
  svg {
    @media ${device.tablet} {
      height: 25px;
      width: 25px;
    }
    @media ${device.laptop} {
      height: 40px;
      width: 40px;
    }
  }
`;
const ProductSearchConatiner = styled.div`
  display: flex;
`;

export default function App() {
  return (
    <AppContainer>
      <HeaderWrapper>
        <Title>Products</Title>
        <ProductSearchConatiner>
          {/* static Links -- functionality needs to be done */}
          <HomeLinks>
            <GoArrowLeft />
            <GoArrowRight />
            <GoX />
            <GoHome />
          </HomeLinks>
          {/* static Links -- functionality needs to be done */}
          <Search data-ref="HP-Products-search" />
        </ProductSearchConatiner>
      </HeaderWrapper>
      <Filter data-ref="HP-Products-filter" />
      <ProductsGrid data-ref="HP-product-grid" />
    </AppContainer>
  );
}
