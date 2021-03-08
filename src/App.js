import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../src/constants/theme";
import { GoArrowRight, GoArrowLeft, GoX, GoHome } from "react-icons/go";
import { Search } from "../src/components/Search";
import { Filter } from "../src/components/Filter";
import { ProductsGrid } from "../src/components/ProductsGrid";
import { Products } from "../src/constants/productsFixture";

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
  // ProductName will keep a track of ancy change to the search input
  const [productName, setproductName] = useState("");

  // FilteredProducts will contain the updated list of products based on search
  const [filteredProducts, setFilteredProducts] = useState([]);

  // products contains all the products needs to be displayed
  const [products] = useState(Products);

  // handleSearchChange will set the states based on search
  // it runs eachtime there's a change in the input
  const handleSearchChange = (e) => {
    setproductName(e);
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
      <Filter data-ref="HP-Products-filter" />

      {/*  if the productName is empty the original list or products is passed as param
else productName is set then the list of related searched 
Products is passed as parameter */}

      <ProductsGrid
        data-ref="HP-product-grid"
        products={productName.length < 1 ? products : filteredProducts}
      />
    </AppContainer>
  );
}
