import React from 'react'
import "./sidebar.css";
import Logo from "./../../assets/logo/logo.png"
import Image from "next/image";

interface Props{

}

const Sidebar : React.FC<Props> = () => {
    return (
        <aside className='aside'>
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
                                <i className="icon-fire"></i>
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
                        {/*<li className="nav__item">*/}
                        {/*    <a href="" className="nav__link">*/}
                        {/*        <i className="icon-bubble"></i>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                    </ul>

                </div>
            </nav>
            <div className="nav__footer">
                <span className="copyright">Copyright 2024 &copy; Jessica Andzouana</span>
            </div>
        </aside>
    )
}

export default Sidebar;
