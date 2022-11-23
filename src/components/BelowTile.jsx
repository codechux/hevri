import Button from "./UI/Button";
import styled from "styled-components";

const RankCon = styled.div`
  background-color: #121933;
  color: #ffffff;
  text-align: center;

  h3 {
    padding-top: 10rem;
  }
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 0.8rem;
  }

  span {
    color: #fb7c46;
  }

  button {
    margin: 2rem 0 10rem;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1rem;
      padding: 0 2.5rem;
    }
  }
`;

const Bars = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .tile1,
  .tile2 {
    height: 70px;
    background-color: #f3f3f3;
  }

  .tile1 {
    border-top-right-radius: 80px;
  }
  .tile2 {
    border-top-left-radius: 80px;
  }
`;

const BelowTile = () => {
  return (
    <>
      <RankCon>
        <h3>2023 COLLEGE RANKING</h3>
        <h1>
          Discover top <span>Institution</span> in <span>Nigeria</span>
        </h1>
        <p>
          To create these thorough lists, we combined the data and reviews to
          help you get started.
        </p>

        <Button type="signup">Explore Hevrinstitution Ranking 2023</Button>

        <Bars>
          <div className="tile1"></div>
          <div className="tile2"></div>
        </Bars>
      </RankCon>
    </>
  );
};

export default BelowTile;
