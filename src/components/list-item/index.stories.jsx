import ListItem from "./index"

const data = [
    {
        name: "foo",
        playcount: 1000,
    },
    {
        name: "bar",
        playcount: 2000,
    },
    {
        name: "baz",
        playcount: 4000,
    },
    {
        name: "qux",
        playcount: 2000,
    }
]

export default {
    title: 'ListItem',
    component: ListItem,
};

export const Primary = () => <ListItem title="Top 10 Albums" data={data} />
