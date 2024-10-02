import './Subscrib.css'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { useEffect } from "react";

export default function Subscrib() {
    // useEffect(()=> {
    //     AOS.init({duration: 2000})
    // }, [])
        return (
    <div data-aos="zoom-in" className='bg'>
        <h1>Get Notified About New Products</h1>
        <input type="email" placeholder='Enter your email'/>
    </div>
    )
}
