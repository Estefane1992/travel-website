import SmoothScroll from "smooth-scroll";
import Navbar from './components/navbar/Navbar';
import Header from "./components/header/Header";
import Destinations from "./components/recomendacao/Destinos";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroolltop/ScrollToTop";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Destinations/>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
