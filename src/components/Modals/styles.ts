import Styled from "styled-components";

export const Paragraph = Styled.p`
  width: 60%;
  font-size: 16px;
  font-weight: lighter;

`;

export const ContentContainer = Styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 10px;

`;

export const ImgContainer = Styled.div`
  width: 85%;
  height: 80%;

  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  //mobile devices
  @media screen and (max-width: 767px) {
      width: 100%;
    }

`;

export const PortfolioImages = Styled.img`
    width: 100%;
    height: 100%;
    margin: auto;

    //mobile devices
    @media screen and (max-width: 767px) {
      width: 100%;
    }
`;

export const GithubAnchorLinks = Styled.a`
  text-decoration: none;
`;
