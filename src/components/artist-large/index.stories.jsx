import ArtistLarge from "./index"
import {MemoryRouter} from 'react-router-dom';

export default {
    title: 'ArtistLarge',
    component: ArtistLarge,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)] //Wrapping the story inside the router
};

export const Large = {
    args: {
        artist: {name:"John", listeners: "222"},
        index: "0"
    }
}

