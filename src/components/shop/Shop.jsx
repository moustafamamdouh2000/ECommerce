import './shop.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  const [productByID, setproductByID] = useState(1);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + productByID)
      .then((res) => res.json())
      .then((json) => console.log(json));
  });

  return (
    <CardGroup className="test">
      {products.map((product) => {
        return (
          <div className="product" onClick={() => setproductByID(product.id)}>
            <div className="img">
              <img className="im" src={product.image} alt="some product img" />
            </div>
            <p className="category">{product.category}</p>
            <p className="price">{product.price} EGP</p>
          </div>
        );
      })}
    </CardGroup>
  );
}

export default Shop;
