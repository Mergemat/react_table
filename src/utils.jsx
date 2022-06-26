import { useState, useEffect, useMemo } from "react";

// Высчитывает кол-во страниц по массиву и кол-ву строчек на страницу.
const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    let i = 1;
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
};

// Дает слайс по массиву, странице и кол-ву строчек на страницу.
const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

// Хук получает массив, страницу и кол-во строчек на страницу. Возвращает слайс и общее кол-во страниц.
export const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);

    useEffect(() => {
        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    }, [data, setTableRange, page, setSlice]);

    return { slice, range: tableRange };
};

// Функция, которая выдает отсортированный массив данных, состояние (ключ, направление) и функцию запроса.
export const sortData = (items, settings = null) => {
    const [sortState, setSortState] = useState(settings);

    //Сортировка в useMemo, чтобы избежать лишних расчетов при ререндере.
    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        if (sortState !== null) {
            //Стандартный сорт по ключам с учетом направления.
            sortableItems.sort((a, b) => {
                if (a[sortState.key] < b[sortState.key]) {
                    return sortState.direction === "ascending" ? -1 : 1;
                }
                if (a[sortState.key] > b[sortState.key]) {
                    return sortState.direction === "ascending" ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortState]);

    //Функция запроса сортировки. Так же она регулирует направление сортировки, если ключ уже существует в sortState.
    const requestSort = (key) => {
        let state = { key, direction: "ascending" };
        if (
            sortState &&
            sortState.key === key &&
            sortState.direction === "ascending"
        ) {
            state = { key, direction: "descending" };
        }
        if (
            sortState &&
            sortState.key === key &&
            sortState.direction === "descending"
        ) {
            state = null;
        }
        setSortState(state);
    };

    return { sortedItems: sortedItems, requestSort, sortState };
};
// Функция, которая выдает отфильтрованный массив данных, состояние (ключ, тип сравнения, значение) и функцию запроса.
export const filterData = (items, settings = null) => {
    const [filterState, setFilterState] = useState(settings);

    const filteredItems = useMemo(() => {
        let filteredItems = [...items];
        if (filterState !== null) {
            //Стандартный сорт по ключам с учетом направления.
            filteredItems = filteredItems.filter((item) => {
                if (filterState.type == "equals") {
                    return item[filterState.key] == filterState.value;
                }
                if (filterState.type == "includes") {
                    return item[filterState.key].includes(filterState.value);
                }
                if (filterState.type == "greater") {
                    return item[filterState.key] > filterState.value;
                }
                if (filterState.type == "less") {
                    return item[filterState.key] < filterState.value;
                }
            });
        }
        return filteredItems;
    }, [items, filterState]);

    const requestFilter = (key = null, type = null, value = null) => {
        if (!key || !type || !value) {
            setFilterState(null);
        } else {
            setFilterState({ key, type, value });
        }
    };
    return { items: filteredItems, requestFilter };
};
