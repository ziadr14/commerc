import "./Sail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { useEffect } from "react";

import {
    faPaperclip,
    faCartShopping,
    faFilter,
    faFire,
} from "@fortawesome/free-solid-svg-icons";
export default function Sail() {
    // useEffect(()=> {
    //     AOS.init({duration: 2000})
    // }, [])
    return (
        <div className="sail">
            <div data-aos="zoom-in" className="Left">
                <img src="5.png" alt="" />
            </div>
            <div className="Right">
                <h1 data-aos="fade-up" >Winter Sale upto 50% Off</h1>
                <p data-aos="fade-up" >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                    reiciendis inventore iste ratione ex alias quis magni at optio
                </p>
                <div className="icons">
                    <div data-aos="fade-up" className="fa">
                        <FontAwesomeIcon className="faA" icon={faPaperclip} /> <p></p>
                        <FontAwesomeIcon className="faA" icon={faCartShopping} /> <p></p>
                        <FontAwesomeIcon className="faA" icon={faFilter} /> <p></p>
                        <FontAwesomeIcon className="faA" icon={faFire} /> <p></p>
                    </div>
                    <div className="tit">
                    <p data-aos="fade-up" >Quality Products</p>
                    <p data-aos="fade-up" >Fast Delivery</p>
                    <p data-aos="fade-up" >Easy Payment method</p>
                    <p data-aos="fade-up" >Get Offers</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
