import React, {useEffect, useState} from 'react'
import "./sidebar.css";
import Logo from "./../../assets/logo/logo.png"
import Image from "next/image";

interface Props{

}

const Sidebar : React.FC<Props> = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Function to check screen width and update state
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the width as per your mobile breakpoint
        };

        // Initial check on component mount
        handleResize();

        // Listen to window resize events
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(()=>{
        console.log("Open: " + isOpen);
    }, [isOpen])

    const handleMenuClick = () => {
        console.log("Click");
        setIsOpen(prev => !prev);
    }
    return (
        <>
            {isMobile && (
                <div className="nav__menu__icon" onClick={handleMenuClick}>
                    <i className={`${isOpen ? "icon-menu" : "icon-menu"}`}></i>
                </div>
            )}
            <aside className={`aside ${isOpen ? "show" : "hide"}`}>
                <a href="#home" className="nav__logo">
                    <Image src={Logo} alt="Logo"/>
                </a>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <i className="icon-home"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <i className="icon-user"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#experience" className="nav__link">
                                    <i className="icon-briefcase"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#projects" className="nav__link">
                                    <i className="icon-layers"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="icon-bubble"></i>
                                </a>
                            </li>
                        </ul>

                    </div>
                </nav>
                <div className="nav__footer">
                    <span className="copyright">Copyright 2024 &copy; Jessica Andzouana</span>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;
