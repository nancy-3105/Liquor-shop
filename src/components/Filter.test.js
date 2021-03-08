import React from "react";
import sinon from "sinon";
import { mount, configure } from "enzyme";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import { Filter } from "./Filter";

configure({ adapter: new Adapter() });

describe("Filter Container", () => {
  let value;
  let handleChangeSpy;
  let options;
  beforeEach(() => {
    value = "ALL";
    options = [
      { value: "ALL", label: "All" },
      { value: "BEER", label: "Beer" },
      { value: "WINE", label: "Wine" },
      { value: "SPIRITS", label: "Spirits" },
      { value: "CIDER", label: "Cider" }
    ];
    handleChangeSpy = sinon.spy();
  });

  it("renders the Filter Container", () => {
    const wrapper = mount(
      <Filter value={value} options={options} handleChange={handleChangeSpy} />
    );
    expect(wrapper).to.have.length(1);
  });
});
