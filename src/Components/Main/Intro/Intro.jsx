import './Intro.scss';
import ArrowRight from '../../../assets/img/ArrowRight.png';
import ArrowLeft from '../../../assets/img/ArrowLeft.png';
import LineScroll from '../../../assets/img/Line-scroll.png';
import LineScrollWhite from '../../../assets/img/Line-scroll-white.png';
import {useState} from "react";
import backgroundIMG from '../../../assets/img/IntroIMG.jpeg'

const Intro = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [backgroundIMG, backgroundIMG, backgroundIMG];

    const changeBackgroundRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const changeBackgroundLeft = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return images.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };

    return (
        <div className="Intro" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentIndex]})`, animation: 'slideBackground 1s ease'}}>
            <div className="Lines-scroll">
                {currentIndex === 0 && (
                    <>
                        <img id='line-1' src={LineScrollWhite} alt="img"/>
                        <img id='line-2' src={LineScroll} alt="img"/>
                        <img id='line-3' src={LineScroll} alt="img"/>
                    </>
                )}
                {currentIndex === 1 && (
                    <>
                        <img id='line-1' src={LineScroll} alt="img"/>
                        <img id='line-2' src={LineScrollWhite} alt="img"/>
                        <img id='line-3' src={LineScroll} alt="img"/>
                    </>
                )}
                {currentIndex === 2 && (
                    <>
                        <img id='line-1' src={LineScroll} alt="img"/>
                        <img id='line-2' src={LineScroll} alt="img"/>
                        <img id='line-3' src={LineScrollWhite} alt="img"/>
                    </>
                )}
            </div>
            <div className="Text">
                <h1>Швидше.</h1>
                <h1>Вище.</h1>
                <h1>Сильніше.</h1>
                <h2>Разом із Nike</h2>
            </div>
            <div className="Sales">
                <h2>Знижки до 40%</h2>
                <p>Залишився лише тиждень</p>
            </div>
            <img id='arrow-left' src={ArrowLeft} alt="img" onClick={changeBackgroundLeft}/>
            <img id='arrow-right' src={ArrowRight} alt="img" onClick={changeBackgroundRight}/>
        </div>
    )
}

export default Intro;