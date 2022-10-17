import {render, screen} from '@testing-library/react'
import Header from "./index"

describe("header component", ( ) => {
    it("should render last fm text", () => {
        render(
           <Header />
          );
        expect(screen.getByText("last.fm")).toBeInTheDocument();
    })
});