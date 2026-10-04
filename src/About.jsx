import Innovation from "./assets/Innovation_img.jpg";
import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <div className="grid-container about__container d-flex">

        <div className="about__intro d-flex flex-column align-center justify-between">
          <div className="about__intro-text d-flex flex-column">
            <p className="about__eyebrow lh-100">
              WHO WE ARE
            </p>

            <h2 className="about__title lh-100">
              폭스바겐은
            </h2>
          </div>

          <p className="about__description lh-150">
            1973년부터 축적된<br />
            정교한 엔지니어링,<br />
            미래의 기술이 되다.
          </p>

          <div className="about__dots tablet-only d-flex align-center" aria-hidden="true">
            <span className="about__dot about__dot--active" />
            <span className="about__dot" />
            <span className="about__dot" />
            <span className="about__dot" />
          </div>

          <div className="about__pagination desktop-only d-flex align-center">
            <span className="about__current lh-100">
              1
            </span>

            <div className="about__page-info">
              <span className="about__ordinal lh-100">
                ST
              </span>

              <span
                className="about__line"
                aria-hidden="true"
              />

              <span className="about__total lh-100">
                3
              </span>
            </div>
          </div>
        </div>

        <div className="about__visual">
          <div className="about__visual-text d-flex flex-column align-center">
            <h2 className="about__visual-title lh-100">
              INNOVATION
            </h2>

            <p className="about__visual-label lh-100">
              혁신
            </p>
          </div>

          <img
            src={Innovation}
            alt="폭스바겐의 혁신적인 기술"
            className="about__visual-img"
          />
        </div>

      </div>
    </section>
  );
}
