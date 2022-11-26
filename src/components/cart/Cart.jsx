import React from 'react'
import Card from 'react-bootstrap/Card';
import './Cart.css'
function Cart({ items }) {
    // Need state to save the ID's thats clicked on and request them here to fill the cart
    return (
        <div className='cart-card-item' style={{ "width": "25%", margin: "10px auto" }}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{items.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{items.id}</Card.Subtitle>
                    <Card.Img variant="top" src={items.images[0]} />
                    <Card.Text>
                        {items.category.name}
                    </Card.Text>
                    <div className='cart-card-flex' style={{ "display": "flex", "text-align": "center" }}>
                        <Card.Link href="#">+</Card.Link>
                        <Card.Text href="#">Count</Card.Text>
                        <Card.Link href="#">-</Card.Link>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Cart