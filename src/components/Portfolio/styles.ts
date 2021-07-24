import Styled from "styled-components";

export const PortfolioSection = Styled.section`
  width: 100%;
  height: 85vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #2a2a2a;

  //Mobile devices
  @media screen and (max-width: 767px) {
    height: 55vh;
  }

    //Tablets devices
    @media screen and (min-width: 768px) and (max-width:1023px) {
      height: 55vh;
    }

`;

export const PortfolioCardSequency = Styled.div`
  width: 90%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    border: 2px solid #000000;
    width: 70%;
    height: 70%;
    margin: auto;

    //mobile devices
    @media screen and (max-width: 767px) {
      width: 100%;
    }

    //Tablets devices
    @media screen and (min-width: 768px) and (max-width:1023px) {
      width: 100%;
    }

  }

  //Tablets devices
  @media screen and (max-width: 767px) {
    gap: 16px;
    }

    @media screen and (min-width: 768px) and (max-width:1023px) {
      gap: 32px;
    }

`;
