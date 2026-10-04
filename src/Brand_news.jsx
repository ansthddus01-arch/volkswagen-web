import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import brandNewsData from "./data/brandNewsData.json";
import "./Brand_news.scss";

export default function BrandNews() {
  return (
    <section className="brand-news d-flex flex-column">
      <div className="brand-news__inner grid-container">
        <h1 className="brand-news__title lh-100">Brand News</h1>
      </div>

      <div className="brand-news__slider">
        <Swiper
          className="brand-news__list"
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            600: { slidesPerView: 2, spaceBetween: 24 },
            // 데스크톱: 카드 폭은 CSS(--card)가 정하고, 화면이 좁아질수록 간격만 줄인다
            1025: { slidesPerView: "auto", spaceBetween: 220, centeredSlides: true },
            1280: { slidesPerView: "auto", spaceBetween: 270, centeredSlides: true },
            1600: { slidesPerView: "auto", spaceBetween: 330, centeredSlides: true },
            1920: { slidesPerView: "auto", spaceBetween: 400, centeredSlides: true },
          }}
          loop
          navigation={{
            prevEl: ".brand-news__nav-button--prev",
            nextEl: ".brand-news__nav-button--next",
          }}
          pagination={{
            el: ".brand-news__pagination",
            clickable: true,
          }}
        >
          {brandNewsData.map((news) => (
            <SwiperSlide key={news.id}>
            <article className="brand-news__item d-flex flex-column">
            <img
              src={news.image}
              alt={news.title}
              className="brand-news__image"
            />

            <p className="brand-news__date lh-100">{news.date}</p>
            <div className="brand-news__content d-flex flex-column lh-125">
              <h2 className="brand-news__item-title">
                {news.title}
              </h2>

              <p className="brand-news__des">
                {news.description}
              </p>
            </div>

            <a href="#" className="brand-news__link d-flex align-center lh-100">
              자세히 보기
              <span className="material-symbols-outlined brand-news__link-icon">
                arrow_forward_ios
              </span>
            </a>
          </article>
          </SwiperSlide>))}
        </Swiper>

        <div className="brand-news__nav d-flex justify-between">
          <button
            type="button"
            className="brand-news__nav-button brand-news__nav-button--prev d-flex align-center justify-center"
            aria-label="이전 뉴스"
          >
            <span className="material-symbols-outlined">
              arrow_back_ios
            </span>
          </button>

          <button
            type="button"
            className="brand-news__nav-button brand-news__nav-button--next d-flex align-center justify-center"
            aria-label="다음 뉴스"
          >
            <span className="material-symbols-outlined">
              arrow_forward_ios
            </span>
          </button>
        </div>
      </div>

      <div className="brand-news__pagination d-flex align-center justify-center"></div>
    </section>
  );
}
