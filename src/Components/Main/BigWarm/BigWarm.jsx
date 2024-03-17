import './BigWarm.scss';
import BigWarmPhoto from '../../../assets/img/Section-2.png';

const BigWarm = () => {
    return (
        <div className="BigWarm">
            <div className="container">
                <div className="Text">
                    <h2>Ми знаємо, що сподобається <br/> вашим “великим” друзям!</h2>
                    <p>Обирай подарунок своїм друзями бодібілдерам із <br/> нашою новою колекцію термобілизни “Big warm”</p>
                    <button>До каталогу</button>
                </div>
                <img src={BigWarmPhoto} alt="img"/>
            </div>
        </div>
    )
}

export default BigWarm;