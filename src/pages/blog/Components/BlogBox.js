import React, {useState} from 'react';
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom';

const data = '<p>In recent years, the Yamuna Expressway has emerged to be one of the promising investment destinations. It is a 6-lane wide and 165.5 km long access-controlled expressway in the Indian state of Uttar Pradesh. This project was ideated with the aim of reducing the time travel between Delhi and Agra, which has indeed been successfully accomplished. </p> <p>But do you know more about why it appears to be the most promising community for real estate buyers? Well, the answer is - The Yamuna Expressway provides an excellent opportunity to invest now and stay financially secure tomorrow. Best of all, the expansion of IT centres, well-equipped educational institutions, and solid road connectivity will also enable real estate investors to make better investments. If you&#39;re on the hunt for investment opportunities, Noida Expressway is where you should start. The area around the Noida expressway is thriving for a variety of reasons, which we will cover in detail in this blog section. Let&#39;s look at some of the distinguishing features of this expressway that make it one of the greatest places to invest.</p><h5>Expanding Commercial Opportunities </h5><p>The Yamuna Expressway region is experiencing tremendous commercial growth, making it an attractive investment location. The opening of the Jewar International Airport is expected to increase demand for commercial space, hotels, and hospitality services. The area is also seeing an increase in industrial and manufacturing activity, drawing both global firms and startups. The Uttar Pradesh government&#39;s construction of the Film City enhances the region&#39;s commercial possibilities by luring the entertainment sector and creating job opportunities.</p><h5>Accessibility</h5><p>As mentioned above, The Yamuna Expressway connects some of the major cities like Greater Noida, Noida, and Agra to Delhi NCR.  It is well connected to other major national routes such as NH-24, NH-58, and NH-1. The expressway connects several important cities, including Ghaziabad, Meerut, and Agra.</p><h5>Excellent Connectivity</h5><p>Investing in the Yamuna Expressway region means having access to essential locations at all times. The highway connects Noida, Greater Noida, and the future Jewar International Airport, which is expected to be India&#39;s largest airport. This exceptional connectivity not only makes travel more convenient but also draws enterprises, businesses, and shipping groups to establish a presence in the region, driving demand for commercial space and bringing up investment opportunities.</p><h5>Developing Infrastructure</h5><p>The infrastructure in any region plays a crucial role in determining the number of investors attracted to the area. The Yamuna Expressway region is witnessing rapid development with the construction of residential townships, shopping complexes, educational institutions, healthcare facilities, and recreational centres. This robust infrastructure encourages investment while also ensuring a comfortable living for people. </p><h5>The Bottom Line</h5><p>Investing in Yamuna Expressway properties will yield excellent returns as people continue to flock there. So, if you have money set aside for real estate investments, now is the perfect time to book properties with Wall Rock Developers. Our ongoing commercial project Yamuna City Mall at Gaur Yamuna City, Yamuna Expressway, is going to be a hub for businesses and entertainment. The best thing about this project is that it is close to Noida International Airport & Upcoming Film City. Invest now and get high returns by trusting Wall Rock Developers.</p>';


export default function BlogBox(props) {
    const [showMore, setShowMore] = useState(false);
    return (
        <>
        <section className="blog-page">
         <div className="container">
             <div className="row">
                 <div className="col-md-6">
                 <div class="article-box">
                     <div class="hover-img">
                         <img src="/images/ycm-blog.webp" class="img-fluid" />
                     </div>
                     <div class="article-content">
                         <h4>What makes Yamuna Expressway the perfect location for your next investment?</h4>
                         {
                         showMore? 
                         <>
                            {Parser(data)}
                         </>: 
                         <>{Parser(data.substring(0, 80))}
                         </>
                         }
  <Link to={"/blog/"+"what-makes-yamuna-expressway-the-perfect-location-for-your-next-investment"} className='btn btn-default' onClick={()=>setShowMore(!showMore)}>{showMore? "Show Less": "Show More"}</Link>
                         
                     </div>
                 </div>
                 </div>
             </div>
         </div>
         </section> 
     </>
    );
}
