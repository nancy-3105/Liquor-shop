import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../src/constants/theme";
import { GoArrowRight, GoArrowLeft, GoX, GoHome } from "react-icons/go";
import { Search } from "../src/components/Search";
import { Filter } from "../src/components/Filter";
import { ProductsGrid } from "../src/components/ProductsGrid";
import { Products } from "../src/constants/productsFixture";
import { Options } from "../src/constants/selectOptionsFixture";

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
  // ProductName will keep a track of any change to the search input
  const [productName, setProductName] = useState("");

  // FilteredProducts will contain the updated list of products based on search
  const [filteredProducts, setFilteredProducts] = useState([]);

  // products contains all the products needs to be displayed
  const [products] = useState(Products);

  // selected will keep a track of any change to the filter by type dropdown
  const [selected, setSelected] = useState("ALL");

  // handleSearchChange will set the states based on search
  // it runs eachtime there's a change in the input
  const handleSearchChange = (e) => {
    setProductName(e);
    setFilteredProducts(products);
  }; // handleSearchChange ends here

  // handleSearchClick, this function is called onclick of search button
  // it takes the searchbox value from the setState "productName"
  const handleSearchClick = () => {
    /* oldList holds the list of original products but converting 
    the names of all products to lowerCase */
    let oldList = products.map((product) => {
      return {
        productName: product.productName.toLowerCase(),
        productImage: product.productImage,
        price: product.price,
        isSale: product.isSale
      };
    });

    /* if the searchInput is not empty then creates a newList
     based on search and setFilteredProducts to the newList*/
    /* else the searchInput is empty it will setFilteredProducts to the
     original products list*/

    if (productName !== "") {
      let newList = [];

      newList = oldList.filter((product) =>
        product.productName.includes(productName.toLowerCase())
      );
      setFilteredProducts(newList);
    } else {
      setFilteredProducts(products);
    }
  }; // handleSearchClick ends here

  const handleFilterChange = (e) => {
    let newList = [];
    setProductName(""); // if the filterByType is selected the it will clear product search bar

    /* if the filter by type dropdown has the value selected All then it will setFilteredProducts to the
     original products list
     else it will filter a new list based on the dropdown value */
    if (e.value === "ALL") {
      setFilteredProducts(products);
    } else {
      newList = products.filter((product) => product.type === e.label);
      setFilteredProducts(newList);
    }
    setSelected(e.value); // it will set the state based on the dropdown value seleted
  }; // handleFilterChange ends here

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
          <Search
            data-ref="HP-Products-search"
            value={productName}
            handleChange={(e) => handleSearchChange(e.target.value)}
            searchButonOnclick={handleSearchClick}
          />
        </ProductSearchConatiner>
      </HeaderWrapper>
      <Filter
        data-ref="HP-Products-filter"
        value={selected}
        handleChange={(e) => handleFilterChange(e)}
        options={Options}
      />

      {/*  if the productName is empty and filter by type has "All" selected 
      then the original list or products is passed as param else productName 
      is set then the list of related searched Products is passed as parameter */}

      <ProductsGrid
        data-ref="HP-product-grid"
        products={
          productName.length < 1 && selected === "ALL"
            ? products
            : filteredProducts
        }
      />
    </AppContainer>
  );
}
