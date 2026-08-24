export default function ProductList() {
    const products = [
      { id: 1, name: "Keyboard", price: 799 },
      { id: 2, name: "Mouse", price: 399 },
      { id: 3, name: "Monitor", price: 1999 },
      { id: 4, name: "Monitor arm", price: 199 },
    ];


    return (
        <>
        {products.map((product) => (
    <article key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.price} kr.</p>
    </article>
  ))} 
  </>
  );
}