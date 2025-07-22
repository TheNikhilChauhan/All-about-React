import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "Rs5000" },
    { id: 2, name: "Laptop", price: "Rs30,000" },
    { id: 3, name: "Headphones", price: "Rs 2000" },
    { id: 4, name: "Smartwatch", price: "Rs2199" },
  ];
  return (
    <div>
      Product List:
      <div>
        {products.map((p) => {
          return (
            <ul key={p.id}>
              <li>Product Name: {p.name}</li>
              <li>Price: {p.price}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
