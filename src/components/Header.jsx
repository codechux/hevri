import Logo from "../assets/Logo.svg";
import styled from "styled-components";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

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

  @media only screen and (max-width: 768px) {
    /* For everything lesser than 768px */
    margin: 0 auto;

    ul,
    .btn {
      display: none;
    }
  }
`;

const BtnCon = styled.div`
  display: flex;
  gap: 20px;
`;
const Header = (props) => {
  return (
    <Head>
      <div>
        <img src={Logo} alt="" />
      </div>

      <ul>
        <Link to="explore">
          <li>Explore</li>
        </Link>

        <Link to="admission-support">
          <li>Admission Support</li>
        </Link>
        <Link to="community">
          <li>Community</li>
        </Link>
      </ul>

      <BtnCon className="btn">
        <Button type="login">Login</Button>
        <Button type="signup">Sign Up</Button>
      </BtnCon>
    </Head>
  );
};

export default Header;
