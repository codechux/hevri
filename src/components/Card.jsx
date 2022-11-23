import styled from "styled-components";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Button from "./UI/Button";

const Container = styled.div`
  padding: 0 100px;
  background-color: #f3f3f3;
  border-radius: 10px;

  h1 {
    margin: 0;
    font-size: 14px;
    color: #fb7c46;
    padding-bottom: 6px;
  }
  p {
    margin: 0;
    font-size: 12px;
    padding-bottom: 3rem;
  }

  button {
    font-size: 10px;
    padding: 10px 42px;
    margin: 20px 0;
    text-align: center;
    width: 32.5%;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 30px;

    button {
      width: 100%;
    }
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 8px;

  > div {
    background-color: #fff;
    height: 150px;
    border-radius: 10px;
  }

  .number1 {
    grid-row-start: 1;
    grid-row-end: 3;
    background-color: #fff;
    height: 308px;
    border-radius: 10px;
    overflow: hidden;
  }
  .number2 {
    background-color: #fff;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .number1 {
      height: 165px;
    }
  }
`;

const Img = styled.div`
  width: inherit;
  height: 300px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  h6 {
    color: #121933;
  }

  p {
    // padding: 0;
    font-size: 8px;
    color: grey;
  }

  h6,
  p {
    padding: 4px;
  }
  @media only screen and (max-width: 768px) {
    height: 150px;

    img {
      width: 100%;
      height: 100px;
      object-fit: cover;
    }
  }
`;
const Img20 = styled.div`
  width: inherit;
  height: 150px;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }

  h6 {
    padding: 4px;
    font-size: 12px;
    color: #121933;
  }
`;
const Card = () => {
  return (
    <>
      <Container>
        <div>
          <h1>START YOUR COLLEGE APPLICATION WITH HEVRINSTITUTION</h1>
          <p>
            Ready to start your university application? Begin your journey with
            Hevrinstitution and receive customised support from our advisers.
          </p>
        </div>

        <Section>
          <div className="number1">
            <Img>
              <img src={Img1} alt="" />
              <h6>Start your university application with Hevrinstution</h6>
              <p>
                Learn how to apply to the best schools and universities with the
                aid of Hevrinstution advisers.
              </p>
            </Img>
          </div>
          <div className="number2">
            <Img20>
              <img src={Img2} alt="" />
              <h6>Studying in Nigeria: Western region Vs Eastern region.</h6>
            </Img20>
          </div>
          <div className="number2">
            <Img20>
              <img src={Img2} alt="" />
              <h6>Studying in Nigeria: Western region Vs Eastern region.</h6>
            </Img20>
          </div>
          <div className="number2">
            <Img20>
              <img src={Img2} alt="" />
              <h6>Studying in Nigeria: Western region Vs Eastern region.</h6>
            </Img20>
          </div>
          <div className="number2">
            <Img20>
              <img src={Img2} alt="" />
              <h6>Studying in Nigeria: Western region Vs Eastern region.</h6>
            </Img20>
          </div>
        </Section>
        <Button type="signup">
          Start your application with Hevrinstitution{" "}
        </Button>
      </Container>
    </>
  );
};

export default Card;
