const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to the list.</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have packed everything. Ready to go ✈"
          : `🧳 You have ${numItems} item${
              numItems === 1 ? "" : "s"
            } on your list, and you packed ${numPacked}
          items (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
