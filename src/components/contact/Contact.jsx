import React from 'react'
import Footer from '../contact/Footer'
import './Contact.css'
function Contact() {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div>
            <div className='contact-header'>
                <h1>Contact Us</h1>
                <p>Here is how to reach us !</p>
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
            </div >
            <Footer></Footer>
        </div >
    )
}

export default Contact