import React from "react";
import {
  Item,
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron.styles";

const Jumbotron = ({ children, direction = "row", ...otherProps }) => {
  return (
    <Item direction={direction}>
      <Inner>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = function JumbotronContainer({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}; // Compound components

Jumbotron.Pane = function JumbotronPane({ children, ...otherProps }) {
  return <Pane {...otherProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...otherProps }) {
  return <SubTitle {...otherProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronImage({ ...otherProps }) {
  return <Image {...otherProps} />;
};
export default Jumbotron;
