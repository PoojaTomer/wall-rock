import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
// import BlueLogo from '../../assets/images/blue-logo.png';
import Breadcrumb from '../../components/Breadcrumb';
import REGX from '../../constants/Regx';

export default function Contact(props) {
    const navigate = useNavigate();

    const [contactForm, setContactForm] = useState({
        processing: false,
        fullName: "",
        fullNameError: "",
        email: "",
        emailError: "",
        company: "",
        companyError: "",
        mobile: "",
        mobileError: "",
        message: "",
        messageError: ""
    })
    useEffect(() => {
        setContactForm({
            processing: false,
            fullName: "",
            fullNameError: "",
            email: "",
            emailError: "",
            company: "",
            companyError: "",
            mobile: "",
            mobileError: "",
            message: "",
            messageError: ""
        });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        let errorFound = false;

        setContactForm({
            ...contactForm,
            processing: true
        });

        let contactFormField = { ...contactForm };

        if (contactFormField.fullName === "") {
            errorFound = true;
            contactFormField.fullNameError = "This field is required";
        } else if (!REGX.FULLNAME.test(contactFormField.fullName)) {
            errorFound = true;
            contactFormField.fullNameError = "Alphabatic only";
        } else {
            contactFormField.fullNameError = "";
        }
        if (contactFormField.email === "") {
            errorFound = true;
            contactFormField.emailError = "This field is required";
        } else if (!REGX.EMAIL.test(contactFormField.email)) {
            errorFound = true;
            contactFormField.emailError = "Enter valid email";
        } else {
            contactFormField.emailError = "";
        }
        if (contactFormField.mobile === "") {
            errorFound = true;
            contactFormField.mobileError = "This field is required";
        } else if (!REGX.MOBILE_NUMBER.test(contactFormField.mobile)) {
            errorFound = true;
            contactFormField.mobileError = "Enter valid phone number";
        } else {
            contactFormField.mobileError = "";
        }
        if (contactFormField.company === "") {
            errorFound = true;
            contactFormField.companyError = "This field is required";
        } else {
            contactFormField.companyError = "";
        }

        if (contactFormField.message === "") {
            errorFound = true;
            contactFormField.messageError = "This field is required";
        } else {
            contactFormField.messageError = "";
        }

        if (errorFound) {
            setContactForm({
                ...contactFormField,
                processing: false
            });

        } else {
            let formData = new FormData();
            formData.append("fullName", contactFormField.fullName);
            formData.append("email", contactFormField.email);
            formData.append("mobile", contactFormField.mobile);
            formData.append("company", contactFormField.company);
            formData.append("message", contactFormField.message);

            axios({
                url: `https://wallrock.in/mails/contact.php`,
                method: "post",
                responseType: 'json',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.data.status === "success") {
                    setContactForm({
                        processing: false,
                        fullName: "",
                        fullNameError: "",
                        email: "",
                        emailError: "",
                        company: "",
                        companyError: "",
                        mobile: "",
                        mobileError: "",
                        message: "",
                        messageError: ""
                    });
                    navigate("/thank-you");
                } else {
                    setContactForm({
                        ...contactFormField,
                        processing: false
                    });
                    alert(response.data.message);
                }
                // alert("success");
            }, error => {
                setContactForm({
                    ...contactFormField,
                    processing: false
                });
                console.log("error", error);
                alert("error");
            });
        }
    }

    return (
        <>
            <Helmet>
                <title>{props.title || "Wall Rock"}</title>
                <link rel="canonical" href="https://wallrock.in/contact" />
            </Helmet>
            <Breadcrumb Title="Contact Us" Image="/images/contact-banner.webp" />
            <section className='contact-1'>
                <div className='container'>
                    <h3 className='main-heading text-center'>Get In Touch With Us</h3>
                    <div className="row mt-5">
                        <div className='col-md-5 d-flex align-items-stretch'>
                            <div className='shadow-box'>
                                <img src={'/images/blue-logo.png'} className="img-fluid" alt="wallrock logo" />
                                <ul className='add-list'>
                                    <li><FaPhoneAlt /> <a href="tel:7037039009">70370 39009</a></li>
                                    <li><FaEnvelope /> <a href="mailto:sales@wallrock.in">sales@wallrock.in</a></li>
                                    <li><FaMapMarkerAlt /> <a href="https://goo.gl/maps/zdPqVfX3tnB6fNL96" target='_blank'>B-33, Sector 63, Noida , Uttar Pradesh 201303</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className='col-md-7 d-flex align-items-stretch'>
                            <div className="contact-form">
                                <form onSubmit={(e) => submitHandler(e)}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className='form-control' placeholder="Name*" name="fullName" value={contactForm.fullName} onChange={e => setContactForm({
                                                    ...contactForm,
                                                    fullName: e.target.value,
                                                    fullNameError: ""
                                                })}
                                                    disabled={contactForm.processing} />
                                                <span className='error'>{contactForm.fullNameError}</span>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className='form-control' placeholder="Company*" name="company" value={contactForm.company} onChange={e => setContactForm({
                                                    ...contactForm,
                                                    company: e.target.value,
                                                    companyError: ""
                                                })} disabled={contactForm.processing} />
                                                <span className='error'>{contactForm.companyError}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className='form-control' placeholder="Email*" name="email" value={contactForm.email} onChange={e => setContactForm({
                                                    ...contactForm,
                                                    email: e.target.value,
                                                    emailError: ""
                                                })} disabled={contactForm.processing} />
                                                <span className='error'>{contactForm.emailError}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="number" className='form-control' placeholder="Contact no*" name="mobile" value={contactForm.mobile} onChange={e => setContactForm({
                                                    ...contactForm,
                                                    mobile: e.target.value.slice(0, 10),
                                                    mobileError: ""
                                                })} disabled={contactForm.processing} />
                                                <span className='error'>{contactForm.mobileError}</span>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <textarea className='form-control' rows="4" placeholder="Message*" name="message" value={contactForm.message} onChange={e => setContactForm({
                                                ...contactForm,
                                                message: e.target.value,
                                                messageError: ""
                                            })}
                                                disabled={contactForm.processing}
                                            ></textarea>
                                            <span className='error'>{contactForm.messageError}</span>
                                        </div>

                                        <div className="col-md-12 text-center mt-4">
                                            <button type="submit" className='btn btn-default btn-block' disabled={contactForm.processing} value="Send">{`${contactForm.processing ? "Processing..." : "Send"}`}</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='contact-2'>
                <div className='container-fluid'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.4015154224926!2d77.37901!3d28.617725999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzAzLjgiTiA3N8KwMjInNDQuNCJF!5e0!3m2!1sen!2sin!4v1687764452126!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                </div>
            </section>

        </>
    );
}
