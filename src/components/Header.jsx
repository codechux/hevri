import Logo from "../assets/Logo.svg";
import styled from "styled-components";
import Button from "./UI/Button";

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

  & li {
    cursor: pointer;
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
        <li>Explore</li>
        <li>Admission Support</li>
        <li>Community</li>
      </ul>

      <BtnCon className="btn">
        <Button type="login">Login</Button>
        <Button type="signup">Sign Up</Button>
      </BtnCon>
    </Head>
  );
};

export default Header;
