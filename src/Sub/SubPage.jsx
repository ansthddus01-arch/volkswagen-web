import SubHero from "./SubHero.jsx";
import SubSpace from "./SubSpace.jsx";
import SubInside from "./SubInside.jsx";
import SubTestDrive from "./SubTestDrive.jsx";
import Footer from "../Footer.jsx";

// ID.5 모델 상세 서브페이지
export default function SubPage() {
  return (
    <>
      <SubHero />
      <SubSpace />
      <SubInside />
      <SubTestDrive />
      <Footer variant="sub" />
    </>
  );
}
