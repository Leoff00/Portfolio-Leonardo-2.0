import Styled from "styled-components";

export const FooterSection = Styled.footer`
  margin: 5px auto;
  background-color: #464646;
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const FooterParagraph = Styled.p`
  font-family: Ubuntu, sans-serif;
  font-size: 16px;
  color: #ffffff;
`;

export const ButtonsContainer = Styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    width: 100%;
    text-align: center;

    @media screen and (max-width: 767px) {
      font-size: 0.8rem;
    }
  }
`;
