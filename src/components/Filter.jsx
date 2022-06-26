import { useState } from "react";

//Компонент фильтра.
export const Filter = ({ requestFilter }) => {
    const [key, setKey] = useState("");
    const [type, setType] = useState("");
    return (
        <div className="flex items-center p-3 justify-center w-full h-full">
            <label htmlFor="underline_select" className="sr-only">
                Underline select
            </label>
            <select
                id="underline_select"
                className="block p-2 mr-2 w-32 text-sm  bg-transparent focus:outline-none focus:ring-0 border rounded-lg border-gray-200 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                onChange={(event) => setKey(event.target.value)}
                defaultValue="col"
            >
                <option disabled value="col">
                    Колонка
                </option>
                <option value="name">Название</option>
                <option value="count">Количество</option>
                <option value="distance">Расстояние</option>
            </select>

            <select
                id="underline_select"
                className="block p-2 mr-2 w-32 text-sm  bg-transparent focus:outline-none focus:ring-0 border rounded-lg border-gray-200 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                onChange={(event) => setType(event.target.value)}
                defaultValue="col"
            >
                <option disabled value="col">
                    Условие
                </option>
                {key ? (
                    <>
                        <option value="equals">Равно</option>
                        {key == "name" ? (
                            <option value="includes">Содержит</option>
                        ) : (
                            <>
                                <option value="greater">Больше</option>
                                <option value="less">меньше</option>
                            </>
                        )}
                    </>
                ) : null}
            </select>
            <input
                type="text"
                className="bg-gray-50 mr-2 border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Значение"
                onChange={(event) => requestFilter(key, type, event.target.value)}
                required
            />
        </div>
    );
};
