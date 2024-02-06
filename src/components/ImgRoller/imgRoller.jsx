import React, { useState, useEffect } from 'react';
import LeftArrow from '../../assets/LeftArrow.svg';
import RightArrow from '../../assets/RightArrow.svg';
import '../../styles/imgRoller.scss';

function ImgRoller({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let currentImg = document.getElementById(`img${currentIndex}`);
        currentImg.className = 'imgRoller__img--shown';
    }, [currentIndex]);

    return (
        <div className="imgRoller">
            {images.map((imgLink, index) => (
                <img
                    key={index}
                    alt="house imgs"
                    className={`imgRoller__img ${currentIndex === index ? 'imgRoller__img--shown' : 'imgRoller__img--hidden'}`}
                    src={imgLink}
                    id={`img${index}`}
                />
            ))}
            <img
                className="imgRoller__arrowLeft"
                src={LeftArrow}
                alt="left arrow"
                onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
            />
            <img
                className="imgRoller__arrowRight"
                src={RightArrow}
                alt="right arrow"
                onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
            />
        </div>
    );
}

export default ImgRoller;
