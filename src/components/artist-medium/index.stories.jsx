import ArtistMedium from "./index"
import {MemoryRouter} from 'react-router-dom';

export default {
    title: 'ArtistMedium',
    component: ArtistMedium,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)] //Wrapping the story inside the router
};

export const Medium = {
    args: {
        artist: {name:"Joe", listeners: "333"},
        index: "1"
    }
}

