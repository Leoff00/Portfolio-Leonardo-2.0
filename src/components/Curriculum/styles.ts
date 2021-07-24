import Styled from "styled-components";

export const CurriculumSection = Styled.section`
  width: 100%;
  height: 80vh;
  margin: 0px auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #383838;
  background-image:
  radial-gradient(at 47% 33%, hsl(0.00, 0%, 23%) 0, transparent 59%),
  radial-gradient(at 82% 65%, hsl(0.00, 0%, 12%) 0, transparent 55%);

  //Mobile devices
  @media screen and (max-width: 767px) {
      height: 60vh;
    }

  //Tablets devices
  @media screen and (min-width: 768px) and (max-width:1023px) {
      height: 50vh;
    }

`;

export const CurriculumContainer = Styled.div`
  width: 50%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(2px) saturate(100%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  border: 2px solid rgba(209, 213, 219, 0.3);

  button {
    position: relative;
    animation: moviment 2s infinite;

    @keyframes moviment {
      0% {top: 0px}
      50% {top: 20px}
      100% {top: 0px}
    }
  }

  //Mobile devices
  @media screen and (max-width: 767px) {
      width: 100%;
    }

    @media screen and (min-width: 768px) and (max-width:1023px) {
      width: 75%;
    }

`;
