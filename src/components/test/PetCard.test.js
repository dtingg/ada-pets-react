import React from "react";
import { render, cleanup, getByText } from "@testing-library/react"
import PetCard from "../PetCard";


describe("PetCard", () => {
  afterEach(cleanup);

  test("Snapshot test for PetCard", () => {
    const container = render(
    <PetCard
      id={1}
      name={"Dino"}
      species={"dog"}
      location={"Seattle"}
      images={["placepuppy.com"]}
      about={"New pet"}
      selectPet={() => {}}
      removePet={() => {}}
    />);

    expect(container.asFragment()).toMatchSnapshot();
    expect(container.getByText(/Dino/)).toBeDefined();
    // cleanup();
  });

  test("The selectPetCallback function is called when select button is pressed", () => {
    const callback = jest.fn();

    const container = render(
      <PetCard
        id={1}
        name={"Dino"}
        species={"dog"}
        location={"Seattle"}
        images={["placepuppy.com"]}
        about={"New pet"}
        selectPet={callback}
        removePet={() => {}}
      />);

      const button = container.getByText(/Select/);
      button.click();
      expect(callback).toHaveBeenCalled();
    
  })
});
