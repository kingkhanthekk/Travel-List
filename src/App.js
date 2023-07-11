const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

const Logo = () => {
  return <h1>🌴 Far Away 💼</h1>;
};

const Form = () => {
  return (
    <div className="add-form">
      <h3>What item/s do you need for your 😍 trip?</h3>
    </div>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <ListItem item={item} />
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
