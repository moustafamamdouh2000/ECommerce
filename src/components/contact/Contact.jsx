import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import { BsFillPinMapFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
function Contact() {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div>
            <div className='contact-header'>
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div id="map-container-google-1" className="z-depth-1-half map-container contact-map">
                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                    style={{ "border": 0 }} allowfullscreen></iframe>
            </div>
            <div className='contact-user-info'>
                <form class="row g-3">
                    <div class="col-md-4">
                        <label for="inputName" class="form-label">Name</label>
                        <input type="email" class="form-control" id="inputName" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputEmail" class="form-label">Email</label>
                        <input type="text" class="form-control" id="inputEmail" />
                    </div>
                    <div class="col-6">
                        <label for="InputSubject" class="form-label">Subject</label>
                        <input type="text" class="form-control" id="InputSubject" placeholder="Subject" />
                    </div>
                    <div>
                        <label for="inputMessage" class="form-label">Message</label>
                        <textarea className='form-control' name="" id="inputMessage" cols="20" rows="10" placeholder='Enter Message'></textarea>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div className='contact-footer row'>
                <div className='contact-footer-container col-3'>
                    <h1 className='contact-site-name'>E-Commerce</h1>
                    <hr />
                    <h4><BsFillPinMapFill />location</h4>
                    <h4><MdEmail />email</h4>
                    <h4><AiFillPhone />Phone</h4>
                </div>
                <div className='contact-footer-container col-3'>
                    <h1>Products
                    </h1>
                    <hr />
                    <h4><Link className='contact-about-shop' to='/shop'>Shop</Link></h4>
                </div>
                <div className='contact-footer-container col-3'>
                    <h1>Further Info
                    </h1>
                    <hr />
                    <h4><Link className='contact-about-link' to='/about' onClick={scrollToTop}>About Developer</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default Contact