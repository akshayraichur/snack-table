import { useState } from "react";
import Table from "./components/Table";

function App() {
  const [columns] = useState([
    {
      name: "ID",
      accessor: "id",
    },
    {
      name: "Product Name",
      accessor: "product_name",
    },
    {
      name: "Product Weight",
      accessor: "product_weight",
    },
    {
      name: "Price (INR)",
      accessor: "price",
    },
    {
      name: "Calories",
      accessor: "calories",
    },
    {
      name: "Ingredients",
      accessor: "ingredients",
    },
  ]);

  const [rows, setRows] = useState([
    {
      id: 1,
      product_name: "Granola Bar",
      product_weight: "21g",
      price: 299,
      calories: 150,
      ingredients: ["Oats", "Honey", "Nuts", "Dried Fruits"],
    },
    {
      id: 2,
      product_name: "Fruit and Nut Mix",
      product_weight: "73g",
      price: 749,
      calories: 353,
      ingredients: ["Almonds", "Cashews", "Dried Cranberries", "Dried Blueberries"],
    },
    {
      id: 3,
      product_name: "Veggie Chips",
      product_weight: "28g",
      price: 279,
      calories: 318,
      ingredients: ["Sweet Potatoes", "Beets", "Kale", "Sea Salt"],
    },
    {
      id: 4,
      product_name: "Protein Balls",
      product_weight: "100g",
      price: 499,
      calories: 130,
      ingredients: ["Dates", "Almond Butter", "Protein Powder", "Chia Seeds"],
    },
  ]);

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
    let value = e.target.value;
    let newRows = [...rows];
    let reducedNames = newRows.reduce((acc, curr) => {
      acc.push(curr.product_name);

      return acc;
    }, []);
    console.log(reducedNames, value);

    if (reducedNames.includes(value)) {
      console.log("hi there");
    }
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
