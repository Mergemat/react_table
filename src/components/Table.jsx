import { Filter } from "./Filter";
import { filterData, sortData, useTable } from "../utils";
import { useState } from "react";
import { TableFooter } from "./TableFooter";

export const Table = (props) => {
    const [page, setPage] = useState(1); 
    const { items, requestFilter } = filterData(props.products); // Запрашиваем отфильрованные данные
    const { slice, range } = useTable(items, page, 4); // Берем из него слайс, учитывая текущую страницу и кол-во строчек на страницу (в этом случае их 4).
    const { sortedItems, requestSort, sortState } = sortData(slice); // Запрашиваем отсортированные данные

    //Получаем стрелочку в зависимости от направления сортировки.
    const getDir = (name) => {
        if (!sortState) {
            return;
        }
        const dir = sortState.key === name && sortState.direction;

        if (dir == "ascending") {
            return "↓";
        }
        if (dir == "descending") {
            return "↑";
        } 
    };

    return (
        <div className="relative overflow-x-auto shadow-xl rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {/* <th scope="col" className="px-6 py-3">
                            ID
                        </th> */}
                        <th scope="col" className="px-6 py-3 hover:bg-">
                            <button
                                type="button"
                                onClick={() => requestSort("name")}
                            >
                                Название {getDir("name")}
                            </button>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <button
                                type="button"
                                onClick={() => requestSort("count")}
                            >
                                Количество {getDir("count")}
                            </button>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <button
                                type="button"
                                onClick={() => requestSort("distance")}
                            >
                                Расстояние {getDir("distance")}
                            </button>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Дата
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedItems.map((item) => (
                        <tr
                            key={item.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            {/* <td className="px-6 py-4">{item.id}</td> */}

                            <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {item.name}
                            </th>
                            <td className="px-6 py-4">{item.count}</td>
                            <td className="px-6 py-4">{item.distance}</td>
                            <td scope="row" className="px-6 py-4 ">
                                {item.date}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <TableFooter
                range={range}
                slice={slice}
                setPage={setPage}
                page={page}
            />
            <Filter requestFilter={requestFilter} />
        </div>
    );
};
