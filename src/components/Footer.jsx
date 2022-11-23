import styled from "styled-components";
import FooterLogo from "../assets/footerLogo.svg";
import Linkedin from "../assets/linkedinLogo.svg";
import Twitter from "../assets/twitterLogo.svg";

const Container = styled.div`
  background-color: #f3f3f3;
  padding-top: 3rem;
`;

const Bars = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .tile1,
  .tile2 {
    height: 70px;
    background-color: #121933;
  }

  .tile1 {
    border-top-right-radius: 80px;
  }
  .tile2 {
    border-top-left-radius: 80px;
  }
`;

const Foot = styled.footer`
  background-color: #121933;
  padding 10px 100px;
  color: #f3f3f3;
  display:flex;
  flex-direction: column;

.footer{
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.logo-section, .company, .articles{
    width: 33%;
    height: 400px;
}

.company ul{
    list-style:none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.company {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.articles {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;
}

.footer-initials{
    display:flex;
    justify-content: space-between;
}

@media only screen and (max-width: 768px) {
    padding: 0 30px;

    .footer{
        flex-direction: column-reverse;
        gap: 5rem;
    }

    .logo-section, .company, .articles{
        width: 350px;
        height: fit-content;
    }

    .company {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 5px;
    }
    .footer-initials{
        padding: 3rem 0;
    }
    

}
`;
const Footer = () => {
  return (
    <>
      <Container>
        <Bars>
          <div className="tile1"></div>
          <div className="tile2"></div>
        </Bars>

        <Foot>
          <div className="footer">
            <div className="logo-section">
              <img src={FooterLogo} alt="" />
              <p>
                We provide you with the necessary information to ease your
                decision-making in finding the right school for you.
              </p>
            </div>

            <div className="company">
              <h4>Company</h4>
              <ul>
                <li>Explore</li>
                <li>Admission Support</li>
                <li>Community</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="articles">
              <h4>Recent articles</h4>
              <p>How to Write a Winning Scholarship Essay.</p>
              <p>
                Everything you need to know about applying for a master’s in
                Nigeria.
              </p>
              <p>How to Prepare for a Career in Law as a High Schooler.</p>
              <p>Most affordable cities to study Architecture</p>
              <p>Top art & design schools in 2022.</p>
            </div>
          </div>

          <div className="footer-initials">
            <div>
              <p className="trademark">© Hevrinstitution. 2022</p>
            </div>

            <div className="sm">
              <img src={Linkedin} alt="" />
              <img src={Twitter} alt="" />
            </div>
          </div>
        </Foot>
      </Container>
    </>
  );
};

export default Footer;
