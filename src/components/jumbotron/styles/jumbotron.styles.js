import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justofy-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;
