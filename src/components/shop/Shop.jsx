import './shop.css';
import { useSelector, useDispatch } from 'react-redux';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import { incrementCounter, decrementCounter } from '../../redux/counterSlice';
import { addItem } from '../../redux/cartSlice';
function Shop() {
  let randomKey = 0; // this is just for browser error for each element having unique key
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.counter);
  const [products, setProducts] = useState([]);
  const items = useSelector(state => state.cartReducer)
  useEffect(() => {
    //need to fetch the daata here from backend
    fetch('/getAllData')
      .then((res) => res.json())
      .then((json) => setProducts(json));
    // fetch('https://fakestoreapi.com/products')
    //   .then((res) => res.json())
    //   .then((json) => setProducts(json));
  }, []);

  const fetchProduct = (id) => {
    //same here we need to get only 1 item
    fetch('/getSignleData/' + id)
      .then((res) => res.json())
      .then((json) => {
        dispatch(incrementCounter(1))
        // //check for items already exists if its there increase its count
        // const item_id = json.id;
        // const found = items.items.some(el => el[0].id === id);
        // let index = 0;
        // if (found) {
        //   items.items.some(function (entry, i) {
        //     if (entry[0].id == item_id) {
        //       index = i;
        //     }
        //   });
        // }
        // else {
        //   //first time for item.
        //   // dispatch(addItem([json, 1]));
        dispatch(addItem(json))
        console.log(items.items);
        // }
      });
  };
  return (
    <div className="shop-card-groups row">
      <h2 style={{ "textAlign": "center" }}>welcome to the shop, add items to your cart !</h2>
      <div className='shop-container'>
        <CardGroup className="test">
          {products.map((product) => {
            return (
              <div key={randomKey++} className="product" style={{ "background-color": "snow" }}>
                <div key={randomKey++} className="img">
                  <img
                    key={randomKey++}
                    className="im"
                    src={product.image}
                    alt="some product img"
                  />
                </div>
                <p key={randomKey++} className="title">
                  {product.title}
                </p>
                <p key={randomKey++} className="price">
                  {product.price} €
                </p>
                <button className='btn btn-primary' onClick={() => fetchProduct(product.id)}>Add</button>
              </div>
            );
          })}
        </CardGroup>
      </div>
    </div>
  );
}

export default Shop;
