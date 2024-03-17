import './MostPopularProducts.scss';
import ArrowRight from '../../../assets/img/Arrow 1.png';
import ArrowLeft from '../../../assets/img/Arrow 2.png';
import Product1IMG from '../../../assets/img/Product-1.png';
import Product2IMG from '../../../assets/img/Product-2.png';
import Product3IMG from '../../../assets/img/Product-3.png';
import { useState } from "react";

const MostPopularProducts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sliderText, setSliderText] = useState('1 / 3');

    const cardsData = [
        { id: 1, img: Product1IMG, name: 'Термобілизна для бодібілдерів', price: '4000 грн.' },
        { id: 2, img: Product2IMG, name: 'Майка для бодібілдерів', price: '1100 грн.' },
        { id: 3, img: Product3IMG, name: 'Ланцюжок для бодібілдерів', price: '2000 грн.' },
        { id: 4, img: Product1IMG, name: 'Термобілизна для бодібілдерів #2', price: '4000 грн.' },
        { id: 5, img: Product2IMG, name: 'Майка для бодібілдерів #2', price: '1100 грн.' },
        { id: 6, img: Product3IMG, name: 'Ланцюжок для бодібілдерів #2', price: '2000 грн.' },
        { id: 7, img: Product1IMG, name: 'Термобілизна для бодібілдерів #3', price: '4000 грн.' },
        { id: 8, img: Product2IMG, name: 'Майка для бодібілдерів #3', price: '1100 грн.' },
        { id: 9, img: Product3IMG, name: 'Ланцюжок для бодібілдерів #3', price: '2000 грн.' },
    ];

    const ArrowRightClickHandler = () => {
        if (currentIndex < 6) {
            setCurrentIndex(currentIndex + 3);
            setSliderText(`${Math.ceil((currentIndex + 4) / 3)} / 3`);
        }
    };

    const ArrowLeftClickHandler = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 3);
            setSliderText(`${Math.ceil((currentIndex) / 3)} / 3`);
        }
    };

    return (
        <div className="MostPopularProducts">
            <div className="Title">
                <h3>Найгарячіші товари</h3>
                <div className="Slider">
                    <p>{sliderText}</p>
                    <img src={ArrowLeft} alt="img" style={{ cursor: 'pointer' }} onClick={ArrowLeftClickHandler} />
                    <img src={ArrowRight} alt="img" style={{ cursor: 'pointer' }} onClick={ArrowRightClickHandler} />
                </div>
            </div>
            <div className="container">
                {cardsData.slice(currentIndex, currentIndex + 3).map((card, index) => (
                    <div className={`Product-${index + 1}`} key={card.id}>
                        <img src={card.img} alt="img"/>
                        <h4>{card.name}</h4>
                        <h3>{card.price}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MostPopularProducts;
