import ArtistSmall from "./index"
import {MemoryRouter} from 'react-router-dom';

export default {
    title: 'ArtistSmall',
    component: ArtistSmall,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)] //Wrapping the story inside the router
};

export const Small = {
    args: {
        artist: {name:"Foo", listeners: "444"},
        index: "2"
    }
}

