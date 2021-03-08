import React from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import { device } from "../constants/theme";

const SearchWrapper = styled.div`
  width: 60%;
  @media ${device.tablet} {
    width: 85%;
  }
  @media ${device.laptop} {
    width: 88%;
  }
`;
const SearchBar = styled.input`
  width: 55%;
  @media ${device.tablet} {
    height: 27px;
    width: 83%;
    border-radius: 4px;
  }
  @media ${device.laptop} {
    height: 40px;
    width: 83%;
    margin: 0 20px 0 0;
    border-radius: 4px;
  }
`;
const SearchButton = styled.button`
  width: 36%;
  margin-left: 5px;
  height: 20px;
  font-size: 10px;
  svg {
    vertical-align: text-bottom;
  }
  @media ${device.tablet} {
    width: 12%;
    height: 26px;
    font-size: 12px;
  }
  @media ${device.laptop} {
    width: 12%;
    height: 35px;
    font-size: 18px;
  }
`;

export const Search = () => {
  return (
    <SearchWrapper>
      <SearchBar />
      <SearchButton>
        <GoSearch /> Search
      </SearchButton>
    </SearchWrapper>
  );
};
