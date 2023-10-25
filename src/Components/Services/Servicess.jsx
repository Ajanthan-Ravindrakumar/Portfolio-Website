import React from "react";
import './Services.css'
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from "framer-motion";
import Resume from './Resume.pdf'



const Services = () => {

    const transition = {duration: 1, type: 'spring' }

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode

    return (
        <div className="services" id="Services">
            <div className="awesome">
            <span style={{color : darkMode? 'white' : ''}}>My Awesome</span>
            <span>services</span>
            <span></span>
            <a href={Resume} download>
                <button className="button s-button" >Download CV</button>
            </a>
            
            <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
            </div>
            <div className="cards">

                <motion.div
                initial ={{left: '45rem'}}
                whileInView={{left: '39rem'}}
                transition={transition}
                style={{left: '35rem'}}>
                    <Card
                    emoji ={HeartEmoji}
                    heading = {'Design'}
                    detail = {"Picart, Photoshop, Adobe"} />
                </motion.div>
                <motion.div 
                initial ={{top: '12rem'}}
                whileInView={{left: '21rem'}}
                transition={transition}
                style={{ top: '12rem', left: '17rem'}}>
                    <Card
                        emoji = {Glasses}
                        heading = {"Developer"}
                        detail = {"HTML, Css, Javascript, React"}
                    />

                </motion.div>
                <motion.div 
                initial ={{left: '45rem'}}
                whileInView={{left: '39rem'}}
                transition={transition}
                style={{top:"19rem", left: "35rem"}}>
                    <Card
                    emoji={Humble}
                    heading={"UI/UX"}
                    detail={
                        "Learning"
                    } />
                </motion.div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services