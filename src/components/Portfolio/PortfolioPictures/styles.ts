import Styled from "styled-components";

export const PortfolioHeaderTitle = Styled.h1`
  font-size: 32px;
  padding: 0;
  margin: 4px 0px;
  font-family: Bree serif, sans-serif;
  font-weight: bold;
  color: #ffffff;

  //Mobile devices
  @media screen and (max-width: 767px) {
    height: 10%;
    margin: 16px auto;
  }
`;
