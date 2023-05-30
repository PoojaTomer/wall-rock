import React,{useState} from 'react';
import CtaFloatForm from './CtaFloat';
import GetAQuote from './GetAQuote';

export default function GetAQuoteButton(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isCtaVisible, setIsCtaVisible] = useState(false);
    const showCta = () => {
      setIsCtaVisible(true);
    };
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
      setIsCtaVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
        <>
       <a data-aos="fade-up" data-aos-delay="400" data-aos-offset="0" onClick={props.CtaFloat? showCta : showModal} className={props.btn ? props.btn:"btn-1"}>{props.Title}</a>
       {
        isCtaVisible === true && (
          <CtaFloatForm isCtaVisible={isCtaVisible} handleOk={handleOk} handleCancel={handleCancel} />
        )
       }
       <GetAQuote isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} {...props} />
        </>
    );
}
