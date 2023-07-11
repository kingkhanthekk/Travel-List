import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

const App = () => {
  const [items, setItems] = useState([...initialItems]);

  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  return (
    <div className="app">
      <Logo />
      <Form addNewItem={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
};

const Logo = () => {
  return <h1>🌴 Far Away 💼</h1>;
};

const Form = ({ addNewItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: new Date(),
      description,
      quantity,
      packed: false,
    };

    addNewItem(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What item/s do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (v, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Item..."
      ></input>
      <button>Add</button>
    </form>
  );
};

const PackingList = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

const ListItem = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

const Stats = () => {
  return (
    <footer className="stats">
      <em>🧳 You have X items on your list, and you packed X (X%)</em>
    </footer>
  );
};

export default App;
