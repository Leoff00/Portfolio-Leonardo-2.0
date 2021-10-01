import Styled from "styled-components";
import code from "../../assets/pic.jpg";

export const MeetBackground = Styled.section`
  width: 100%;
  height: 90vh;
  margin: 0px auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${code});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 767px) {
    height: 55vh;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  height: 50vh;
  }

`;

export const MeetSection = Styled.div`
  width: 60%;
  height: 50%;
  margin: 20px auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 767px) {
  width: 100%;
  gap: 15px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  width: 100%;
  gap: 15px;
  }

`;

export const MeetText = Styled.h1`
  word-spacing: 4px;
  font-size: 40px;
  font-family: Ubuntu, monospace;
  font-weight: 700;
  color: #ffffff;
  overflow: hidden;
  border-right: 10px solid white;
  white-space: nowrap;
  margin: 0px 5px;
  animation:
    typing 4.5s steps(15, end) infinite,
    blink-caret .75s step-end infinite;

    //Tablet Devices
    @media screen and (max-width: 767px) {
      font-size: 20px;
      border-right: 8px solid white;
      animation: blink-caret .75s step-end infinite;
      @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: white; }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 32px;
      border-right: 8px solid white;
      animation: blink-caret .75s step-end infinite;
      @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: white; }
    }
  }

  //Big resolutions
  @media screen and (min-width: 1024px) {
    font-size: 32px;
      border-right: 8px solid white;
      animation: blink-caret .75s step-end infinite;
      @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: white; }
    }
  }


@keyframes typing {
  0% { width: 46% }
  25% { width: 70% }
  50% { width: 70% }
  75% { width: 70% }
  100% {width: 46%}
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white; }
}

  transition: 0.3s;

  &:hover {
    filter: brightness(60%);
  }
`;

export const MeetPhrase = Styled.h2`
  word-spacing: 4px;
  font-size: 24px;
  font-family: Ubuntu, monospace;
  font-weight: 700;
  font-style: italic;
  color: #ffffff;

  transition: 0.3s;

  &:hover {
    filter: brightness(60%);
  }

  //Smartphones
  @media screen and (max-width: 767px) {
    font-size: 18px;
    width: 85%;
    }

  //Tablets
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  font-size: 32px;
  width: 85%;  }

`;
