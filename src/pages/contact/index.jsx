import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';
import REGX from '../../constants/Regx';

export default function Contact(props) {
    const navigate = useNavigate();
    const captchaRef = useRef(null)
const [contactForm, setContactForm] = useState({
    processing: false,
    fullName: "",
    fullNameError: "",
    email:"",
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
        email:"",
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
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    let errorFound = false;

    setContactForm({
        ...contactForm,
        processing: true
    });

    let contactFormField = { ...contactForm };

    if (contactFormField.fullName === "") {
        errorFound = true;
        contactFormField.fullNameError = "this field is required";
    } else if (!REGX.FULLNAME.test(contactFormField.fullName)) {
        errorFound = true;
        contactFormField.fullNameError = "alphabatic only";
    } else {
        contactFormField.fullNameError = "";
    }
    if (contactFormField.email === "") {
        errorFound = true;
        contactFormField.emailError = "this field is required";
    } else if (!REGX.EMAIL.test(contactFormField.email)) {
        errorFound = true;
        contactFormField.emailError = "enter valid email";
    } else {
        contactFormField.emailError = "";
    }
    if (contactFormField.mobile === "") {
        errorFound = true;
        contactFormField.mobileError = "this field is required";
    } else if (!REGX.MOBILE_NUMBER.test(contactFormField.mobile)) {
        errorFound = true;
        contactFormField.mobileError = "enter valid phone number";
    } else {
        contactFormField.mobileError = "";
    }
    if (contactFormField.company === "-1") {
        errorFound = true;
        contactFormField.companyError = "this field is required";
    } else {
        contactFormField.companyError = "";
    }

    if (contactFormField.message === "") {
        errorFound = true;
        contactFormField.messageError = "this field is required";
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
        formData.append("service", contactFormField.services);
        formData.append("message", contactFormField.message);

        fetch({
            url: `https://phpstack-281388-2949987.cloudwaysapps.com/mails/get_quote.php`,
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
                    email:"",
                    emailError: "",
                    company: "",
                    companyError: "",
                    mobile: "",
                    mobileError: "",
                    message: "",
                    messageError: ""
                });
                props.handleCancel();
                navigate("/thank-you");
            } else {
                alert(response.data.message);
            }
            // alert("success");
        }, error => {
            console.log("error", error);
            alert("error");
        });
    }
}

    return (
        <>
             <Helmet>
                <title>{props.title}</title>
                {/* <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
                <meta name="keyword" content="Nvd usa" /> */}
            </Helmet>
            <Breadcrumb Title="Contact Us" Image={IMAGES.homepage.Banner} /> 
            <section className='contact-1'>
                <div className='container'>
                <h3 className='main-heading text-center'>Get In Touch With Us</h3>
                    <div className="row mt-5">
                        <div className='col-md-5 d-flex align-items-stretch'>
                            <div className='shadow-box'>
                                <img src={IMAGES.headerImg.HeaderLogo} className="img-fluid" alt="wallrock logo" />
                                <ul className='add-list'> 
                                <li><FaPhoneAlt /> <a href="tel:+91-9310786845">+91-9310786845</a></li>
                                <li><FaEnvelope /> <a href="mailto:info@yamunacitymall.co.in">info@yamunacitymall.co.in</a></li>
                                <li><FaMapMarkerAlt /> C-14, Gaur Yamuna City, Yamuna Expressway</li>
                                </ul>
                            </div>
                           
                        </div>
                        <div className='col-md-7 d-flex align-items-stretch'>
                        <div className="contact-form">
                        <form onSubmit={(e) => submitHandler(e)}>
                                <div className="row">
                                    <div className="col-md-6">
                                    <div className="form-group">
                                            <input type="text" className='form-control' placeholder="Name" name="name" value={contactForm.fullName} onChange={e => setContactForm({
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
                                            <input type="text" className='form-control' placeholder="Company" name="Company" value={contactForm.company} onChange={e => setContactForm({
                                                ...contactForm,
                                                company: e.target.value,
                                                companyError: ""
                                            })} disabled={contactForm.processing} />
                                                <span className='error'>{contactForm.companyError}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                            <input type="email" className='form-control' placeholder="Email" name="Email" value={contactForm.email} onChange={e => setContactForm({
                                                ...contactForm,
                                                email: e.target.value,
                                                emailError: ""
                                            })} disabled={contactForm.processing} />
                                                <span className='error'>{contactForm.emailError}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className='form-control' placeholder="Contact no" name="ContactNo" value={contactForm.mobile} onChange={e => setContactForm({
                                                ...contactForm,
                                                mobile: e.target.value.slice(0,10),
                                                mobileError: ""
                                            })} disabled={contactForm.processing} />
                                                <span className='error'>{contactForm.mobileError}</span>
                                        </div>
                                    </div>
                              
                                <div className="col-md-12">
                                    <textarea className='form-control' rows="4" placeholder="Message" name="Message" value={contactForm.message} onChange={e => setContactForm({
                                        ...contactForm,
                                        message: e.target.value,
                                        messageError: ""
                                    })}
                                        disabled={contactForm.processing}
                                    ></textarea>
                                        <span className='error'>{contactForm.messageError}</span>
                                </div>
                                <ReCAPTCHA
                                    ref={captchaRef}
                                    sitekey="6Ldy6IEhAAAAAOnXdArKtwygfu6f3doYCblZQYHi"
                                    size="invisible"
                                 />
                                <div className="col-md-12 text-center mt-4">
                                    <button type="submit" className='btn btn-default btn-block' value="Send">Send</button>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6479632254045!2d77.21426897463434!3d28.6403111837289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd475271ed2d%3A0x8a41328b1b03db05!2sWall%20Rock%20Infratech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1685034417985!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
       
        </>
    );
}
