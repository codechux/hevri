import BelowTile from "../components/BelowTile";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TileContainer from "../components/TileContainer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <TileContainer />
      <BelowTile />
      <Card />
      <Footer />
    </>
  );
};

export default Home;
