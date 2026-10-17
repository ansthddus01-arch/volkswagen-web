import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Models from "./Models.jsx";
import Mycar from "./Mycar.jsx";
import BrandNews from "./Brand_news.jsx";
import Preowned from "./Preowned.jsx";
import Footer from "./Footer.jsx";
import SubPage from "./Sub/SubPage.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';

function MainPage() {
  return (
    <>
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

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/id5" element={<SubPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </>
  );
}
