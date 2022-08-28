import { useEffect } from "react";

// Футер с кнопками для перехода по страницам страницам.
export const TableFooter = ({ range, setPage, page, slice }) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);

    return (
        <div className="flex py-2 items-center justify-center w-full text-slate-700 bg-slate-50 dark:bg-slate-700 dark:text-slate-100">
            {range.map(
                (
                    el,
                    index // Кол-во кнопок высчитывается из отрезка, который мы получили в useTable.
                ) => (
                    <button
                        key={index}
                        onClick={() => setPage(el)}
                        className={`p-2 mr-2 rounded-lg bg-slate-100 dark:bg-slate-500 ${
                            el != page && "bg-slate-200 dark:bg-slate-600"
                        }`}
                    >
                        {el}
                    </button>
                )
            )}
        </div>
    );
};
