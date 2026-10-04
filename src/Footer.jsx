import { useState } from "react";
import customerIcon from "./assets/footer/icon_customer.svg";
import batteryIcon from "./assets/footer/icon_battery.svg";
import carIcon from "./assets/footer/icon_car.svg";
import locationIcon from "./assets/footer/icon_location.svg";
import facebookIcon from "./assets/footer/sns_facebook.svg";
import instagramIcon from "./assets/footer/sns_instagram.svg";
import youtubeIcon from "./assets/footer/sns_youtube.svg";
import kakaotalkIcon from "./assets/footer/sns_kakaotalk.svg";
import blogIcon from "./assets/footer/sns_blog.svg";
import "./Footer.scss";

const quickLinks = [
  { label: "고객센터", icon: customerIcon },
  { label: "배터리 정보확인", icon: batteryIcon },
  { label: "시승신청", icon: carIcon },
  { label: "전시장/서비스 센터 찾기", icon: locationIcon },
];

const menus = [
  {
    title: "구매정보",
    links: ["시승신청", "내 차 만들기", "이 달의 혜택", "카탈로그 다운로드"],
  },
  {
    title: "서비스",
    links: ["온라인 정비 예약", "보증 연장 프로그램", "재고 확인", "전시장 찾기"],
  },
  {
    title: "브랜드",
    links: ["Brand Story", "About us", "이벤트/뉴스", "채용공고"],
  },
];

const snsLinks = [
  { label: "Facebook", icon: facebookIcon },
  { label: "Instagram", icon: instagramIcon },
  { label: "YouTube", icon: youtubeIcon },
  { label: "KakaoTalk", icon: kakaotalkIcon },
];

export default function Footer() {
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (name) => setOpenMenu(openMenu === name ? null : name);

  return (
    <footer className="footer">
      <div className="footer__container d-flex flex-column">
        <ul className="footer__quick d-flex justify-between">
          {quickLinks.map((item) => (
            <li key={item.label}>
              <a href="#" className="footer__quick-link d-flex flex-column align-center">
                <img src={item.icon} alt="" className="footer__quick-icon" />
                <span className="footer__quick-label lh-100">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="footer__bottom d-flex justify-between">
          <nav className="footer__menus d-flex justify-between">
            {menus.map((menu) => (
              <div
                className={`footer__menu d-flex flex-column ${openMenu === menu.title ? "footer__menu--open" : ""}`}
                key={menu.title}
              >
                <h3 className="footer__menu-title lh-100">
                  <button
                    type="button"
                    className="footer__menu-toggle d-flex align-center justify-between"
                    onClick={() => toggleMenu(menu.title)}
                  >
                    {menu.title}
                    <span className="material-symbols-outlined footer__menu-chevron tablet-only">
                      keyboard_arrow_down
                    </span>
                  </button>
                </h3>

                <ul className="footer__menu-list d-flex flex-column">
                  {menu.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer__menu-link lh-100">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className={`footer__sns d-flex flex-column ${openMenu === "sns" ? "footer__menu--open" : ""}`}>
            <h3 className="footer__menu-title lh-100">
              <button
                type="button"
                className="footer__menu-toggle d-flex align-center justify-between"
                onClick={() => toggleMenu("sns")}
              >
                Stay connected
                <span className="material-symbols-outlined footer__menu-chevron tablet-only">
                  keyboard_arrow_down
                </span>
              </button>
            </h3>

            <ul className="footer__sns-list d-flex align-center">
              {snsLinks.map((sns) => (
                <li key={sns.label}>
                  <a href="#" aria-label={sns.label}>
                    <img src={sns.icon} alt="" />
                  </a>
                </li>
              ))}

              <li>
                <a href="#" className="footer__blog" aria-label="Blog">
                  <img src={blogIcon} alt="" className="footer__blog-icon" />
                  <span className="footer__blog-text lh-100">blog</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
