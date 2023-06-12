import React, {useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import REGX from '../constants/Regx';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

export default function GetInTouch(props) {
    const navigate = useNavigate();
    const captchaRef = useRef(null)
    const [discoveryCallForm, setDiscoveryCallForm] = useState({
        processing: false,
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        email: "",
        emailError: "",
        mobile: "",
        mobileError: "",
        services: "-1",
        servicesError: "",
        message: "",
        messageError: ""
    });


    const submitHandler = (e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        let errorFound = false;

        setDiscoveryCallForm({
            ...discoveryCallForm,
            processing: true
        });

        let DiscoveryCallFormField = { ...discoveryCallForm };

        if (DiscoveryCallFormField.firstName === "") {
            errorFound = true;
            DiscoveryCallFormField.firstNameError = "this field is required";
        } else if (!REGX.FULLNAME.test(DiscoveryCallFormField.firstName)) {
            errorFound = true;
            DiscoveryCallFormField.firstNameError = "alphabatic only";
        } else {
            DiscoveryCallFormField.firstNameError = "";
        }
        if (DiscoveryCallFormField.lastName === "") {
            errorFound = true;
            DiscoveryCallFormField.lastNameError = "this field is required";
        } else if (!REGX.FULLNAME.test(DiscoveryCallFormField.lastName)) {
            errorFound = true;
            DiscoveryCallFormField.lastNameError = "alphabatic only";
        } else {
            DiscoveryCallFormField.lastNameError = "";
        }
        if (DiscoveryCallFormField.email === "") {
            errorFound = true;
            DiscoveryCallFormField.emailError = "this field is required";
        } else if (!REGX.EMAIL.test(DiscoveryCallFormField.email)) {
            errorFound = true;
            DiscoveryCallFormField.emailError = "enter valid email";
        } else {
            DiscoveryCallFormField.emailError = "";
        }
        if (DiscoveryCallFormField.mobile === "") {
            errorFound = true;
            DiscoveryCallFormField.mobileError = "this field is required";
        } else if (!REGX.MOBILE_NUMBER.test(DiscoveryCallFormField.mobile)) {
            errorFound = true;
            DiscoveryCallFormField.mobileError = "enter valid phone number";
        } else {
            DiscoveryCallFormField.mobileError = "";
        }
        if (DiscoveryCallFormField.services === "-1") {
            errorFound = true;
            DiscoveryCallFormField.servicesError = "this field is required";
        } else {
            DiscoveryCallFormField.servicesError = "";
        }

        if (DiscoveryCallFormField.message === "") {
            errorFound = true;
            DiscoveryCallFormField.messageError = "this field is required";
        } else {
            DiscoveryCallFormField.messageError = "";
        }

        if (errorFound) {
            setDiscoveryCallForm({
                ...DiscoveryCallFormField,
                processing: false
            });

        } else {
            let formData = new FormData();
            formData.append("fullName", DiscoveryCallFormField.firstName  +" "+ DiscoveryCallFormField.lastName);
            formData.append("email", DiscoveryCallFormField.email);
            formData.append("mobile", DiscoveryCallFormField.mobile);
            formData.append("service", DiscoveryCallFormField.services);
            formData.append("message", DiscoveryCallFormField.message);
            axios({
                url: `https://www.newvisiondigital.co/mails/discovery_call.php`,
                method: "post",
                responseType: 'json',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.data.status === "success") {
                    setDiscoveryCallForm({
                        processing: false,
                        firstName: "",
                        firstNameError: "",
                        lastName: "",
                        lastNameError: "",
                        email: "",
                        emailError: "",
                        mobile: "",
                        mobileError: "",
                        services: "-1",
                        servicesError: "",
                        message: "",
                        messageError: ""
                    });
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
        const preventMinus = (e) => {
            if (e.code === 'Minus') {
                e.preventDefault();
            }
        };
    return (
        <>
       
        <section className="form-cta">
            <div className="row align-items-center">
                <div className="col-md-6 pr-0">
                    <div className='form-left'>
                        <h4 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">GET IN TOUCH</h4>
                        <h2 data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Make your <br />
                        dreams come <br/>
                        true!</h2>
                       <Link className='btn btn-secondary'>Know More</Link>
                      </div>
                </div>
                <div className="col-md-6">
                    <div className="aish-form">
                            <form onSubmit={(e) => submitHandler(e)}>
                            <ul className="form-list">
                                <li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">
                                    <input type="text" className="form-control" placeholder="First Name*" value={discoveryCallForm.firstName} onChange={e => setDiscoveryCallForm({
                                            ...discoveryCallForm,
                                            firstName: e.target.value,
                                            firstNameError: ""
                                        })} disabled={discoveryCallForm.processing} />
                                     <span className='error'>{discoveryCallForm.firstNameError}</span>
                                </li>
                                {/* <li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">
                                    <input type="email" className="form-control" placeholder="Email*" value={discoveryCallForm.email} onChange={e => setDiscoveryCallForm({
                                                ...discoveryCallForm,
                                                email: e.target.value,
                                                emailError: ""
                                            })} disabled={discoveryCallForm.processing} />
                                    <span className='error'>{discoveryCallForm.emailError}</span>
                               </li> */}
                                <li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0"> 
                                    <input type="number" onKeyPress={preventMinus} className="form-control" placeholder="Phone*" value={discoveryCallForm.mobile} onChange={e => setDiscoveryCallForm({
                                            ...discoveryCallForm,
                                            mobile: e.target.value.slice(0, 10),
                                            mobileError: ""
                                        })} disabled={discoveryCallForm.processing} />
                                    <span className='error'>{discoveryCallForm.mobileError}</span>
                                </li>
                              
                                 <li className="cnr-full" data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">
                                    <textarea placeholder="Message*" className="form-control" rows="4" value={discoveryCallForm.message} onChange={e => setDiscoveryCallForm({
                                            ...discoveryCallForm,
                                            message: e.target.value,
                                            messageError: ""
                                        })}
                                            disabled={discoveryCallForm.processing}
                                        >
                                    </textarea>
                                    <span className='error'>{discoveryCallForm.messageError}</span>
                                </li>
                                <li className="cnr-full"> 
                                    <ReCAPTCHA ref={captchaRef} sitekey="6Ldy6IEhAAAAAOnXdArKtwygfu6f3doYCblZQYHi"
                                        size="invisible" />
                                </li>
                            <li className="cnr-full" data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">
                                <button className='btn btn-secondary'>Submit</button>
                            </li>
                        </ul>
                    </form>
                </div>
                </div>
        </div>
        </section>
    </>
    );
}
