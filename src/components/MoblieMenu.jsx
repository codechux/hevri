import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

const Menu = styled.div`
  height: 100vh;
  width: 413.5px;
  background-color: #fb7c46;
  padding: 10px;
  padding: 2rem;

  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-size: 2rem;
    padding: 0;
    margin-bottom: 8rem;
  }

  & li {
    cursor: pointer;
    color: #4a5168;
  }

  & a {
    text-decoration: none;
  }

  button {
    background-color: #fff;
    color: #fb7c46;
    display: block;
    margin: 2rem 0;
  }
`;

const MobileMenu = () => {
  return (
    <Menu>
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

      <Button type="login">Login</Button>
      <Button type="signup">Sign Up</Button>
    </Menu>
  );
};

export default MobileMenu;
