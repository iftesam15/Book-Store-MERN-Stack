export default function FilterComponent({ filterCriteria }) {
    const dataList = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
    ];

    // Apply filtering based on form data
    const filteredData = filterCriteria
        ? dataList.filter(
            (item) =>
                (!filterCriteria.name || item.name.includes(filterCriteria.name)) &&
                (!filterCriteria.age || item.age === Number(filterCriteria.age))
        )
        : dataList;

    return (
        <div>
            <h2>Filtered Data</h2>
            <ul>
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <li key={index}>{item.name} - Age: {item.age}</li>
                    ))
                ) : (
                    <p>No matching results</p>
                )}
            </ul>
        </div>
    );
}
