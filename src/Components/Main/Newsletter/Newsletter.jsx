import './Newsletter.scss';

const Newsletter = () => {
    return (
        <div className="Newsletter">
            <h1>Спіймай всі акції!</h1>
            <p>Підписуйся на Email розсилку і отримуй інформацію про всі акції, які <br/> будуть з`влятись у нашому магазині. А у нас їх багато :D</p>
            <form className="Input">
                <input type="text" placeholder='ВВЕДІТЬ'/>
                <button type='submit'>Підписатись</button>
            </form>
        </div>
    )
}

export default Newsletter;