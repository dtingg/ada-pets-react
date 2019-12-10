import React from "react";
import { render, cleanup } from "@testing-library/react"
import PetCard from "../PetCard";


describe("PetCard", () => {
  test("Snapshot test for PetCard", () => {
    const container = render(
    <PetCard
      id={1}
      name={"Dino"}
      species={"dog"}
      location={"Seattle"}
      images={["placekitten.com"]}
      about={"New pet"}
      selectPet={() => {}}
      removePet={() => {}}
    />);

    expect(container.asFragment()).toMatchSnapshot();
    cleanup();
  });
});
