import Logo from "../assets/Logo.svg";
import Menu from "../assets/menu.svg";
import styled from "styled-components";
import Button from "./UI/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "./MoblieMenu";

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px;
  background-color: #fff;

  & img {
    cursor: pointer;
  }

  & ul {
    list-style: none;
    display: flex;
    gap: 25px;
  }

  & a {
    text-decoration: none;
  }

  & li {
    cursor: pointer;
    color: #4a5168;
  }

  .menu {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    /* For everything lesser than 768px */

    padding: 50px 30px 50px;

    ul,
    .btn {
      display: none;
    }

    .menu {
      display: inline;
    }

    .menu img {
      height: 40px;
    }
  }
`;

const BtnCon = styled.div`
  display: flex;
  gap: 20px;
`;
const Header = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const show = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      {isMobile && <MobileMenu />}
      <Head>
        <Link to="/">
          <div>
            <img src={Logo} alt="" />
          </div>
        </Link>

        <ul>
          <Link to="/explore">
            <li>Explore</li>
          </Link>

          <Link to="/admission-support">
            <li>Admission Support</li>
          </Link>
          <Link to="/community">
            <li>Community</li>
          </Link>
        </ul>

        <div className="menu" onClick={show}>
          <img src={Menu} alt="" />
        </div>

        <BtnCon className="btn">
          <Link to="/login">
            <Button type="login">Login</Button>
          </Link>
          <Button type="signup">Sign Up</Button>
        </BtnCon>
      </Head>
    </>
  );
};

export default Header;
