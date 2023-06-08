import React, { useEffect, useState, useRef } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Slide } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import {
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import REGX from '../constants/Regx';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
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
        <Dialog
        className="custom-pop"
        open={props.isModalVisible}
        onOk={() => props.handleOk()}
        footer={null}
        closable={false}
        onClose={props.handleClose}
        TransitionComponent={Transition}
        >
      <Button onClick={props.handleCancel} color="error" className='close-popup'>
          <CloseIcon />
        </Button>
        <DialogContent>
          <DialogTitle id="alert-dialog-slide-title" className="popup-heading mb-3">{"Schedual A Visit"}</DialogTitle>
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
                       <li  className="cnr-full">
                       <input type="email" name="email" className="form-control" placeholder="Email Address*" value={GetAQuoteForm.email} onChange={e => setGetAQuoteForm({
                            ...GetAQuoteForm,
                            email: e.target.value,
                            emailError: ""
                        })} disabled={GetAQuoteForm.processing} />
                            <span className='error'>{GetAQuoteForm.emailError}</span>
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
                           <input type="submit" value="Submit" className="btn btn-default" id="your_submit2" />
                       </li>
                   </ul>
               </form>
               
            </DialogContent>
        </Dialog>
    )
}



export default GetAQuote;