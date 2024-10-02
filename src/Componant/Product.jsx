import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import {  useEffect } from "react";

import MainProduct from './MainProduct'
import Sail from './Sail'

export default function Product() {
    // useEffect(()=> {
    //     AOS.init({duration: 2000})
    // }, [])
    const myProduct = [
        { imgSrc: '7.png', Fald:"fade-up",daosDelay:0,title: 'Women Ethnic', subTitle: 'white', star: 5 },
        { imgSrc: '4.png', Fald:"fade-up",daosDelay:200,title: 'Women western', subTitle: 'red', star: 4.5 },
        { imgSrc: '5.png', Fald:"fade-up",daosDelay:400,title: 'Goggles', subTitle: 'brown', star: 4.7 },
        { imgSrc: '6.png', Fald:"fade-up",daosDelay:600,title: 'Printed T-Shirt', subTitle: 'Yellow', star: 4.4 },
        { imgSrc: '5.png', Fald:"fade-up",daosDelay:800,title: 'Women Ethnic', subTitle: 'Pink', star: 4.5 },
    ]
    return (
        <div className='product'>

            <div className="title">
                <p data-aos="fade-up">
                    Top Selling Products for you
                </p>
                <h1 data-aos="fade-up">
                    Products
                </h1>
                <h5 data-aos="fade-up">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores</h5>
            </div>
            <section className='right'>

            {myProduct.map((item) => {
                return (
                    <div data-aos={item.Fald} data-aos-delay ={item.daosDelay} key={item} className="card">
                        <img  width={180} height={220} src={item.imgSrc}  alt="" />
                        <div className="box">
                        <h3>{item.title}</h3>
                        <p>{item.subTitle}</p>
                        <div className="star">
                            <FontAwesomeIcon icon={faStar} /> <p>{item.star}</p>
                        </div>
                        </div>
                    </div>
                )
                
            })}
            </section>
            <MainProduct/>
            <Sail/>

            </div>
    )
}
