
import "./Landing.css";
// import {  useEffect } from "react";

// import AOS from 'aos'
// import 'aos/dist/aos.css'



export default function Landing() {
    // useEffect(()=> {
    //     AOS.init({duration: 2000})
    // }, [])

    return (
        <section>
            <div className="lan"></div>
            <div className="landingContant">


                            <div data-aos="zoom-out"> 
                            <h1 >Lorem, ipsum dolor sit amet consectetur.</h1>
                            <button>Order Now</button>
                        </div>
                        <div data-aos="zoom-in" className="img">
                                <img src= '3.png' alt="1.png" />
                    </div>

                </div>
        </section>
    );
}



