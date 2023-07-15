import { useState } from "react";
import Table from "./components/Table";
import { ROWS } from "./constants/rows";
import { COLUMNS } from "./constants/columns";

function App() {
  const [columns] = useState(COLUMNS);
  const [rows, setRows] = useState(ROWS);

  const sortingValues = (type) => {
    if (type === "price") {
      let row = [...rows];
      row.sort((a, b) => a.price - b.price);
      setRows([...row]);
    }

    if (type === "calories") {
      let row = [...rows];
      row.sort((a, b) => a.calories - b.calories);
      setRows([...row]);
    }
  };

  const searchTable = (e) => {
    let value = e.target.value.trim();

    if (!value) {
      setRows([...ROWS]);
      return;
    }

    let newRows = [...rows];

    let latestRows = newRows.filter((item) => {
      let name = item.product_name;
      let ingItems = item.ingredients;
      if (name.toLowerCase().includes(value.toLowerCase())) {
        return item;
      }

      if (ingItems.toLowerCase().includes(value.toLowerCase())) {
        return item;
      }
    });

    setRows([...latestRows]);
  };

  return (
    <div className="container">
      <h1>Snack Table</h1>

      <div>
        <input placeholder="Search with Products or Ingredients" onChange={searchTable} />
      </div>

      <div className="table-container">
        <Table columns={columns} rows={rows} sort={sortingValues} />
      </div>
    </div>
  );
}

export default App;
