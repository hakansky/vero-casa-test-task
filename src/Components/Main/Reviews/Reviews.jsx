import './Reviews.scss';
import ArrowLeft from "../../../assets/img/Arrow 2.png";
import ArrowRight from "../../../assets/img/Arrow 1.png";
import { useState } from "react";
import ReviewIMG from '../../../assets/img/userReview.png'

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 4;
    const totalCards = 12;
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const cardData = [
        { name: 'Жора Ремінгтон', review: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...' },
        { name: 'Жора Ремінгтон', review: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...' },
        { name: 'Жора Ремінгтон', review: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...' },
        { name: 'Жора Ремінгтон', review: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...' },
        { name: 'Ремінгтон Жора', review: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...' },
        { name: 'Ремінгтон Жора', review: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...' },
        { name: 'Ремінгтон Жора', review: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...' },
        { name: 'Ремінгтон Жора', review: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...' },
        { name: 'Жора Ремінгтон', review: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...' },
        { name: 'Жора Ремінгтон', review: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...' },
        { name: 'Жора Ремінгтон', review: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...' },
        { name: 'Жора Ремінгтон', review: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...' }
    ];

    const ArrowRightClickHandler = () => {
        if (currentIndex + cardsPerPage < totalCards) {
            setCurrentIndex(currentIndex + cardsPerPage);
        }
    };

    const ArrowLeftClickHandler = () => {
        if (currentIndex - cardsPerPage >= 0) {
            setCurrentIndex(currentIndex - cardsPerPage);
        }
    };

    return (
        <div className="Reviews">
            <div className="Title">
                <h2>Відгуки наших клієнтів</h2>
                <div className="Slider">
                    <p>{`${currentIndex / cardsPerPage + 1} / ${totalPages}`}</p>
                    <img src={ArrowLeft} alt="img" style={{ cursor: 'pointer' }} onClick={ArrowLeftClickHandler} />
                    <img src={ArrowRight} alt="img" style={{ cursor: 'pointer' }} onClick={ArrowRightClickHandler} />
                </div>
            </div>
            <div className="Reviews-cards">
                {cardData.slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
                    <div className="Review" key={index}>
                        <div className="avatar-and-rating">
                            <img src={ReviewIMG} alt="img" />
                            <div className="rating-and-name">
                                <div className="rating">
                                    <p>&#x2605;</p><p>&#x2605;</p><p>&#x2605;</p><p>&#x2605;</p><p>&#x2606;</p>
                                </div>
                                <p id='name'>{card.name}</p>
                            </div>
                        </div>
                        <p id='review-text'>{card.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;
