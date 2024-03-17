import './App.scss';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Main/Intro/Intro";
import BigWarm from "./Components/Main/BigWarm/BigWarm";
import MostPopularProducts from "./Components/Main/MostPopularProducts/MostPopularProducts";
import Newsletter from "./Components/Main/Newsletter/Newsletter";
import Reviews from "./Components/Main/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <BigWarm/>
      <MostPopularProducts/>
      <Newsletter/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
