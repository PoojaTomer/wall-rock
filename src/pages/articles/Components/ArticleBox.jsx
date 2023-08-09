import React, {useState} from 'react';
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom';

const data = '<p>In a significant development for the national capital region (NCR), Prime Minister Narendra Modi laid the foundation stone for the highly anticipated Noida International Airport (NIA) in Jewar, Uttar Pradesh. Set to become India&#39;s largest airport, the Noida airport is poised to reshape the region&#39;s infrastructure landscape and catalyse real estate growth in Greater Noida, Yamuna Expressway, and surrounding areas.</p> <p>Being constructed by Switzerland&#39;s Zurich Airport International, which has garnered accolades as one of the worlds premier airports, the Noida International Airport is expected to commence operations by the end of 2024. Its development is divided into four phases, with the ultimate aim of expanding its capacity to handle a staggering 70 million passengers per year. However, the initial phase will feature </p><P>The airport&#39;s design reflects its Indian heritage, drawing inspiration from iconic landmarks such as the ghats of Haridwar and Varanasi. Moreover, the NIA is poised to serve as a crucial air cargo gateway for North India, enhancing trade and commerce in the region.</p><p>The ambitious greenfield project involves an estimated investment of Rs 5,730 crores and occupies a sprawling 1,300-hectare site. Tata Projects, operating under the engineering, procurement, and construction (EPC) model, is overseeing the construction of the airport&#39;s terminal, runway, and ancillary infrastructure.</p><p>The introduction of the Noida International Airport marks a significant milestone for the region, as it will alleviate congestion at the Delhi Indira Gandhi International Airport and create numerous employment opportunities. Additionally, the airports inauguration is expected to catapult Noida onto the global logistics map, resulting in economic multiplier effects encompassing job creation, infrastructure development, and appreciation in real estate prices.</p><p>The introduction of the Noida International Airport marks a significant milestone for the region, as it will alleviate congestion at the Delhi Indira Gandhi International Airport and create numerous employment opportunities. Additionally, the airport&#39;s inauguration is expected to catapult Noida onto the global logistics map, resulting in economic multiplier effects encompassing job creation, infrastructure development, and appreciation in real estate prices.</p><p>Real estate experts believe that the formation of the Jewar Airport will transform Greater Noida and Yamuna Expressway into end-user-centric markets, offering viable alternatives to more expensive locations like Gurgaon and Delhi. The newfound connectivity and infrastructure upgrades, coupled with the airport&#39;s impact, are likely to stimulate substantial real estate development in the region.</p><p>Previously perceived as investor-driven markets, Greater Noida and Yamuna Expressway grappled with challenges related to liveability. However, the Jewar Airport&#39;s presence is anticipated to attract a surge of end-users, driving steady capital increase based on genuine demand rather than speculation.</p><p>As the construction is about to be completed, the region eagerly anticipates the profound positive changes it will bring.</p>';
const datasec = '<p>The city of Jewar, which is a part of Uttar Pradesh&#39;s Gautam Buddh Nagar district, is going to witness a significant transition in its healthcare system. A 100-bed hospital and trauma centre are being constructed near the Yamuna Expressway to address the urgent medical requirements of the vicinity. The region will benefit from this state-of-the-art facility, which is expected to cost around Rs 45 crore, by receiving comprehensive healthcare and satisfying the growing demand for easily accessible medical care.</p> <p>Jewar MLA Dhirendra Singh, and Dr Sunil Sharma, the Chief Medical Officer for Gautam Budh Nagar, laid the foundation stone for the 100-bed trauma unit and the integrated hospital. During the ceremony, MLA Dhirendra Sigh said that the Expressway&#39;s trauma centre will indeed help to save many lives. He added that during the second wave of COVID, the region sensed an urgent need for a large government hospital. </p><P>Government, healthcare experts, and local officials are working together to provide a better and safer future for Jewar and its communities.</p><h5>Facilities and Financial Assistance</h5><p>The State government has already released the fund of Rs 6 crore for the hospital&#39;s construction, demonstrating its commitment to improving healthcare facilities. The Yamuna Expressway Industrial Development Authority substantially contributed by granting the facility access to six acres of land at a cost-effective rate of Rs 1 per square metre. The support of the federal and local governments ensures the project&#39;s success and brings top-notch healthcare closer to the general public.</p><p>The MLA showed his concern about accidents taking place. The expressway has witnessed approximately 750 deaths since its opening in August 2012. Thus, the construction of this facility will make it possible to save lives by providing accident victims with quick medical attention.</p><h5>Region Benefits</h5><p>The Jewar Hospital and Trauma Centre will offer medical care to locals and accident victims, many of whom cannot afford private hospitals due to financial constraints. The need for a government hospital in the area has steadily increased, especially during the second wave of the COVID-19 outbreak. With the help of this institution, those in need will have access to critical medical care. Also, the Yamuna Expressway region is growing in terms of logistics, industries, shops, and many more, making it one of the <a href="https://wallrock.in/yamuna-city-mall"><strong className="text-ylw">best commercial investments in Noida. </strong></a></p>';


export default function ArticleBox(props) {
    const [showMore, setShowMore] = useState(false);
    const [showMore1, setShowMore1] = useState(false);
    return (
        <>
           <section className="articles-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <div class="article-box">
                        <div class="hover-img">
                            <img src="/images/article-1.webp" class="img-fluid" />
                        </div>
                        <div class="article-content">
                         <h4>Noida International Airport as a Game-Changer for Delhi-NCR's Infrastructure and Real Estate</h4>
              
                         {
                         showMore? 
                         <>
                            {Parser(data)}
                         </>: 
                         <>{Parser(data.substring(0, 80))}
                         </>
                         }

                         <Link to={"/articles/"+"noida-internation-airport-as-a-game-changer-for-delhi-ncr-infrastructure-and-real-estate"} className='btn btn-default' onClick={()=>setShowMore(!showMore)}>{showMore? "Show Less": "Show More"}</Link>
                        
                     </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div class="article-box">
                        <div class="hover-img">
                            <img src="/images/article2.jpg" class="img-fluid" />
                        </div>
                        <div class="article-content">
                         <h4>100-Bed Speciality Hospital and Trauma Centre To Be Constructed in Jewar, UP</h4>
              
                         {
                         showMore1? 
                         <>
                            {Parser(datasec)}
                         </>: 
                         <>{Parser(datasec.substring(0, 80))}
                         </>
                         }

                         <Link to={"/articles/"+"100-bed-speciality-hospital-and-trauma-centre-to-be-constructed-in-jewar-up"} className='btn btn-default' onClick={()=>setShowMore1(!showMore1)}>{showMore1? "Show Less": "Show More"}</Link>
                        
                     </div>
                    </div>
                    </div>
                </div>
            </div>
            </section> 
        </>
    );
}
