import {render, screen} from '@testing-library/react'
import ArtistLarge from "./index"
import { MemoryRouter } from 'react-router-dom';

const artist = {
    name: 'John',
    listeners: "101010"
}

const artistIndex = 101


describe("artist large component", ( ) => {
    it("should render artist name", () => {
        render(
            <MemoryRouter history={history}>
              <ArtistLarge artist={artist} index={artistIndex} />
            </MemoryRouter>
          );
        expect(screen.getByText("John")).toBeInTheDocument();
        expect(screen.getByText("101.010")).toBeInTheDocument();
        expect(screen.getByText("#102")).toBeInTheDocument();
    })
});