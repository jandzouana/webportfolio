import React from 'react'
import "./contact.css";

const Contact : React.FC<{}> = (props) => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">
                        Let's chat!
                    </h3>
                    <p className="contact__details">Don't like forms? Let's talk on Linkedin!</p>
                </div>
                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder="Name"/>
                        </div>
                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" placeholder="Email"/>
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input" placeholder="Subject"/>
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <textarea name="" id="" cols="30" rows="10" className="contact__form-input" placeholder="Write your message here"></textarea>
                    </div>
                    <button className="btn contact__button">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
