import Header from "./Header/Header.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Models from "./Models.jsx";
import Mycar from "./Mycar.jsx";
import BrandNews from "./Brand_news.jsx";
import Preowned from "./Preowned.jsx";
import Footer from "./Footer.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function App() {
  return (
    <>
      <Header />
      <Hero />  
      <About />
      <Models />
      <Mycar/>
      <BrandNews />
      <Preowned />
      <Footer />
    </>
  );
}
