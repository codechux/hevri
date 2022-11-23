import styled from "styled-components";
import Button from "./UI/Button";

const HeroSection = styled.section`
  height: calc(100vh - 150px);
  width: 700px;
  margin: 0 auto;
  text-align: center;
  // background-color: #fff;

  .space {
    padding-top: 8rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h5 {
    color: #0dac98;
    font-weight: 300;
  }

  .span {
    color: #fb7c46;
    font-family: Space Grotesk;
  }

  p {
    font-family: Inter;
  }

  button {
    margin: 2.5rem 0;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #aeaeae;
    // position: absolute;
    // color: #d8d8d8;
  }

  input:focus {
    outline: 2px solid #fb7c46;
    border: none;
  }

  input::placeholder {
    padding-left: 30px;
  }

  @media only screen and (max-width: 768px) {
    width: 400px;

    .space {
      padding-top: 2rem;
    }
  }
`;

const Hero = () => {
  return (
    <>
      <HeroSection>
        <div className="space">
          <h5>EXPLORE DIFFERENT INSTITUTION</h5>
          <h1>
            Find the <span className="span">institution</span> that{" "}
            <span className="span">suits</span> you best.
          </h1>

          <p>
            Finding the right school shouldn’t be hard. From the college of
            education, polytechnic and University, we provide the necessary
            information to ease your decision-making in finding the right school
            for you.
          </p>

          <Button type="signup">Sign up Today!</Button>
        </div>
        <input
          type="text"
          placeholder="Search for colleges, courses, admission and communities"
        />
      </HeroSection>
    </>
  );
};

export default Hero;
