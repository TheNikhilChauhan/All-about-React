const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: "Rs 30,000",
    availability: "In stock",
  };
  return (
    <div>
      <div>
        Product:
        <ul>
          <li>Name: {product.name}</li>
          <li>Price: {product.price}</li>
          <li>Availability: {product.availability}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
