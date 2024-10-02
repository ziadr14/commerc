import './MainProduct.css'
// import {  useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
export default function MainProduct() {
    // useEffect(()=> {
    //     AOS.init({duration: 2000})
    // }, [])
    const mainProd = [
        {Src : './shart1.png',dataOas:"zoom-in" , title:'Casual Wear' , subTitle:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
        {Src : './shart2.png',dataOas:"zoom-in" , title:'Printed shirt' , subTitle:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
        {Src : './shart3.png',dataOas:"zoom-in" , title:'Women shirt' , subTitle:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
    ]
    return (
        <div className='main'> 
        <div className='text' >
            <p data-aos="fade-up">Top Rated Products for you</p>
            <h1 data-aos="fade-up">Best Products</h1>
            <h5 data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</h5>
        </div>

        <div className="mainSec">
            {mainProd.map((item) => {
                return(
                    <div data-aos={item.dataOas} key={item}  className="boc">
                        <div className="img">

                        <img  width={180} height={220} src={item.Src}  />

                        <div className="box">
                            <div className='icon'>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <h1>{item.title}</h1>
                            <p>{item.subTitle}</p>
                            <button>Order Now</button>
                        </div>
                        </div>
                    </div>

                )
            })}
        </div>
        </div>
    )
}
