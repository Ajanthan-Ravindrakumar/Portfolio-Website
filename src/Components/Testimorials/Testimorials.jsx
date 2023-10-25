import React from "react"
import './Testimorials.css'
import { Swiper,SwiperSlide } from "swiper/react"
import profilePic1 from "../../img/5.jpeg"
import profilePic2 from "../../img/6.jpg"
import profilePic3 from "../../img/7.jpg"
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css';



const Testimorials = () => {
    const clients = [
        {
            img: profilePic1,
            review:
            'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.'
    },
    {
        img: profilePic2,
            review:
            'Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.'
    },
    {
        img: profilePic3,
            review:
            'Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.'
    }
]
    return (
            <div className="t-wapper" id="Testimorials">
                <div className="t-heading">
                    <span>Courses </span>
                    <span> I </span>
                    <span> Completed....</span>
                    <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
                    <div className="blur t-blur2" style={{background: "var(skyblue)"}}></div>
                </div>
                {/* slider */}
                <Swiper
                
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable: true}}

                >
                    {clients.map((clients, index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimorial">
                                <img src={clients.img} alt="" />
                                <span>{clients.review}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
    )
}

export default Testimorials