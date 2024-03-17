import './Header.scss';
import searchIMG from '../../assets/img/Search.png';
import favIMG from '../../assets/img/Favourites.png';
import cartIMG from '../../assets/img/Cart.png';

const Header = () => {
    return (
        <header className="Header">
            <div className="header-top">
                <div className="phone-and-help">
                    <p id='phone'>098 900 09 09</p>
                    <p>Допомога</p>
                </div>
                <p id='login-register'>Увійти / Зареєструватися</p>
            </div>
            <div className="header-main">
                <h2>IGNAT</h2>
                <nav>
                    <h3>НОВИНКИ</h3>
                    <h3>ЧОЛОВІКИ</h3>
                    <h3>ЖІНКИ</h3>
                    <h3>АКСЕСУАРИ</h3>
                    <h3 id='sale'>АКЦІЇ</h3>
                </nav>
                <div className="search-fav-cart">
                    <img id='search' src={searchIMG} alt="img"/>
                    <input type="text"/>
                    <img id='fav' src={favIMG} alt="img"/>
                    <img src={cartIMG} alt="img"/>
                </div>
            </div>
        </header>
    )
}

export default Header;