import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LoginImg from "../assets/loginImg.png";
import Button from "../components/UI/Button";

const Log = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  h1 {
    color: #fb7c46;
  }

  .img1 {
    height: 100vh;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .login-details {
    padding: 50px;
  }

  .welcome {
    width: 442px;
    border-bottom: 2px solid #ababab;
  }

  .welcome p {
    margin: 1rem 0;
  }

  a {
    color: inherit;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    width: 32.5%;

    img1 {
      display: none;
    }

    .welcome {
      width: 350px;
      border-bottom: 2px solid #ababab;
    }

    .login-details {
      padding: 30px;
    }
  }
`;

const Form = styled.form`
  margin: 1.5rem 0;

  input {
    display: block;
    padding: 1.5rem;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #ababab;
    outline: none;
    margin: 2rem 0;
  }
  input:focus {
    outline: 2px solid #fb7c46;
  }

  .login-alt {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .login-alt span {
    margin-left: 8rem;
  }

  .check-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .check {
    width: fit-content;
    padding: 0;
    margin: 0;
  }

  .check:focus {
    outline: none;
    margin: 0;
  }

  .btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
  }

  button {
    padding: 12px 16px;
    color: #f3f3f3;
    background-color: #fb7c46;
  }

  @media only screen and (max-width: 768px) {
    /* For everything lesser than 768px */

    .login-alt span {
      margin-left: 0;
    }

    button {
      width: 100%;
    }
  }
`;

const Login = () => {
  return (
    <Log>
      <div className="img1">
        <img src={LoginImg} alt="" />
      </div>

      <div className="login-details">
        <div className="welcome">
          <h1>Welcome Back</h1>
          <p>
            don't have an account yet?{" "}
            <span>
              <Link to="/signup">signup</Link>
            </span>
          </p>
        </div>

        <div>
          <Form>
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />

            <div className="login-alt">
              <div className="check-container">
                <input type="checkbox" className="check" />
                <label>Remember Password</label>
              </div>

              <div>
                <Link to="/forgot-password">
                  <span>Forget password?</span>
                </Link>
              </div>
            </div>

            <div className="btn">
              <Button>Login</Button>
            </div>
          </Form>
        </div>
      </div>
    </Log>
  );
};

export default Login;
