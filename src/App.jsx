import { Table } from "./components/Table";

function App() {
    return (
        <div className="flex justify-center items-center w-full h-screen bg-slate-500">
            <Table
                products={[
                    {
                        id: 1,
                        date: "01.02.2022",
                        name: "Name 1",
                        count: 60,
                        distance: 10,
                    },
                    {
                        id: 2,
                        date: "01.02.2022",
                        name: "Name 2",
                        count: 23,
                        distance: 130,
                    },

                    {
                        id: 3,
                        date: "01.02.2022",
                        name: "Name 32",
                        count: 2,
                        distance: 5,
                    },

                    {
                        id: 4,
                        date: "01.02.2022",
                        name: "Name 3",
                        count: 38,
                        distance: 52,
                    },
                    {
                        id: 5,
                        date: "01.02.2022",
                        name: "Name 4",
                        count: 138,
                        distance: 532,
                    },
                    {
                        id: 6,
                        date: "01.02.2022",
                        name: "Name 43",
                        count: 118,
                        distance: 902,
                    },
                    {
                        id: 7,
                        date: "01.02.2022",
                        name: "Name 5",
                        count: 60,
                        distance: 10,
                    },
                    {
                        id: 8,
                        date: "01.02.2022",
                        name: "Name 6",
                        count: 23,
                        distance: 130,
                    },

                    {
                        id: 9,
                        date: "01.02.2022",
                        name: "Name 7",
                        count: 2,
                        distance: 5,
                    },

                    {
                        id: 10,
                        date: "01.02.2022",
                        name: "Name 8",
                        count: 38,
                        distance: 52,
                    },
                    {
                        id: 11,
                        date: "01.02.2022",
                        name: "Name 9",
                        count: 138,
                        distance: 532,
                    },
                    {
                        id: 12,
                        date: "01.02.2022",
                        name: "Name 10",
                        count: 118,
                        distance: 902,
                    },
                ]}
            />
        </div>
    );
}

export default App;
