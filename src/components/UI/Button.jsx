import styled from "styled-components";

const Btn = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: Space Grotesk;
  color: ${(props) => Colors[props.type]};
  background-color: ${(props) => backgroundColors[props.type]};
  :hover {
    background-color: ${(props) => hoverBgColors[props.type]};
  }
`;

const backgroundColors = {
  signup: "#FB7C46",
  login: "#FB7C460a",
};

const Colors = {
  signup: "white",
  login: "#FB7C46",
};

const hoverBgColors = {
  //   login: "#15447D",
  //   signup: "#900B21",
};

const Button = (props) => {
  return <Btn type={props.type}>{props.children}</Btn>;
};

export default Button;
