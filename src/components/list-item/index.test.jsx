import {render, screen} from '@testing-library/react'
import ListItem from "./index"

const data = [
    {
        name: "foo",
        playcount: 1000,
    },
    {
        name: "bar",
        playcount: 2000,
    }
]

describe("list item component", ( ) => {
    it("should render list item with title and data", () => {
        render(
           <ListItem title="title" data={data} />
          );
        expect(screen.getByText("foo")).toBeInTheDocument();
        expect(screen.getByText("bar")).toBeInTheDocument();
        expect(screen.getByText("1.000")).toBeInTheDocument();
        expect(screen.getByText("2.000")).toBeInTheDocument();
    })
});