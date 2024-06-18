import React, { useState } from 'react';
import { useFormData } from 'herotofu-react';
import "./contact.css";
import {Status} from "@/app/interfaces";

const Contact: React.FC = () => {
    const { formState, getFormSubmitHandler } = useFormData('https://public.herotofu.com/v1/b1bdc0d0-2db8-11ef-a512-2d50852e3019');
    const [formValues, setFormValues] = useState<Status>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormStatus('idle');
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    // const checkFormIsEmpty = () => {
    //     return !formValues.name && !formValues.email && !formValues.message && !formValues.subject;
    // }

// @ts-ignore
    const onSubmitCallback = ({ status, data }) => {
        console.log(`The form finished submission with status: ${status} and data: ${JSON.stringify(data)}`);
        if (status === 'success') {
            setFormValues({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setFormStatus('success');
        } else {
            setFormStatus('error');
        }
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let&apos;s chat!</h3>
                    <p className="contact__details">Don&apos;t like forms? Let&apos;s talk on LinkedIn!</p>
                </div>
                <form onSubmit={getFormSubmitHandler(onSubmitCallback)} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                placeholder="Name"
                                name="name"
                                value={formValues.name}
                                onChange={handleInputChange}
                                required
                                disabled={formState.status === 'loading'}
                            />
                        </div>
                        <div className="contact__form-div">
                            <input
                                type="email"
                                className="contact__form-input"
                                placeholder="Email"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                                required
                                disabled={formState.status === 'loading'}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            className="contact__form-input"
                            placeholder="Subject"
                            name="subject"
                            value={formValues.subject}
                            onChange={handleInputChange}
                            required
                            disabled={formState.status === 'loading'}
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <textarea
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Write your message here"
                            name="message"
                            value={formValues.message}
                            onChange={handleInputChange}
                            required
                            disabled={formState.status === 'loading'}
                        ></textarea>
                    </div>
                    {formStatus === 'success' && <div className="contact-message thank-you-message">Thank you! Your message has been sent.</div>}
                    {formStatus === 'error' && <div className="contact-message error-message">There was an error submitting your message. Please try again.</div>}
                    <button
                        className="btn contact__button"
                        type="submit"
                        disabled={formState.status === 'loading'}
                    >
                        {formState.status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>

                </form>
            </div>
        </section>
    );
};

export default Contact;
