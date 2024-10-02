// import {useEffect} from 'react'
import "./Contact.css";
// import AOS from 'aos'
// import 'aos/dist/aos.css'
export default function Contact() {
    
    // useEffect(()=> {
    //     AOS.init({duration: 2000})
    // }, [])


    return (
        <div  id="con" className="contact">
            <h1 data-aos="fade-up"className="title">
                <h3>What our customers are saying</h3>
                Contact us
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </h1>

            <div className="flex form">
                <form >
                    <div  data-aos="fade-up"  className="flex email">
                        <label htmlFor="">Email Address : </label>
                        <input autoComplete ="Off" type="email" name="email" placeholder="Email" required id="email" />
                    </div>

                    <div  data-aos="fade-up" className="flex mesage">
                        <label htmlFor="">Your Message :</label>
                        <textarea id="message" name="message" placeholder="message">    </textarea>
                    </div>
                    <button data-aos="fade-up">
                        Sabmet
                    </button>
                </form>
            </div>
        </div>
    );
}
