import './Footer.scss';

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="upper-footer">
                <div className="contacts">
                    <h4>Контакт - центр</h4>
                    <p>098 900 09 09 </p>
                    <p>Пн - Пт 09:00 - 21:00</p>
                    <p>Пн - Пт 09:00 - 21:00</p>
                </div>
                <div className="for-clients">
                    <h4>Покупцям</h4>
                    <p>Оплата і доставка</p>
                    <p>Повернення</p>
                    <p>Питання та відповіді</p>
                </div>
                <div className="personal-cabinet">
                    <h4>Особистий кабінет</h4>
                    <p>Мої дані</p>
                    <p>Історія замовлень</p>
                    <p>Улюблені</p>
                    <p>Розсилки</p>
                </div>
                <div className="about-company">
                    <h4>Про компанію</h4>
                    <p>Про нас</p>
                    <p>Новини</p>
                    <p>Стати партнером</p>
                    <p>Угода користувача</p>
                </div>
            </div>
            <div className="bottom-footer">
                <nav>
                    <p>НОВИНКИ</p>
                    <p>ЧОЛОВІКИ</p>
                    <p>ЖІНКИ</p>
                    <p>АКСЕСУАРИ</p>
                    <p>АКЦІЇ</p>
                </nav>
                <p>© 2022 — 2023 IGNAT. Усі права захищені.</p>
            </div>
        </footer>
    )
}

export default Footer;