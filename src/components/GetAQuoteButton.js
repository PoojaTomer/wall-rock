import React,{useState} from 'react';
import GetAQuote from './GetAQuote';

export default function GetAQuoteButton(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
        <>
       <a data-aos="fade-up" data-aos-delay="400" data-aos-offset="0" onClick={showModal} className="btn custom-btn">{props.Title}</a>
     
       <GetAQuote isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} {...props} />
        </>
    );
}
