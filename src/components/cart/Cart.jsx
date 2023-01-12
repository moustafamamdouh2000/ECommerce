import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCounter } from '../../redux/counterSlice';
import { removeAll } from '../../redux/cartSlice';
import './Cart.css'

function Cart({ items }) {
    let no_of_items = 0
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let price = 0;
    const cart_counter = useSelector((state) => state.counterReducer.counter)
    let cartItems = useSelector(state => state.cartReducer)
    const checkCart = () => {
        //check if user is logged in first,
        if (localStorage.getItem("loggedIn?")) {
            //logged in
            alert('order is added succesfuly !')
            dispatch(clearCounter())
            dispatch(removeAll())
            navigate('../shop')
        } else {
            alert("user is not logged in")
            navigate('../login')
        }
        console.log("test");
    }
    const addItem = () => {

    }

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: '#d2c9ff' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                <h6 className="mb-0 text-muted">{cartItems.items.length} items</h6>
                                            </div>
                                            {
                                                cartItems.items.length == 0 ? <div style={{ "fontWeight": "bold", "fontSize": "20px" }}>cart is empty</div> : ''
                                            }
                                            <hr className="my-4" />
                                            {
                                                cartItems.items.map((item) => {
                                                    return (
                                                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                                <img src={item.image} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                                <h6 className="text-muted">{item.category}</h6>
                                                                <h6 className="text-black mb-0">{item.title}</h6>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                    <i className="fas fa-minus" />
                                                                </button>
                                                                <input onChange={console.log(this)} id={no_of_items++} min={0} name="quantity" defaultValue={1} type="number" className="form-control form-control-sm" />
                                                                <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                                    <i className="fas fa-plus" />
                                                                </button>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                <h6 className="mb-0">€ {item.price}</h6>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                <a href="#!" className="text-muted"><i className="fas fa-times" /></a>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            <hr className="my-4" />
                                            <div className="pt-5">
                                                <h6 className="mb-0"><a href="#/shop" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Back to shop</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                            <hr className="my-4" />
                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">Total price {cartItems.items.length} items</h5>
                                                <h5>€{
                                                    cartItems.items.map(item => {
                                                        price += item.price
                                                    })
                                                }{Math.round(price)}</h5>
                                            </div>
                                            <button onClick={checkCart} type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Cart;