import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../assets/Volkswagan_logo.png";

const menuItems = [
  { label: "모델", to: "/models" },
  { label: "구매", to: "/about" },
  { label: "오너혜택", to: "/contact" },
  { label: "서비스", to: "/contact" },
  { label: "브랜드", to: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 메뉴가 열려 있는 동안: 뒤 페이지 스크롤을 막고, Esc나 데스크톱 폭으로 넓어지면 닫는다
  useEffect(() => {
    if (!isMenuOpen) return;

    const close = () => setIsMenuOpen(false);
    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
    };
    const onResize = () => {
      if (window.innerWidth > 1024) close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header d-flex justify-between align-center ${isMenuOpen ? "header--open" : ""}`}>
      {/* 메인으로 이동할 때 열린 메뉴를 닫고, 이미 메인이어도 맨 위로 올라가게 한다 */}
      <Link
        to="/"
        className="header__logo"
        aria-label="Volkswagen 메인으로"
        onClick={() => {
          setIsMenuOpen(false);
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt="Volkswagen" />
      </Link>

      <nav className="header__nav desktop-only d-flex align-center">
        <ul className="header__menu d-flex align-center justify-between">
          {menuItems.map((item) => (
            <li className="header__menu-item" key={item.label}>
              <Link to={item.to} className="header__menu-link lh-100">{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

        <div className="header__utility desktop-only d-flex align-center">
          <button className="header__global lh-100" type="button">
            Global
          </button>

          <span className="header__divider" aria-hidden="true" />

          <button
            className="header__search d-flex align-center justify-center"
            type="button"
            aria-label="검색"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>

        <button
          className="header__menu-button tablet-only d-flex align-center justify-center"
          type="button"
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isMenuOpen}
          aria-controls="header-panel"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMenuOpen ? "close" : "menu"}</span>
        </button>

        <nav
          id="header-panel"
          className="header__panel tablet-only d-flex flex-column"
          aria-label="모바일 메뉴"
        >
          <ul className="header__panel-list d-flex flex-column">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="header__panel-link lh-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
    </header>
  );
}
