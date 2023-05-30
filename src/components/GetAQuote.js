import React, { useEffect, useState, useRef } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import REGX from '../constants/Regx';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

const GetAQuote = (props) => {
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
        services: "-1",
        servicesError: "",
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
            services: "-1",
            servicesError: "",
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
            GetAQuoteFormField.fullNameError = "this field is required";
        } else if (!REGX.FULLNAME.test(GetAQuoteFormField.fullName)) {
            errorFound = true;
            GetAQuoteFormField.fullNameError = "alphabatic only";
        } else {
            GetAQuoteFormField.fullNameError = "";
        }
        if (GetAQuoteFormField.email === "") {
            errorFound = true;
            GetAQuoteFormField.emailError = "this field is required";
        } else if (!REGX.EMAIL.test(GetAQuoteFormField.email)) {
            errorFound = true;
            GetAQuoteFormField.emailError = "enter valid email";
        } else {
            GetAQuoteFormField.emailError = "";
        }
        if (GetAQuoteFormField.mobile === "") {
            errorFound = true;
            GetAQuoteFormField.mobileError = "this field is required";
        } else if (!REGX.MOBILE_NUMBER.test(GetAQuoteFormField.mobile)) {
            errorFound = true;
            GetAQuoteFormField.mobileError = "enter valid phone number";
        } else {
            GetAQuoteFormField.mobileError = "";
        }
        if (GetAQuoteFormField.services === "-1") {
            errorFound = true;
            GetAQuoteFormField.servicesError = "this field is required";
        } else {
            GetAQuoteFormField.servicesError = "";
        }

        if (GetAQuoteFormField.message === "") {
            errorFound = true;
            GetAQuoteFormField.messageError = "this field is required";
        } else {
            GetAQuoteFormField.messageError = "";
        }

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
            formData.append("service", GetAQuoteFormField.services);
            formData.append("message", GetAQuoteFormField.message);

            axios({
                url: `https://phpstack-281388-2949987.cloudwaysapps.com/mails/get_quote.php`,
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
                        services: "-1",
                        servicesError: "",
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
    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };
    return (
        <Modal className="custom-pop" open={props.isModalVisible} onOk={() => props.handleOk()} onCancel={() => props.handleCancel()} footer={null} closable={false}>
        <button type="button" className="close" onClick={() => props.handleOk()}>
             <span aria-hidden="true">&times;</span>
           </button>
            <div className="form-content">
            <h3>Let's Talk <br /><span className="highlight">Get In Touch</span></h3>
            <form onSubmit={(e) => submitHandler(e)}>
                       <input type="hidden" className="form-control" name="enquery-form" id="enquery-form3" value="enquery-form" placeholder="Enquery Form" />
                   <ul className="form-list">
                       <li>
                           <input type="text" name="name" className="form-control" placeholder="Full Name*" value={GetAQuoteForm.fullName} onChange={e => setGetAQuoteForm({
                            ...GetAQuoteForm,
                            fullName: e.target.value,
                            fullNameError: ""
                        })}
                            disabled={GetAQuoteForm.processing} />
                            <span className='error'>{GetAQuoteForm.fullNameError}</span>
                       </li>
                       <li>
                           <input type="number" name="phone" onKeyPress={preventMinus} className="form-control" placeholder="Phone Number*" value={GetAQuoteForm.mobile} onChange={e => setGetAQuoteForm({
                                ...GetAQuoteForm,
                                mobile: e.target.value.slice(0,10),
                                mobileError: ""
                            })} disabled={GetAQuoteForm.processing} />
                                <span className='error'>{GetAQuoteForm.mobileError}</span>
                       </li>
                       <li>
                       <input type="email" name="email" className="form-control" placeholder="Email Address*" value={GetAQuoteForm.email} onChange={e => setGetAQuoteForm({
                            ...GetAQuoteForm,
                            email: e.target.value,
                            emailError: ""
                        })} disabled={GetAQuoteForm.processing} />
                            <span className='error'>{GetAQuoteForm.emailError}</span>
                       </li>
                       <li>
                        <select name="services" className="form-control" value={GetAQuoteForm.services} onChange={e => setGetAQuoteForm({
                            ...GetAQuoteForm,
                            services: e.target.value,
                            servicesError: ""
                        })} disabled={GetAQuoteForm.processing}>
                            <option value="-1" selected="">Select Services*</option>
                            <option value="Search Engine Optimization">Search Engine Optimization</option>
                            <option value="Social Media Optimization">Social Media Optimization</option>
                            <option value="Online Reputation Marketing">Online Reputation Marketing</option>
                            <option value="PPC">PPC</option>
                            <option value="Social Media Ads">Social Media Ads</option>
                            <option value="Wordpress Development">Wordpress Development</option>
                            <option value="Magento Development">Magento Development</option>
                            <option value="Shopify Development">Shopify Development</option>
                            <option value="React Development">React Development</option>
                            <option value="PHP Development">PHP Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Logo Design">Logo Design</option>
                            
                           </select>
                           <span className='error'>{GetAQuoteForm.servicesError}</span>
                       </li>
                       <li className="cnr-full">
                           <textarea rows="4" className="form-control" name="message" placeholder="Message*" value={GetAQuoteForm.message} onChange={e => setGetAQuoteForm({
                            ...GetAQuoteForm,
                            message: e.target.value,
                            messageError: ""
                        })}
                            disabled={GetAQuoteForm.processing}
                        ></textarea>
                            <span className='error'>{GetAQuoteForm.messageError}</span>
                       </li>
                       <li>
                    <ReCAPTCHA
                        ref={captchaRef}
                        sitekey="6Ldy6IEhAAAAAOnXdArKtwygfu6f3doYCblZQYHi"
                        size="invisible"
                        />
                    </li>
                       <li className="cnr-full text-center mt-3">
                           <input type="submit" value="Submit" className="btn-1" id="your_submit2" />
                       </li>
                   </ul>
               </form>
               
            </div>
        </Modal>
    )
}



export default GetAQuote;