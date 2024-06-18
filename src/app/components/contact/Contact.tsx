import React from 'react';
import { useFormData } from 'herotofu-react';
import "./contact.css";

const Contact: React.FC<{}> = () => {
    const { formState, getFormSubmitHandler } = useFormData('https://public.herotofu.com/v1/b1bdc0d0-2db8-11ef-a512-2d50852e3019');

    const onSubmitCallback = ({ status, data }) => {
        console.log(`The form finished submission with status: ${status} and data: ${JSON.stringify(data)}`);
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's chat!</h3>
                    <p className="contact__details">Don't like forms? Let's talk on LinkedIn!</p>
                </div>
                <form onSubmit={getFormSubmitHandler(onSubmitCallback)} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                placeholder="Name"
                                name="name"
                                required
                            />
                        </div>
                        <div className="contact__form-div">
                            <input
                                type="email"
                                className="contact__form-input"
                                placeholder="Email"
                                name="email"
                                required
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            className="contact__form-input"
                            placeholder="Subject"
                            name="subject"
                            required
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <textarea
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Write your message here"
                            name="message"
                            required
                        ></textarea>
                    </div>
                    <button className="btn contact__button" type="submit">
                        {formState.status === 'loading' ? 'Sending...' : formState.status === 'success' ? 'Message Sent' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
