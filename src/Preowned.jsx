import { useEffect, useRef, useState } from 'react';
import golfBack from './assets/Golf_GTI_back.png';
import id5Back from './assets/ID_5_back.png';
import atlasBack from './assets/Atals_back.png';
import './Preowned.scss';

export default function Preowned(){
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // 섹션이 30% 이상 보이면 차량 등장 인터랙션을 시작하고,
  // 화면에서 완전히 벗어나면 되돌려서 다시 들어올 때마다 재생한다
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.3) setIsInView(true);
        else if (!entry.isIntersecting) setIsInView(false);
      },
      { threshold: [0, 0.3] }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
  <section
    className={`preowned ${isInView ? "preowned--in" : ""}`}
    ref={sectionRef}
  >
    <div className="preowned__container d-flex">
      <div className="preowned__content d-flex flex-column">
        <div className="preowned__text d-flex flex-column">
          <h2 className="preowned__title lh-125">
            VW CERTIFIED
            <br />
            Pre-Owned
          </h2>

          <p className="preowned__description lh-125">
            현재 위치를 입력하면 주변에 가까운 매장을
            <br />
            한 눈에 확인 할 수 있습니다.
          </p>
        </div>

        <div className="preowned__search d-flex align-center">
          <span className="material-symbols-outlined preowned__search-icon">
            search
          </span>

          <input
            type="text"
            className="preowned__search-input lh-100"
            placeholder="폭스바겐 공식 인증 중고차 매장 검색"
          />
        </div>
      </div>

      <div className="preowned__cars">
        <img
          src={golfBack}
          alt="Golf GTI"
          className="preowned__car preowned__car--golf"
        />
        <span className="preowned__dust preowned__dust--golf" aria-hidden="true" />

        <img
          src={id5Back}
          alt="ID.5"
          className="preowned__car preowned__car--id5"
        />
        <span className="preowned__dust preowned__dust--id5" aria-hidden="true" />

        <img
          src={atlasBack}
          alt="Atlas"
          className="preowned__car preowned__car--atlas"
        />
        <span className="preowned__dust preowned__dust--atlas" aria-hidden="true" />
      </div>
    </div>
  </section>
  )
}
