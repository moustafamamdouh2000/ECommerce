import './Contact.css'
import React from 'react'
import { BsFillPinMapFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { Link } from 'react-router-dom'
function Footer() {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className='contact-footer row'>
            <div className='contact-footer-container'>
                <h1 className='contact-site-name'>E-Commerce</h1>
                <hr />
                <h4><BsFillPinMapFill />location</h4>
                <h4><MdEmail />email</h4>
                <h4><AiFillPhone />Phone</h4>
            </div>
            <div className='contact-footer-container'>
                <h1>Products
                </h1>
                <hr />
                <h4><Link className='contact-about-shop' to='/shop'>Shop</Link></h4>
            </div>
            <div className='contact-footer-container'>
                <h1>Further Info
                </h1>
                <hr />
                <h4><Link className='contact-about-link' to='/about' onClick={scrollToTop}>About Developer</Link></h4>
            </div>
        </div>
    )
}

export default Footer