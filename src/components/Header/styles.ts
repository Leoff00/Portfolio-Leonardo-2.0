import Styled from "styled-components";

export const BaseContainer = Styled.header`
  width: 100%;
  height: 50px;
  background: #3f3f3f;

  position: fixed;
  top: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 24px;

  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

`;

export const TitleContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 50px;
    height: 50px;
    transition: 0.35s;

    &:hover {
      color: #ffffff;
    }

  }

  span {
    justify-self: center;
    margin: 5px 0px 0px 10px;
    font-size: 28px;
    font-family: Ubuntu, monospace;
    text-align: center;

    color: #ffffff;

    @media screen and (max-width: 767px) {
      font-size: 20px;
      text-align: center;
      flex-wrap: nowrap;
    }

  }

  @media screen and (max-width: 767px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin: 0px 16px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
`;

export const NavContainer = Styled.nav`
  a {
    font-family: Ubuntu, monospace;
    font-weight: 300;
    font-size: 24px;
    margin: 10px;
    text-decoration: none;
    color: #ffffff;

    transition: 0.25s;

    &:hover {
      filter: brightness(50%);
    }

    @media screen and (max-width: 767px) {
      display: none;
    }

  }
`;
