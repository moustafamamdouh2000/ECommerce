import './shop.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
function Shop() {
  let randomKey = 0; // this is just for browser error for each element having unique key
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  const fetchProduct = (id) => {
    fetch('https://fakestoreapi.com/products/' + id)
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <CardGroup className="test">
      {products.map((product) => {
        return (
          <div key={randomKey++} className="product" onClick={() => fetchProduct(product.id)}>
            <div key={randomKey++} className="img">
              <img
                key={randomKey++}
                className="im"
                src={product.image}
                alt="some product img"
              />
            </div>
            <p key={randomKey++} className="category">
              {product.category}
            </p>
            <p key={randomKey++} className="price">
              {product.price} EGP
            </p>
          </div>
        );
      })}
    </CardGroup>
  );
}

export default Shop;
