import { Link } from "react-router-dom";
import MainVisual from "./assets/Main_hero_img.jpg";
import MainVisualMobile from "./assets/Main_hero_img_mobile.png";
import "./Hero.scss";

const indicators = [
  "ID.5",
  "About us",
  "Model Line Up",
  "Your Own Best",
  "Brand News",
];

export default function Hero() {
  return (
    <section className="hero">
      <Link to="/id5" className="hero__link" aria-label="ID.5 상세 페이지로 이동">
        <picture>
          <source media="(max-width: 600px)" srcSet={MainVisualMobile} />
          <img
            src={MainVisual}
            alt="Volkswagen ID.5"
            className="hero__image"
          />
        </picture>
      </Link>

      <div className="container hero__content">
        <div className="grid">
          <div className="hero__text d-flex flex-column">
            <h1 className="lh-125">
              For every drive,<br />
              every life
            </h1>

            <p className="lh-125">
              모든 일상 위에,<br />
              더 정제된 드라이빙
            </p>
          </div>
        </div>
      </div>

      <div className="hero__actions tablet-only d-flex align-center">
        <a href="#" className="hero__button hero__button--fill d-flex align-center justify-center lh-100">
          더 알아보기
        </a>
        <a href="#" className="hero__button d-flex align-center justify-center lh-100">
          이벤트 보기
        </a>
      </div>

      <ul className="hero__indicator d-flex">
        {indicators.map((label, index) => (
          <li
            key={label}
            className={`hero__indicator-item lh-100 ${index === 0 ? "hero__indicator-item--active" : ""}`}
          >
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}