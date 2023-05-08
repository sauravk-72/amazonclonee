import React from 'react'
import Banner from './Banner';
import "./maincomponent.css";
import Slide from './Slide';
import Slide2 from './Slide2';
import Slide3 from './Slide3';


const Maincomponent = () => {
    
    return (
        <div className='home_section'>
            <div className="banner_part">
                <Banner />
            </div>
            <Slide title="Deal Of The Day" />
            <div className='center_img'>
                <img src=" https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/Header/Electronics_PC.gif" alt=""/>
            </div>
            <Slide2 title="Upto 50% off"/>
            <div className='center_img'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/SummerGD/xglingress/1500x300.jpg' alt=''/>
            </div>
            <Slide3 title="Best Sellers"/>
        </div>
    )
}

export default Maincomponent