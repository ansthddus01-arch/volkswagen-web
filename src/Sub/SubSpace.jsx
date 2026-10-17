import glow from "../assets/sub/meb_glow.svg";
import orbit from "../assets/sub/meb_orbit.png";
import orbitArrow1 from "../assets/sub/meb_orbit_arrow_1.svg";
import orbitArrow2 from "../assets/sub/meb_orbit_arrow_2.svg";
import orbitArrow3 from "../assets/sub/meb_orbit_arrow_3.svg";
import orbitArrow4 from "../assets/sub/meb_orbit_arrow_4.svg";
import diamondShine from "../assets/sub/icon_diamond_shine.svg";
import bluetoothDrive from "../assets/sub/icon_bluetooth_drive.svg";
import electricCar from "../assets/sub/icon_electric_car.svg";
import pinRoad from "../assets/sub/icon_pin_road.svg";
import arrowCircleRight from "../assets/sub/icon_arrow_circle_right_sm.svg";
import "./SubSpace.scss";

const orbitArrows = [orbitArrow1, orbitArrow2, orbitArrow3, orbitArrow4];

const features = [
  { label: "유려한 디자인", icon: diamondShine },
  { label: "스마트 연결", icon: bluetoothDrive },
  { label: "스마트 주행", icon: electricCar },
  { label: "주행 예측", icon: pinRoad },
];

export default function SubSpace() {
  return (
    <section className="sub-space">
      <div className="sub-space__inner d-flex flex-column align-center">
        <img src={glow} alt="" className="sub-space__glow" aria-hidden="true" />

        <div className="sub-space__head d-flex flex-column">
          <p className="sub-space__eyebrow lh-100">MEB Space Concept</p>
          <h2 className="sub-space__title lh-100">
            전기차 전용 플랫폼이 만든 <br className="sub-space__title-break" />
            압도적 공간의 자유
          </h2>
        </div>

        <div className="sub-space__body d-flex align-center justify-center">
          <div className="sub-space__card">
            <img src={orbit} alt="" className="sub-space__orbit" />
            {orbitArrows.map((arrow, index) => (
              <img
                key={arrow}
                src={arrow}
                alt=""
                className={`sub-space__orbit-arrow sub-space__orbit-arrow--${index + 1}`}
              />
            ))}

            <div className="sub-space__card-title d-flex flex-column align-center lh-100">
              <strong>Volkswagen ID.5</strong>
              <span>Beyond Electric</span>
            </div>

            <ul>
              {features.map((feature, index) => (
                <li
                  key={feature.label}
                  className={`sub-space__feature sub-space__feature--${index + 1} d-flex flex-column align-center justify-center`}
                >
                  <img src={feature.icon} alt="" />
                  <span className="lh-100">{feature.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sub-space__desc d-flex flex-column justify-center">
            <div className="sub-space__desc-text d-flex flex-column">
              <div className="sub-space__desc-block d-flex flex-column">
                <p className="sub-space__eyebrow lh-100">EV 전용 MEB 플랫폼</p>
                <h3 className="sub-space__lead">
                  긴 휠베이스를 기반으로 쿠페형 실루엣에도 넉넉한 레그룸과 여유로운 실내 공간을 완성했습니다.
                </h3>
              </div>

              <div className="sub-space__desc-block d-flex flex-column">
                <h4 className="sub-space__sub-title lh-100">유려한 디자인</h4>
                <p className="sub-space__copy">
                  쿠페형 루프라인과 매끄러운 실루엣이
                  <br />
                  역동적이면서도 우아한 인상을 완성합니다.
                  <br />
                  공기역학적 설계로 효율까지 고려했습니다.
                </p>
              </div>
            </div>

            <a href="#" className="sub-space__cta d-flex align-center">
              <span className="lh-100">Detail view</span>
              <img src={arrowCircleRight} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
