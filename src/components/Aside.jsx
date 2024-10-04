import { useState } from "react"
import { navLists } from "../constants"

const Aside = ({handleModalShow}) => {
    const [access, setAccess] = useState('live')

    const filteredNavLists = navLists.filter(item => item.access === access)    

    return (
        <aside className="probootstrap-aside js-probootstrap-aside">
            <a href="#" className="probootstrap-close-menu js-probootstrap-close-menu d-md-none"><span className="oi oi-arrow-left"></span> Close</a>
            <div className="probootstrap-site-logo probootstrap-animate" data-animate-effect="fadeInRight">
                <a className="mb-2 d-block probootstrap-logo">Photo</a>
            </div>
            <div className="probootstrap-overflow">
                <nav className="probootstrap-nav">
                <ul>
                    {filteredNavLists.map((item, i) => (
                        <li 
                            key={i}
                            className="probootstrap-animate d-flex align-items-center align-baseline" data-animate-effect="fadeInRight"
                        >
                            <img src={item.icon.ic} alt={item.icon.attr} style={{ width: '36px', height: '36px'}}/>
                            <a className="pe-auto text-uppercase" onClick={() => handleModalShow(item.link)}>{item.title}</a>
                        </li>
                    ))}
                </ul>
                </nav>
                <footer className="probootstrap-aside-footer probootstrap-animate" data-animate-effect="fadeInRight">
                <p>&copy; 2017 <a href="https://uicookies.com/" target="_blank">uiCookies:Aside</a>. <br/> All Rights Reserved.</p>
                </footer>
            </div>
        </aside>
    )
}

export default Aside