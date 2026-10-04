import { useEffect, useRef, useState } from 'react';
import seat from './assets/seat_img.png';
import './Mycar.scss';

export default function Mycar(){
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // 섹션이 35% 이상 보이면 시트 인터랙션을 시작하고,
  // 화면에서 완전히 벗어나면 되돌려서 다시 들어올 때마다 재생한다
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.35) setIsInView(true);
        else if (!entry.isIntersecting) setIsInView(false);
      },
      { threshold: [0, 0.35] }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
  <section
    className={`mycar d-flex flex-column ${isInView ? "mycar--in" : ""}`}
    ref={sectionRef}
  >
    <img
      src={seat}
      alt="car seat"
      className="mycar__seat-image"
    />

    <div className="mycar__content d-flex flex-column">
      <div className="mycar__text d-flex flex-column">
        <h2 className="mycar__title lh-100">
          CRAFT YOUR
          <br />
          PERFECTION
        </h2>

        <p className="mycar__description lh-100">
          나만의 폭스바겐을 완성하는 가장 특별한 방법
        </p>
      </div>

      <div className="mycar__search d-flex align-center">
        <span className="material-symbols-outlined mycar__search-icon">
          search
        </span>

        <input
          type="text"
          className="mycar__search-input lh-100"
          placeholder="내 차 만들기"
        />
      </div>
    </div>
  </section>
  )
}
