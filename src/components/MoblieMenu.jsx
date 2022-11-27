import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import ReactDOM from "react-dom";

const Menu = styled.div`
  position: fixed;
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

const portal = document.getElementById("overlay");

const MobileMenu = () => {
  return (
    <>
      {ReactDOM.createPortal(
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

          <Link to="/login">
            <Button type="login">Login</Button>
          </Link>
          <Link to="/signup">
            <Button type="signup">Sign Up</Button>
          </Link>
        </Menu>,
        portal
      )}
    </>
  );
};

export default MobileMenu;
