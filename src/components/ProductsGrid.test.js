import React from "react";
import { mount, configure } from "enzyme";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import { ProductsGrid } from "./ProductsGrid";

configure({ adapter: new Adapter() });

describe("ProductsGrid Container", () => {
  let products;
  beforeEach(() => {
    products = [
      {
        index: 0,
        isSale: false,
        price: "$49.99",
        productImage: "Product_1.jpeg",
        productName: "Pure Blonde Crate",
        type: "Beer"
      },
      {
        index: 1,
        isSale: true,
        price: "$14.99",
        productImage: "Product_2.jpeg",
        productName: "Victoria Bitter 4x6x375ml",
        type: "Beer"
      }
    ];
  });

  it("renders the Filter Container", () => {
    const wrapper = mount(<ProductsGrid products={products} />);
    expect(wrapper).to.have.length(1);
  });

  it("Checks if all the components are appearing fine", () => {
    const wrapper = mount(<ProductsGrid products={products} />);
    expect(wrapper.find('[data-ref="product-sale-tag"]')).to.exist;
    expect(wrapper.find('[data-ref="product-image"]')).to.exist;
    expect(wrapper.find('[data-ref="product-details"]')).to.exist;
    expect(wrapper.find('[data-ref="product-name"]')).to.exist;
    expect(wrapper.find('[data-ref="product-price"]')).to.exist;
  });
});
