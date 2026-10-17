import { useRef, useState } from "react";
import cockpitImg from "../assets/sub/inside_cockpit.png";
import ambientImg from "../assets/sub/inside_ambient.png";
import openSkyImg from "../assets/sub/inside_opensky.png";
import displayImg from "../assets/sub/inside_display.png";
import "./SubInside.scss";

// summary: 접힌(검정) 카드 문구, desc/badge: 펼친(흰색) 카드 문구
const cards = [
  {
    id: "cockpit",
    title: "Digital Cockpit",
    summary: ["운전자 중심 디스플레이", "직관적인 정보 확인"],
    desc: ["운전자 중심의 디지털 디스플레이로", "주행 정보를 한눈에 직관적으로 확인합니다."],
    badge: "Digital",
    image: cockpitImg,
    alt: "ID.5 디지털 콕핏과 스티어링 휠",
  },
  {
    id: "ambient",
    title: "Ambient Light",
    summary: ["나만의 분위기로", "완성하는 실내 공간"],
    desc: ["은은하게 흐르는 앰비언트 라이트가", "나만의 분위기로 실내 공간을 완성합니다."],
    badge: "Ambient",
    image: ambientImg,
    alt: "앰비언트 라이트가 켜진 ID.5 대시보드",
  },
  {
    id: "opensky",
    title: "Open Sky",
    summary: ["탁 트인 시야와", "자연광 가득한 실내"],
    desc: ["파노라마 글라스 루프가 탁 트인 시야와 자연광으로 더욱", "여유로운 공간을 만듭니다."],
    badge: "Panoramic",
    image: openSkyImg,
    alt: "파노라마 글라스 루프가 적용된 ID.5 실내",
  },
  {
    id: "display",
    title: "Smart Display",
    summary: ["필요한 정보를 한눈에", "더 편리한 주행 경험"],
    desc: ["필요한 정보를 한눈에 보여주는 스마트 디스플레이로", "더 편리한 주행 경험을 제공합니다."],
    badge: "Smart",
    image: displayImg,
    alt: "ID.5 센터 디스플레이",
  },
];

function Lines({ lines }) {
  return (
    <>
      {lines[0]}
      <br />
      {lines[1]}
    </>
  );
}

export default function SubInside() {
  // 클릭으로 고른 카드, 호버 중인 카드. 호버가 있으면 호버가 우선
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const active = hovered ?? selected;

  // 모바일 슬라이더: 가로 스크롤 위치로 현재 카드를 계산하고, prev/next는 해당 카드로 스크롤
  const listRef = useRef(null);
  const [slide, setSlide] = useState(0);

  const getStep = (list) => list.firstElementChild.offsetWidth + parseFloat(getComputedStyle(list).columnGap);

  const handleScroll = () => {
    const list = listRef.current;
    setSlide(Math.round(list.scrollLeft / getStep(list)));
  };

  const goTo = (index) => {
    const list = listRef.current;
    const target = Math.max(0, Math.min(cards.length - 1, index));
    list.scrollTo({ left: target * getStep(list), behavior: "smooth" });
  };

  return (
    <section className="sub-inside">
      <div className="sub-inside__inner d-flex flex-column align-center">
        <div className="sub-inside__head d-flex flex-column">
          <p className="sub-inside__eyebrow lh-100">Inside ID.5</p>
          <h2 className="sub-inside__title">기술과 감성이 자연스럽게 어우러진 ID.5만의 실내 공간</h2>
        </div>

        <ul
          ref={listRef}
          className="sub-inside__cards d-flex"
          onMouseLeave={() => setHovered(null)}
          onScroll={handleScroll}
        >
          {cards.map((card) => {
            const isActive = active === card.id;

            return (
              <li
                key={card.id}
                className={`sub-inside__card sub-inside__card--${card.id} ${isActive ? "sub-inside__card--active" : ""}`}
                onMouseEnter={() => setHovered(card.id)}
              >
                <button
                  type="button"
                  className="sub-inside__toggle"
                  aria-pressed={selected === card.id}
                  aria-label={`${card.title} 자세히 보기`}
                  onClick={() => setSelected(card.id)}
                />

                {/* 접힌 상태: 검정 세로 카드 */}
                <div className="sub-inside__collapsed d-flex flex-column align-center" aria-hidden={isActive}>
                  <div className="sub-inside__collapsed-text d-flex flex-column align-center lh-100">
                    <p className="sub-inside__collapsed-eyebrow">Interior Experience</p>
                    <h3>{card.title}</h3>
                    <p className="sub-inside__collapsed-desc">
                      <Lines lines={card.summary} />
                    </p>
                  </div>
                  <div className="sub-inside__thumb">
                    <img src={card.image} alt="" />
                  </div>
                </div>

                {/* 펼친 상태: 흰색 카드. 이미지는 열리는 동안에도 카드 폭을 그대로 따라간다 */}
                <div className="sub-inside__expanded-image" aria-hidden={!isActive}>
                  <img src={card.image} alt={card.alt} />
                </div>

                <div className="sub-inside__expanded" aria-hidden={!isActive}>
                  <div className="sub-inside__caption d-flex align-center justify-between">
                    <div className="sub-inside__caption-text d-flex flex-column lh-100">
                      <p className="sub-inside__caption-eyebrow">Interior Experience</p>
                      <h3 className="sub-inside__caption-title">{card.title}</h3>
                      <p className="sub-inside__caption-desc">
                        <Lines lines={card.desc} />
                      </p>
                    </div>
                    <span className="sub-inside__badge d-flex align-center justify-center lh-100">{card.badge}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* 모바일 전용 슬라이더 진행바 */}
        <div className="sub-inside__slider">
          <div className="sub-inside__progress" aria-hidden="true">
            <span
              style={{
                width: `${100 / cards.length}%`,
                transform: `translateX(${slide * 100}%)`,
              }}
            />
          </div>
          <div className="sub-inside__slider-nav d-flex justify-between">
            <button type="button" onClick={() => goTo(slide - 1)} disabled={slide === 0}>
              Prev
            </button>
            <button type="button" onClick={() => goTo(slide + 1)} disabled={slide === cards.length - 1}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
