import styled from "styled-components";
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";
import Icon3 from "../assets/icon3.svg";

const Bars = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .tile1,
  .tile2 {
    height: 70px;
    background-color: #fff9f6;
  }

  .tile1 {
    border-top-right-radius: 80px;
  }
  .tile2 {
    border-top-left-radius: 80px;
  }
`;

const TileCn = styled.div`
  background-color: #fff9f6;
  min-height: 500px;
  text-align: center;

  h2 {
    color: #0dac98;
    font-weight: 700;
    margin: 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  span {
    color: #fb7c46;
    margin: 0;
  }

  .details {
    max-width: 500px;
    margin: 0 auto;
  }
  .items {
    display: flex;
    justify-content: center;
    align-item: center;
    width: 100vw;
    gap: 30px;
    margin-top: 20px;
  }

  .item {
    max-width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 10px;
    padding: 2.5rem 0;
  }

  .item h1 {
    font-size: 16px;
  }
  @media only screen and (max-width: 768px) {
    .items {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .item {
      margin: 0 20px;
      padding: 20px;
    }

    .details {
      margin: 0 auto;
    }
  }
`;

const data = [
  {
    title: "Explore",
    desc: "By using the right filters, you can find the right course and college.",
    link: "Try our course filter tool",
    img: Icon1,
  },
  {
    title: "Admission Support",
    desc: "We are available to walk you through the application process.",
    link: "Seek advice",
    img: Icon2,
  },
  {
    title: "Community",
    desc: "You would be able to join study groups and get latest academic news.",
    link: "See more",
    img: Icon3,
  },
];

const item = data.map((items) => (
  <div className="item" key={items.title}>
    <img src={items.img} alt={items.title} />
    <h1>{items.title}</h1>
    <p>{items.desc}</p>
    <a href="/">{items.link}</a>
  </div>
));

const TileContainer = () => {
  return (
    <>
      <Bars>
        <div className="tile1"></div>
        <div className="tile2"></div>
      </Bars>
      <TileCn>
        <h2>WHY HEVRINSTITUTION ?</h2>
        <h1>
          Our data is <span>accurate</span> and <span>unique</span>.
        </h1>
        <p className="details">
          To make your search as simple as possible, we provide you with all the
          information, testimonials, and insights in one location.
        </p>

        <div className="items">{item}</div>
      </TileCn>
    </>
  );
};

export default TileContainer;
