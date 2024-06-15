import React from 'react'
import "./sidebar.css";
import Logo from "./../../assets/icons/logo.svg"
import Image from "next/image";

interface Props{

}

const Sidebar : React.FC<Props> = () => {
    return (
        <aside className='aside'>
            <a href="#home" className="nav__logo"></a>
            <Image src={Logo} alt="Logo"/>
            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
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
                <span className="copyright">Copyright &copy; Jessica Andzouana 2024</span>
            </div>
        </aside>
    )
}

export default Sidebar;
