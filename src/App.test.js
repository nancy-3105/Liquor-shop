import React from "react";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App Container", () => {
  describe("Renders", () => {
    it("renders the App Container", () => {
      const wrapper = shallow(<App />);
      expect(wrapper).to.have.length(1);
    });
    it("renders the Search component in app folder", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('[data-ref="HP-Products-search"]')).to.have.length(1);
    });
    it("renders the Filter component in app folder", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('[data-ref="HP-Products-filter"]')).to.have.length(1);
    });
    it("renders the Product display grid component in app folder", () => {
      const wrapper = shallow(<App />);
      const productDisplayGrid = wrapper.find('[data-ref="HP-product-grid"]');
      expect(productDisplayGrid).to.have.length(1);
    });
  });
});
