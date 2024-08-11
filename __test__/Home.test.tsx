/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page"

// We have tripple AAA pattern for writing test (Arrange->Take Action or Act -> Assert)
describe("Home", () => {
    it("Should have Docs text", () => {
      render(<Home/>); //ARRANGE

      const homeElement = screen.getByText("Docs") //ACT- Take action here

      expect(homeElement).toBeInTheDocument(); //ASSERT - check to make sure everything is what we expected.
    });


    it("Should have Explore text", () => {
      render(<Home/>); //ARRANGE

      const homeElement = screen.getByText(/Explore/i) //ACT- Take action here

      expect(homeElement).toBeInTheDocument(); //ASSERT - check to make sure everything is what we expected.
    });
})


