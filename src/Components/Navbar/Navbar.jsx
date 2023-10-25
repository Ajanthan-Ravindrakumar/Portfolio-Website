import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
import Services from '../Services/Servicess'
import Experience from '../Experience/Experience'
import Portfolio from '../Portfolio/Portfolio'
import Testimorials from '../Testimorials/Testimorials'

const Navbar = () => {
    return (
        <div className="n-wapper">
            <div className="n-left">
                <div className="n-name">Ajanthan</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <Link spy={true} to='Navbar' smooth={true}>
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                        <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                        <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                        <li>Portofolio</li>
                        </Link>
                        <Link spy={true} to='Testimorials' smooth={true}>
                        <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <button className='button n-button'>Contect</button>
            </div>
        </div>
        
    )
}

export default Navbar