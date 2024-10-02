import './Footer.css'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { useEffect } from "react";
export default function Footer() {
    // useEffect(()=> {
    //     AOS.init({duration: 2000})
    // }, [])
    return (
        <footer  className='flex'>
            <ul  className='link'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Serves</a></li>
            </ul>

            <p >@ 2024 Spencer Sharp . All Rights Reserved . </p>
        </footer>
    )
}
