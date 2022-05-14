import LinksStyles from "./Links.module.css";

export function Links({ items, handleReduce }) {
  return (
    <div className={LinksStyles.grid}>
      <button onClick={handleReduce}>減らす</button>
      {items.map((item) => (
        <a key={item.href} href={item.href} className={LinksStyles.card}>
          <h2>{item.title}</h2>
          <p>{item.discription}</p>
        </a>
      ))}
    </div>
  );
}
