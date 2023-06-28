import React, {useState} from 'react';
import Parser from 'html-react-parser';
import { IMAGES } from '../../../constants/Image-Constant';

const data = '<p>In a significant development for the national capital region (NCR), Prime Minister Narendra Modi laid the foundation stone for the highly anticipated Noida International Airport (NIA) in Jewar, Uttar Pradesh. Set to become Indias largest airport, the Noida airport is poised to reshape the regions infrastructure landscape and catalyse real estate growth in Greater Noida, Yamuna Expressway, and surrounding areas.</p> <p>Being constructed by Switzerlands Zurich Airport International, which has garnered accolades as one of the worlds premier airports, the Noida International Airport is expected to commence operations by the end of 2024. Its development is divided into four phases, with the ultimate aim of expanding its capacity to handle a staggering 70 million passengers per year. However, the initial phase will feature </p><P>The airports design reflects its Indian heritage, drawing inspiration from iconic landmarks such as the ghats of Haridwar and Varanasi. Moreover, the NIA is poised to serve as a crucial air cargo gateway for North India, enhancing trade and commerce in the region.</p><p>The ambitious greenfield project involves an estimated investment of Rs 5,730 crores and occupies a sprawling 1,300-hectare site. Tata Projects, operating under the engineering, procurement, and construction (EPC) model, is overseeing the construction of the airports terminal, runway, and ancillary infrastructure.</p><p>The introduction of the Noida International Airport marks a significant milestone for the region, as it will alleviate congestion at the Delhi Indira Gandhi International Airport and create numerous employment opportunities. Additionally, the airports inauguration is expected to catapult Noida onto the global logistics map, resulting in economic multiplier effects encompassing job creation, infrastructure development, and appreciation in real estate prices.</p><p>The introduction of the Noida International Airport marks a significant milestone for the region, as it will alleviate congestion at the Delhi Indira Gandhi International Airport and create numerous employment opportunities. Additionally, the airports inauguration is expected to catapult Noida onto the global logistics map, resulting in economic multiplier effects encompassing job creation, infrastructure development, and appreciation in real estate prices.</p><p>Real estate experts believe that the formation of the Jewar Airport will transform Greater Noida and Yamuna Expressway into end-user-centric markets, offering viable alternatives to more expensive locations like Gurgaon and Delhi. The newfound connectivity and infrastructure upgrades, coupled with the airports impact, are likely to stimulate substantial real estate development in the region.</p><p>Previously perceived as investor-driven markets, Greater Noida and Yamuna Expressway grappled with challenges related to liveability. However, the Jewar Airports presence is anticipated to attract a surge of end-users, driving steady capital increase based on genuine demand rather than speculation.</p><p>As the construction is about to be completed, the region eagerly anticipates the profound positive changes it will bring.</p>';


export default function ArticleBox(props) {
    const [showMore, setShowMore] = useState(false);
    return (
        <>
           <section className="articles-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <div class="article-box">
                        <div class="hover-img">
                            <img src="/ycm-articel1.webp" class="img-fluid" />
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

                         <button className='btn btn-default' onClick={()=>setShowMore(!showMore)}>{showMore? "Show Less": "Show More"}</button>
                     </div>
                    </div>
                    </div>
                </div>
            </div>
            </section> 
        </>
    );
}
