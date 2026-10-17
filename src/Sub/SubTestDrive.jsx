import logoImg from "../assets/sub/id5_logo.png";
import glow from "../assets/sub/id5_glow.svg";
import starA from "../assets/sub/id5_star_a.svg";
import starB from "../assets/sub/id5_star_b.svg";
import starC from "../assets/sub/id5_star_c.svg";
import checkIcon from "../assets/sub/icon_check.svg";
import arrowOutward from "../assets/sub/icon_arrow_outward.svg";
import arrowOutwardLight from "../assets/sub/icon_arrow_outward_light.svg";
import "./SubTestDrive.scss";

// 로고 주변 반짝이는 점: 시안 좌표의 중심점 기준 (x/y: 데스크톱, mx/my: 모바일)
const stars = [
  { src: starA, x: 168.5, y: 67.5, mx: 28.3, my: 51.5 },
  { src: starA, x: 361.5, y: 25.5, mx: 227.2, my: 9.5 },
  { src: starA, x: 240.5, y: 38.5, mx: 102.5, my: 22.5 },
  { src: starC, x: 399.5, y: 47.5, mx: 266.4, my: 31.5 },
  { src: starC, x: 500.5, y: 107.5, mx: 370.5, my: 91.5 },
  { src: starC, x: 142.5, y: 110.5, mx: 1.5, my: 94.5 },
  { src: starB, x: 197.5, y: 76.5, mx: 58.2, my: 60.5 },
  { src: starB, x: 439.5, y: 38.5, mx: 307.6, my: 22.5 },
];

const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);

function Field({ label, required, wide, children }) {
  return (
    <label className={`sub-drive__field d-flex ${wide ? "sub-drive__field--wide" : ""}`}>
      <span className="sub-drive__label lh-100">
        {label}
        {required && <em aria-hidden="true">*</em>}
      </span>
      {children}
    </label>
  );
}

export default function SubTestDrive() {
  return (
    <section className="sub-drive" id="test-drive">
      <div className="sub-drive__visual" aria-hidden="true">
        <img src={glow} alt="" className="sub-drive__glow" />
        {stars.map((star) => (
          <img
            key={`${star.x}-${star.y}`}
            src={star.src}
            alt=""
            className="sub-drive__star"
            style={{ "--x": star.x, "--y": star.y, "--mx": star.mx, "--my": star.my }}
          />
        ))}
        <img src={logoImg} alt="" className="sub-drive__logo" />
      </div>

      <div className="sub-drive__inner d-flex flex-column align-center">
        <h2 className="sub-drive__title">
          ID.5
          <br />
          <span>The all-electric</span>
        </h2>

        <div className="sub-drive__body d-flex justify-center">
          <div className="sub-drive__intro d-flex flex-column">
            <div className="d-flex flex-column sub-drive__intro-head">
              <p className="sub-drive__eyebrow">Test Drive</p>
              <h3 className="sub-drive__heading">
                ID.5를 가장 가까이에서
                <br />
                경험해보세요.
              </h3>
            </div>
            <p className="sub-drive__copy">ID.5를 가장 가까이에서 경험해보세요.</p>
          </div>

          <form className="sub-drive__form d-flex flex-column" onSubmit={(event) => event.preventDefault()}>
            <div className="sub-drive__fields d-flex flex-column">
              <div className="sub-drive__row d-flex">
                <Field label="이름" required>
                  <input type="text" name="name" placeholder="이름" required />
                </Field>
                <Field label="연락처" required>
                  <input type="tel" name="phone" placeholder="000-0000-0000" required />
                </Field>
              </div>

              <Field label="이메일" required>
                <input type="email" name="email" placeholder="이메일" required />
              </Field>

              <div className="sub-drive__row d-flex">
                <Field label="시승희망일" required>
                  <select name="month" defaultValue="" required>
                    <option value="" disabled>월 선택</option>
                    {months.map((month) => (
                      <option key={month} value={month}>{month}월</option>
                    ))}
                  </select>
                </Field>
                <Field label="시승희망일" required>
                  <select name="day" defaultValue="" required>
                    <option value="" disabled>일 선택</option>
                    {days.map((day) => (
                      <option key={day} value={day}>{day}일</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="기타 시승 관련 요청사항" wide>
                <textarea name="message" placeholder="시승 관련 요청사항을 작성해주세요." />
              </Field>
            </div>

            <div className="sub-drive__actions d-flex align-center justify-between">
              <label className="sub-drive__agree d-flex align-center">
                <input type="checkbox" name="agree" required />
                <span className="sub-drive__check d-flex align-center justify-center">
                  <img src={checkIcon} alt="" />
                </span>
                <span className="lh-100">개인정보 수집 및 이용에 동의합니다.</span>
              </label>

              <button type="submit" className="sub-drive__submit d-flex align-center">
                <span>시승/상담신청 완료</span>
                <span className="sub-drive__submit-icon d-flex align-center justify-center">
                  <picture>
                    <source media="(max-width: 600px)" srcSet={arrowOutwardLight} />
                    <img src={arrowOutward} alt="" />
                  </picture>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
