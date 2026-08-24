export default function FilteredProducts() {
    const products = [
  { id: 1, name: "Keyboard", price: 799 },
  { id: 2, name: "Mouse", price: 399 },
  { id: 3, name: "Monitor", price: 1999 },
  { id: 4, name: "Headphones", price: 599 }
];

  const cheapProducts = products.filter((product) => product.price < 700);

  return (
    <>
    {
  cheapProducts.map((product) => (
    <article key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.price} kr.</p>
    </article>
  ))}
    </>
  );
}
