import Image from "next/image";
import NavLogo from "../img/primary_lockup_color.png";
import firstImage from "../img/wins1.png";
import sectionFirstLogo from "../img/Group 1171274498.svg";
import sectionSecondLogo from "../img/Group 1171274499.svg";
import sectionThirdLogo from "../img/Group 1171274500.svg";
import sectionBtn from "../img/Vector.svg";
import sectionBtn1 from "../img/Vector(1).svg";
import menu from "../img/menu(2).svg";
import close from "../img/close(1).svg";

export default function Home() {
  return (
    <div className="contain text-white text-sm font-normal">
      <nav className="navbar flex justify-between">
        <div className="logo flex justify-center items-center w-32">
          <Image className="h-8" src={NavLogo} alt="Nav Logo" />
          {/* <a>PRECOG FINANCE</a>  */}
        </div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <span className="menu cursor-pointer">
            {" "}
            <Image src={menu} alt="Menu" width={24} height={24} />
          </span>
          <span className="close cursor-pointer">
            {" "}
            <Image src={close} alt="Close" width={24} height={24} />
          </span>
        </label>
        <ul className="navList flex justify-between items-center list-none text-xs font-medium">
          <li>
            <a className="active " href="#">
              PRODUCTS
            </a>
          </li>
          <li>
            <a href="#">TEAM</a>
          </li>
          <li>
            <a href="#">TOKEN</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">NEWS</a>
          </li>
          <li>
            <a href="#">WHITEPAPER</a>
          </li>
        </ul>
      </nav>
      <main>
        <div className="first flex justify-start items-center">
          <div className="firstText">
            <span className="firstTitle font-extrabold">
              Achieving more together
            </span>
            <p className="pt-5">
              We have an enormous opportunity & responsibility to ensure the
              technology we create benefits everyone on the planet, as well as
              the planet itself.
            </p>
          </div>
          <span className="firstImg">
            <Image src={firstImage} alt="Image" width={500} height={310} />
          </span>
        </div>
        <div className="second">
          <span className="secondTitle font-extrabold">Our commitments</span>
          <p>
            We believe that companies that can do more, should That's why we
            focus on four key areas in which technology can and myst benefit the
            future of humanity and our planet.
          </p>
        </div>
        <section className="sec">
          <div className="sectionFirst sectionDiv">
            <Image
              src={sectionFirstLogo}
              alt="Section Logo 1"
              width={48}
              height={48}
            />
            <h3 className="sectionHeading">Economic opportunity</h3>
            <p className="sectionPara">
              We must ensure that economic opportunity is inclusive-for every
              country, developed and developing; every.
            </p>
            <a className="sectionTitle" href="#">
              LEARN MORE{" "}
              <Image src={sectionBtn} alt="Button" width={14} height={14} />
            </a>
          </div>
          <div className="sectionSecond sectionDiv">
            <Image
              src={sectionSecondLogo}
              alt="Section Logo 2"
              width={48}
              height={48}
            />
            <h3 className="sectionHeading">Fundamental rights</h3>
            <p className="sectionPara">
              We unequivocally support the fundamental rights of people, from
              defending democracy, to addressing.
            </p>
            <a className="sectionTitle" href="#">
              LEARN MORE{" "}
              <Image src={sectionBtn} alt="Button" width={14} height={14} />
            </a>
          </div>
          <div className="sectionThird sectionDiv">
            <Image
              src={sectionThirdLogo}
              alt="Section Logo 3"
              width={48}
              height={48}
            />
            <h3 className="sectionHeading">Sustainable future</h3>
            <p className="sectionPara">
              We must address climate change for a more sustainable future.
              That's why we've set ambitious comitments and have detailed plans
              to achieve them
            </p>
            <a className="sectionTitle" href="#">
              LEARN MORE{" "}
              <Image src={sectionBtn1} alt="Button" width={14} height={14} />
            </a>
          </div>
          <div className="sectionFourth sectionDiv">
            <Image
              src={sectionFirstLogo}
              alt="Section Logo 1"
              width={48}
              height={48}
            />
            <h3 className="sectionHeading">Earn trust</h3>
            <p className="sectionPara">
              We must ensure that economic opportunity is inclusive-for every
              counntry, developed and developing; every.
            </p>
            <a className="sectionTitle" href="#">
              LEARN MORE{" "}
              <Image src={sectionBtn} alt="Button" width={14} height={14} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
