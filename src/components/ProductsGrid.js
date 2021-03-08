import React from "react";
import styled from "styled-components";
import { device } from "../constants/theme";

const Container = styled.div`
  margin-bottom: 1rem;
  display: block;
  padding: 0 40px;
  @media ${device.tablet} {
    margin: 0 40px;
  }
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const Col = styled.div`
  padding: 20px;
  background-color: #e5edf5;
  border: 1px solid #c9c1d5;
  color: #5f5f5f;
  height: auto;
  @media ${device.tablet} {
    width: 16.5%;
  }
  @media ${device.laptop} {
    width: 21.5%;
  }
`;
const ProductDetails = styled.div``;

const ProductImage = styled.div`
  border: 1px solid black;
  height: 150px;
  margin: 10px 30px;
  background-color: #fff;

  @media ${device.tablet} {
    height: 65px;
    margin: 10px 10px;
  }
  @media ${device.laptop} {
    height: 180px;
  }
`;

const SaleTag = styled.div`
  width: 20%;
  position: absolute;
  margin-left: -21px;
  margin-top: -21px;
  height: 39px;
  background-color: red;
  color: #fff;
  font-weight: 900;
  @media ${device.tablet} {
    width: 6%;
  }
`;
const ProductName = styled.div``;
const ProductPrice = styled.div``;

export const ProductsGrid = ({ products }) => {
  return (
    <Container>
      <Row>
        {/* filteredProducts or the original products list is passed as param 
        from the parent Component */}
        {products.map((product, i) => (
          <Col key={i}>
            {/* SaleTag is only shown on the product having isSale attribute true */}
            {product.isSale && (
              <SaleTag data-ref="product-sale-tag"> Sale </SaleTag>
            )}
            <ProductImage data-ref="product-image" />
            <ProductDetails data-ref="product-details">
              <ProductName data-ref="product-name">
                {product.productName}
              </ProductName>
              <ProductPrice data-ref="product-price">
                {product.price}
              </ProductPrice>
            </ProductDetails>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
