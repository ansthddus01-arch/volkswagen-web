import heroBg from "../assets/sub/hero_bg.png";
import heroBgMobile from "../assets/sub/hero_bg_mobile.png";
import arrowCircleRight from "../assets/sub/icon_arrow_circle_right.svg";
import dotActive from "../assets/sub/pager_dot_active.svg";
import dot from "../assets/sub/pager_dot.svg";
import chevron from "../assets/sub/pager_chevron.svg";
import pause from "../assets/sub/pager_pause.svg";
import "./SubHero.scss";

const slides = [1, 2, 3, 4];

export default function SubHero() {
  return (
    <section className="sub-hero">
      <picture>
        <source media="(max-width: 600px)" srcSet={heroBgMobile} />
        <img src={heroBg} alt="해안 도로를 달리는 Volkswagen ID.5" className="sub-hero__image" />
      </picture>

      <div className="sub-hero__content d-flex flex-column">
        <div className="sub-hero__text d-flex flex-column">
          <p className="sub-hero__eyebrow lh-100">우아한 쿠페 라인과 강력한 퍼포먼스의 결합</p>
          <h1 className="sub-hero__title lh-125">
            <span className="sub-hero__title-en">Powerful, Electric, Coupe</span>
            <br />
            <span className="sub-hero__title-ko">일렉트릭 모빌리티의 새로운 기준</span>
          </h1>
        </div>

        <a href="#test-drive" className="sub-hero__cta d-flex align-center">
          <span className="lh-100">시승 하러가기</span>
          <img src={arrowCircleRight} alt="" />
        </a>
      </div>

      {/* 슬라이드 컨트롤: 인터랙션은 추후 연결 */}
      <div className="sub-hero__pager d-flex align-center">
        <ul className="sub-hero__dots d-flex align-center justify-between">
          {slides.map((slide, index) => (
            <li key={slide}>
              <button type="button" aria-label={`${slide}번 슬라이드`}>
                <img src={index === 0 ? dotActive : dot} alt="" />
              </button>
            </li>
          ))}
        </ul>

        <div className="sub-hero__controls d-flex align-center">
          <div className="sub-hero__arrows d-flex align-center">
            <button type="button" className="sub-hero__arrow d-flex align-center justify-center" aria-label="이전 슬라이드">
              <img src={chevron} alt="" />
            </button>
            <button type="button" className="sub-hero__arrow sub-hero__arrow--next d-flex align-center justify-center" aria-label="다음 슬라이드">
              <img src={chevron} alt="" />
            </button>
          </div>
          <button type="button" className="sub-hero__pause d-flex align-center justify-center" aria-label="일시정지">
            <img src={pause} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
