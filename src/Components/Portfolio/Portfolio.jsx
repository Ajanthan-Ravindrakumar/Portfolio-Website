import React from "react"
import './Portfolio.css'
import{Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import Sidebar from '../../img/1.png'
import Ecommerce from '../../img/2.jpg'
import HOC from '../../img/3.webp'
import MusicApp from '../../img/4.jpg'
import { themeContext } from '../../Context';
import { useContext } from "react";

const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode

    return (
        <div className="portfolio" id="Portfolio">

            {/* heading */}
            <span style={{color : darkMode? 'white' : ''}}> Future Project</span>
            <span>Portfolio</span>

            {/*slider*/}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grapCursor = {true}
            className="portfolio-slider">
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="Eco" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="Music" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="Hoc" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio