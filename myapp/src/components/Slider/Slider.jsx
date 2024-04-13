import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import './Slider.css';
import Product from '../Product/Product';

export default function Slider() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://646bafb47d3c1cae4ce42749.mockapi.io/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
    }, []);

    const [query, setQuery] = useState("")
    const [sorting, setSorting] = useState('default')

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    // when window width is >= 640px
                    340: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    }
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><Product {...products[0]}/></SwiperSlide>
                <SwiperSlide><Product {...products[1]}/></SwiperSlide>
                <SwiperSlide><Product {...products[2]}/></SwiperSlide>
                <SwiperSlide><Product {...products[4]}/></SwiperSlide>
                <SwiperSlide><Product {...products[5]}/></SwiperSlide>
         
            </Swiper>
        </>
    );
}
