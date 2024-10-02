import { useState  } from "react";
import "./Nav.css";
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
export default function Nav() {
    const [showModel, setShowModel] = useState(false);
        
    // useEffect(()=> {
    //     AOS.init({duration: 2000})
    // }, [])

    return (
    <div>

        <nav >
            <ul data-aos="zoom-in">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="Pro">Product</a>
                </li>
                <li>
                    <a href="Ser">Serves</a>
                </li>
                <li>
                    <a href="Ser">Contact us</a>
                </li>
            </ul>
            <span className="bars">
                <FontAwesomeIcon
                onClick={() => {
                    setShowModel(true)
                }}
                className="bar" icon={faBars} />
            </span>
            </nav>
            

            {showModel && (
                <div className="border fixed">
                    <ul className="model">
                        <li>
                            <button
                                className="icon-close"
                                onClick={() => {
                                    setShowModel(false);
                                }}
                                >
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </li>
                        <li
                            onClick={() => {
                                setShowModel(false);
                            }}
                            >
                            <a href="#her">Home</a>
                        </li>
                        <li
                            onClick={() => {
                                setShowModel(false);
                            }}
                            >
                            <a href="#pro">Product</a>
                        </li>
                        <li
                            onClick={() => {
                                setShowModel(false);
                            }}
                            >
                            <a href="#con">Serves</a>
                        </li>
                        <li
                            onClick={() => {
                                setShowModel(false);
                            }}
                            >
                            <a href="#con">Contact us</a>
                        </li>
                    </ul>
                </div>
            )}
            </div>
    );
}
