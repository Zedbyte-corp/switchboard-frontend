import "./Gallery.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
// import ProductZoom from "../../Components/MagicZoom/MagicZoom"
// import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import one from "../../Assets/Images/ScrollGalleryOneWedding/1.jpg"
import two from "../../Assets/Images/ScrollGalleryOneWedding/2.jpg"
import three from "../../Assets/Images/ScrollGalleryOneWedding/3.jpg"
import four from "../../Assets/Images/ScrollGalleryOneWedding/4.jpg"
import five from "../../Assets/Images/ScrollGalleryOneWedding/5.jpg"
import six from "../../Assets/Images/ScrollGalleryOneWedding/6.jpg"
import seven from "../../Assets/Images/ScrollGalleryOneWedding/7.jpg"
import eight from "../../Assets/Images/ScrollGalleryOneWedding/8.jpg"
import nine from "../../Assets/Images/ScrollGalleryOneWedding/9.jpg"
import ten from "../../Assets/Images/ScrollGalleryOneWedding/10.jpg"
import eleven from "../../Assets/Images/ScrollGalleryOneWedding/11.jpg"
import twelve from "../../Assets/Images/ScrollGalleryOneWedding/12.jpg"

const Gallery = () => {
    const [ismobile, setIsmobile] = useState(false)
    useEffect(() => {
        if (window.screen.width <= 760) {
            setIsmobile(true)
        }
    }, [])

    const itemData = [
        {
            img: one,
            title: 'Bed',
        },
        {
            img: two,
            title: 'Books',
        },
        {
            img: three,
            title: 'Sink',
        },
        {
            img: four,
            title: 'Kitchen',
        },
        {
            img: five,
            title: 'Blinds',
        },
        {
            img: six,
            title: 'Chairs',
        },
        {
            img: seven,
            title: 'Laptop',
        },
        {
            img: eight,
            title: 'Doors',
        },
        {
            img: nine,
            title: 'Coffee',
        },
        {
            img: ten,
            title: 'Storage',
        },
        {
            img: eleven,
            title: 'Candle',
        },
        {
            img: twelve,
            title: 'Candle',
        },
        {
            img: one,
            title: 'Bed',
        },
        {
            img: two,
            title: 'Books',
        },
        {
            img: three,
            title: 'Sink',
        },
        {
            img: four,
            title: 'Kitchen',
        },
        {
            img: five,
            title: 'Blinds',
        },
        {
            img: six,
            title: 'Chairs',
        },
        {
            img: seven,
            title: 'Laptop',
        },
        {
            img: eight,
            title: 'Doors',
        },
        {
            img: nine,
            title: 'Coffee',
        },
        {
            img: ten,
            title: 'Storage',
        },
        {
            img: eleven,
            title: 'Candle',
        },
        {
            img: twelve,
            title: 'Candle',
        }
    ];

    return (
        <div className="gallery-main-container">
            <div className="gallery-section-1-container">
            <div className="gallery-section-1-left-subheading">your projects with love!</div>
                <div className="gallery-section-1-left">
                    Our Works
                </div>
                <div className="gallery-section-1-left-description">We handle all types of events for all types of people, culture, communities, or interests.</div>
            </div>
            <div className="gallery-section-2-container">
                <Box sx={{ width: 1, height: '100%', overflowY: 'scroll' }}>
                    <ImageList variant="masonry" cols={!ismobile ? 3 : 1} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    className="gallery-image"
                                />
                                {/* <ProductZoom productImage={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}/> */}
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </div>
        </div>
    )
}
export default Gallery