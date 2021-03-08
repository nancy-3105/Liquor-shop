import React from "react";
import styled from "styled-components";
import { device } from "../constants/theme";
import Select from "react-select";

const FilterContainer = styled.div`
  border: 2px solid black;
  display: flex;
  justify-content: flex-end;
  height: 30px;
  margin: 0 40px;
  padding: 10px 20px;
  @media ${device.tablet} {
    margin-left: 80px;
    width: 67.7%;
  }
  @media ${device.laptop} {
    width: 85.3%;
  }
`;
const Label = styled.div`
  font-size: 16px;
  align-self: center;
  font-weight: bold;
  margin-right: 10px;
`;
const SelectFilter = styled.div`
  width: 60%;
  @media ${device.tablet} {
    width: 25%;
  }
  @media ${device.laptop} {
    width: 10%;
  }
`;
export const Filter = ({ value, handleChange, options }) => {
  return (
    <FilterContainer>
      <Label>Filter By:</Label>
      <SelectFilter>
        <Select
          data-ref="Select-Drop-Down"
          value={options.filter(function (option) {
            return option.value === value;
          })}
          onChange={handleChange}
          options={options}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => option.label}
        />
      </SelectFilter>
    </FilterContainer>
  );
};
