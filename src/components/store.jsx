import React from "react";

function store() {
  const addToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };
  return (
    <div>
      <h1>Welcome to the {storeName} Store</h1>
      <p>Owner: {ownerName}</p>
      <p>Contact: {contactNumber}</p>
      <p>Description: {storeDescription}</p>
      <div className="mt-6">
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </li>
          ))}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </ul>
      </div>
    </div>
  );
}

export default store;
