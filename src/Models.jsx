import { useEffect, useRef, useState } from "react";
import modelsData from "./data/modelsData";
import arrowIcon from "./assets/models_arrow.svg";
import "./Models.scss";

const lastIndex = modelsData.length - 1;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function Models() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStep, setDragStep] = useState(1);
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const indexRef = useRef(activeIndex);
  const dragRef = useRef({ startX: 0, step: 1, moved: false });
  const wheelLock = useRef(false);
  const activeModel = modelsData[activeIndex];

  useEffect(() => {
    indexRef.current = activeIndex;
  }, [activeIndex]);

  // 가로 휠(트랙패드 좌우 스크롤)만 차량 이동으로 씀. 세로 휠은 페이지 스크롤 그대로 유지
  useEffect(() => {
    const stage = stageRef.current;

    const onWheel = (event) => {
      if (wheelLock.current) {
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) event.preventDefault();
        return;
      }

      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;

      const next = indexRef.current + Math.sign(event.deltaX);
      if (next < 0 || next > lastIndex) return;

      event.preventDefault();
      wheelLock.current = true;
      indexRef.current = next;
      setActiveIndex(next);
      setTimeout(() => {
        wheelLock.current = false;
      }, 700);
    };

    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, []);

  // 차량 한 칸의 이동 거리 (차량 폭 + 간격)
  const getStep = () => {
    const [first, second] = trackRef.current.children;
    return second.offsetLeft - first.offsetLeft;
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const step = getStep();
    dragRef.current = { startX: event.clientX, step, moved: false };
    setDragStep(step);
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;

    const { startX, step } = dragRef.current;
    const distance = event.clientX - startX;
    if (Math.abs(distance) > 5) dragRef.current.moved = true;

    setDragX(clamp(distance, (activeIndex - lastIndex - 0.3) * step, (activeIndex + 0.3) * step));
  };

  const handlePointerUp = (event) => {
    if (!isDragging) return;

    const { step, moved } = dragRef.current;
    let next = activeIndex;

    if (!moved) {
      // 드래그 없이 누른 경우: 누른 차량을 가운데로
      const item = document.elementFromPoint(event.clientX, event.clientY)?.closest("[data-index]");
      if (item) next = Number(item.dataset.index);
    } else if (Math.abs(dragX) > Math.min(80, step * 0.15)) {
      const count = Math.round(-dragX / step) || -Math.sign(dragX);
      next = clamp(activeIndex + count, 0, lastIndex);
    }

    setActiveIndex(next);
    setDragX(0);
    setIsDragging(false);
  };

  const handlePointerCancel = () => {
    setDragX(0);
    setIsDragging(false);
  };

  // 드래그 중에는 끌린 만큼 반영한 현재 위치 (0 = 첫 차량이 가운데)
  const position = activeIndex - (isDragging ? dragX / dragStep : 0);

  return (
    <>
      <section className="models">
        <div className="models__container d-flex flex-column">
          <div className="models__top d-flex justify-between">
            <div className="models__intro d-flex flex-column">
              <h2 className="models__title lh-100">OUR MODELS</h2>

              <p className="models__description lh-150">
                검증된 기술과 시대를 초월하는 디자인,<br />
                폭스바겐의 신뢰할 수 있는 라인업을 만나보세요.
              </p>
            </div>

            <div className="model__specs" key={activeModel.name}>
              {activeModel.specs.map((spec) => (
                <div
                  className="model__spec d-flex flex-column"
                  key={spec.label}
                >
                  <span className="model__spec-label lh-100">
                    {spec.label}
                  </span>

                  <strong className="model__spec-value lh-100">
                    {spec.value}
                  </strong>

                  {spec.desc && (
                    <span className="model__spec-desc">
                      {spec.desc}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="models__stage d-flex flex-column" ref={stageRef}>
            <h3 className="models__model-name lh-100" key={activeModel.name}>
              {activeModel.name}
            </h3>

            <button
              type="button"
              className="models__arrow models__arrow--prev desktop-only"
              aria-label="이전 모델"
              disabled={activeIndex === 0}
              onClick={() => setActiveIndex(activeIndex - 1)}
            >
              <img src={arrowIcon} alt="" />
            </button>

            <button
              type="button"
              className="models__arrow models__arrow--next desktop-only"
              aria-label="다음 모델"
              disabled={activeIndex === lastIndex}
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              <img src={arrowIcon} alt="" />
            </button>

            <div className="models__actions tablet-only d-flex align-center">
              <a href="#" className="models__button models__button--fill d-flex align-center justify-center lh-100">
                더 알아보기
              </a>
              <a href="#" className="models__button d-flex align-center justify-center lh-100">
                구매 상담
              </a>
              <a href="#" className="models__button d-flex align-center justify-center lh-100">
                내 차 만들기
              </a>
            </div>

            <div
              className={`models__items ${isDragging ? "models__items--dragging" : ""}`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
            >
              <div
                className="models__track d-flex align-center"
                ref={trackRef}
                style={{ "--index": activeIndex, "--drag": `${dragX}px` }}
              >
                {modelsData.map((model, index) => (
                  <div
                    key={model.name}
                    data-index={index}
                    className={`models__item ${index === activeIndex ? "models__item--active" : ""}`}
                    style={{ "--p": Math.min(1, Math.abs(index - position)) }}
                  >
                    <img
                      src={model.image}
                      alt={model.name}
                      className="models__image"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
