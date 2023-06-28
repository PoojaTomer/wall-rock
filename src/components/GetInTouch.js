import React, {useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import REGX from '../constants/Regx';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

export default function GetInTouch(props) {
    const navigate = useNavigate();
    const captchaRef = useRef(null)
    const [GetAQuoteForm, setGetAQuoteForm] = useState({
        processing: false,
        fullName: "",
        fullNameError: "",
        email: "",
        emailError: "",
        mobile: "",
        mobileError: "",
        message: "",
        messageError: ""
    });

    useEffect(() => {
        setGetAQuoteForm({
            processing: false,
            fullName: "",
            fullNameError: "",
            email: "",
            emailError: "",
            mobile: "",
            mobileError: "",
            message: "",
            messageError: ""
        });
    }, [props.isModalVisible]);

    const submitHandler = (e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        let errorFound = false;

        setGetAQuoteForm({
            ...GetAQuoteForm,
            processing: true
        });

        let GetAQuoteFormField = { ...GetAQuoteForm };

        if (GetAQuoteFormField.fullName === "") {
            errorFound = true;
            GetAQuoteFormField.fullNameError = "This field is required";
        } else if (!REGX.FULLNAME.test(GetAQuoteFormField.fullName)) {
            errorFound = true;
            GetAQuoteFormField.fullNameError = "Alphabatic only";
        } else {
            GetAQuoteFormField.fullNameError = "";
        }
        if (GetAQuoteFormField.email === "") {
            errorFound = true;
            GetAQuoteFormField.emailError = "This field is required";
        } else if (!REGX.EMAIL.test(GetAQuoteFormField.email)) {
            errorFound = true;
            GetAQuoteFormField.emailError = "Enter valid email";
        } else {
            GetAQuoteFormField.emailError = "";
        }
        if (GetAQuoteFormField.mobile === "") {
            errorFound = true;
            GetAQuoteFormField.mobileError = "This field is required";
        } else if (!REGX.MOBILE_NUMBER.test(GetAQuoteFormField.mobile)) {
            errorFound = true;
            GetAQuoteFormField.mobileError = "Enter valid phone number";
        } else {
            GetAQuoteFormField.mobileError = "";
        }
        // if (GetAQuoteFormField.message === "") {
        //     errorFound = true;
        //     GetAQuoteFormField.messageError = "This field is required";
        // } else {
        //     GetAQuoteFormField.messageError = "";
        // }

        if (errorFound) {
            setGetAQuoteForm({
                ...GetAQuoteFormField,
                processing: false
            });

        } else {
            let formData = new FormData();
            formData.append("fullName", GetAQuoteFormField.fullName);
            formData.append("email", GetAQuoteFormField.email);
            formData.append("mobile", GetAQuoteFormField.mobile);
            formData.append("message", (GetAQuoteFormField.message.length==0?props.message:GetAQuoteFormField.message));

            axios({
                url: `https://wallrock.in/mails/get_quote.php`,
                method: "post",
                responseType: 'json',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.data.status === "success") {
                    setGetAQuoteForm({
                        processing: false,
                        fullName: "",
                        fullNameError: "",
                        email: "",
                        emailError: "",
                        mobile: "",
                        mobileError: "",
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
            <div className="row">
                <div className="col-md-6 pr-0">
                    <div className='form-left'>
                        {
                            props.Title?(
                                <>
                                <h4 className='mb-5' data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">{props.Title}</h4>
                                </>
                            ):
                            <>
                           <h4 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">GET IN TOUCH</h4>
                        <h2 data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Make your <br />
                        dreams come <br/>
                        true!</h2>
                            </>
                        }
                   
                       <Link to="/contact" className='btn btn-secondary'>Know More</Link>
                      </div>
                </div>
                <div className="col-md-6">
                    <div className="aish-form">
                            <form onSubmit={(e) => submitHandler(e)}>
                            <ul className="form-list">
                                <li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">
                                    <input type="text" className="form-control" placeholder="First Name*" value={GetAQuoteForm.fullName} onChange={e => setGetAQuoteForm({
                                            ...GetAQuoteForm,
                                            fullName: e.target.value,
                                            fullNameError: ""
                                        })} disabled={GetAQuoteForm.processing} />
                                     <span className='error'>{GetAQuoteForm.fullNameError}</span>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0"> 
                                    <input type="number" onKeyPress={preventMinus} className="form-control" placeholder="Phone*" value={GetAQuoteForm.mobile} onChange={e => setGetAQuoteForm({
                                            ...GetAQuoteForm,
                                            mobile: e.target.value.slice(0, 10),
                                            mobileError: ""
                                        })} disabled={GetAQuoteForm.processing} />
                                    <span className='error'>{GetAQuoteForm.mobileError}</span>
                                </li>
                                <li className="cnr-full" data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">
                                    <input type="email" className="form-control" placeholder="Email*" value={GetAQuoteForm.email} onChange={e => setGetAQuoteForm({
                                                ...GetAQuoteForm,
                                                email: e.target.value,
                                                emailError: ""
                                            })} disabled={GetAQuoteForm.processing} />
                                    <span className='error'>{GetAQuoteForm.emailError}</span>
                               </li>
                               
                              
                                 <li className="cnr-full" data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">
                                    <textarea placeholder={props.message?props.message:"Message"} className="form-control" rows="4" value={GetAQuoteForm.message} onChange={e => setGetAQuoteForm({
                                            ...GetAQuoteForm,
                                            message: e.target.value,
                                            messageError: ""
                                        })}
                                            disabled={GetAQuoteForm.processing}
                                        >
                                    </textarea>
                                    <span className='error'>{GetAQuoteForm.messageError}</span>
                                </li>
                                <li className="cnr-full"> 
                                <ReCAPTCHA
                                    ref={captchaRef}
                                    sitekey="6LccULUmAAAAAL50RQKodEjS5sP6v9bExd9eHYBY"
                                    size="invisible"
                                    />
                                </li>
                            <li className="cnr-full" data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">
                                <button type="submit" className='btn btn-secondary' value="Send">Submit</button>
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
