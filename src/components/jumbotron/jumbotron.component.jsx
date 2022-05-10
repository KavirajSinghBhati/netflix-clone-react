import React from "react";
import { Inner, Container } from "./styles/jumbotron.styles";

const Jumbotron = ({ children, direction = "row", ...otherProps }) => {
  return <Inner direction={direction}>{children}</Inner>;
};

Jumbotron.Container = function JumbotronContainer({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}; // Compound components

export default Jumbotron;
