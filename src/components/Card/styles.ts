import Styled from "styled-components";

export const ProfileSection = Styled.section`
  width: 75%;
  height: 85vh;
  margin: auto;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a1a1a1;
  background-image: radial-gradient(
      at 47% 33%,
      hsl(165, 0%, 100%) 0,
      transparent 59%
    ),
    radial-gradient(at 82% 65%, hsl(0, 0%, 60%) 0, transparent 55%);

    background: linear-gradient(
    124deg,
    #ffffff,
    #000000
  );

  background-size: 1800% 1800%;

  -webkit-animation: blackWhite 8s ease infinite;
  -z-animation: blackWhite 8s ease infinite;
  -o-animation: blackWhite 8s ease infinite;
  animation: blackWhite  8s ease infinite;

  @-webkit-keyframes blackWhite {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
  @-moz-keyframes blackWhite {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
  @-o-keyframes blackWhite {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
  @keyframes blackWhite {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }

   //Mobile devices
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 85vh;
  }

  //Tablets devices
  @media screen and (min-width: 768px) and (max-width:1023px) {
    width: 100%;
    height: 55vh;
    }

}

`;

export const Profile = Styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  filter: opacity(0.95);

  backdrop-filter: blur(5px) saturate(172%);
  -webkit-backdrop-filter: blur(19px) saturate(172%);
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.4);

  button {
    background-color: #6c6c6c;
    font-size: 14px;
    font-weight: bold;

    &:hover {
      background-color: #5f5f5f;
    }
  }

  //Mobile devices
  @media screen and (max-width: 767px) {
    gap: 2px;
  }
    //small devices
    @media screen and (max-width: 320px) {
    height: 100%;
  }

    //Tablets devices
    @media screen and (min-width: 768px) and (max-width:1023px) {
      height: 50vh;
    }

`;

export const AvatarBox = Styled.div`
  width: 18%;
  height: 170px;
  border-radius: 9999px;
  margin: 5px auto;

    //Mobile devices
  @media screen and (max-width: 767px) {
    width: 32%;
    height: 124px;
  }

    //Tablets devices
    @media screen and (min-width: 768px) and (max-width:1023px) {
    width: 16%;
    height: 116px;
    }

    //Small devices
    @media screen and (max-width: 320px) {
      width: 40%;
    }

`;

export const MeAvatar = Styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  box-shadow: rgba(75, 144, 158, 0.4) 0px 10px, rgba(75, 144, 158, 0.3) 0px 15px,
    rgba(75, 144, 158, 0.2) 0px 20px, rgba(75, 144, 158, 0.1) 0px 25px,
    rgba(75, 144, 158, 0.05) 0px 30px;

    transition: 0.3s;

&:hover {
  transform: scale(1.25);
}
`;

export const WhoAmI = Styled.span`
  margin-top: 5px;
  font-size: 16px;
  font-family: Bree serif, sans-serif;
  color: #191919;
  align-self: center;

  transition: 0.3s;

&:hover {
  transform: scale(1.25);
}

  //Mobile devices
@media screen and (max-width: 767px) {
  font-size: 14px;
  }

    //Tablets devices
    @media screen and (min-width: 768px) and (max-width:1023px) {
      font-size: 14px;
    }

`;

export const MyName = Styled.h1`
  font-size: 28px;
  font-family: Bree serif, sans-serif;
  color: #3a3a3a;
  align-self: center;

  transition: 0.3s;

&:hover {
  transform: scale(1.25);
}

    //Mobile devices
    @media screen and (max-width: 767px) {
    font-size: 16px;
    text-align: center;
  }

    //Tablets devices
    @media screen and (min-width: 768px) and (max-width:1023px) {
      font-size: 18px;
      text-align: center;

    }
`;

export const GitHubAnchor = Styled.a`
  svg {
    margin: auto;
    text-decoration: none;
    transition: 0.3s;

    //Mobile devices
    @media screen and (max-width: 767px) {
    width: 12%;
    margin-left: 4px;
  }
}
`;

export const Atsign = Styled.h2`
  margin-top: -8px;
  font-size: 16px;
  font-family: Bree serif, sans-serif;
  font-style: italic;
  font-weight: 300;
  color: #191919;
  align-self: center;

  transition: 0.3s;

&:hover {
  transform: scale(1.25);
}

 //Mobile devices
@media screen and (max-width: 767px) {
  font-size: 12px;
}

      //Tablets devices
      @media screen and (min-width: 768px) and (max-width:1023px) {
      font-size: 16px;
    }

`;

export const Separator = Styled.div`
  width: 50%;
  border-bottom: 2px solid #333030;
  margin-bottom: 24px;

  //Mobile devices
  @media screen and (max-width: 767px) {
    width: 75%;
    margin: -2px auto;
  }
      //Tablets devices
      @media screen and (min-width: 768px) and (max-width:1023px) {
      width: 75%;
      margin: 0px auto;
    }

`;

export const PresentationContainer = Styled.div`
  width: 90%;
  height: 150px;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //Mobile devices
  @media screen and (max-width: 767px) {
    margin: 0px;
    width: 100%;
    height: 60%;
    gap: 8px;
}
    //Tablets devices
    @media screen and (min-width: 768px) and (max-width:1023px) {
    margin: 0px;
    width: 80%;
    height: 60%;
    gap: 16px;
}

  button {

    //small devices
  @media screen and (max-width: 320px) {
    width: 100%;
    height: 10%;
    font-size: 8px;
  }
  }

`;

export const Presentation = Styled.span`
  font-size: 16px;
  line-height: 20px;
  font-family: Roboto, sans-serif;
  font-weight: lighter;
  color: #000000;

  > span {
    font-style: italic;
    font-weight: bold;

    //Mobile devices

    @media screen and (max-width: 767px) {
    font-style: italic;
    font-weight: bold;
  }

      //Tablets devices
      @media screen and (min-width: 768px) and (max-width:1023px) {
      font-style: italic;
      font-weight: bold;
    }

}

  //Mobile devices

  @media screen and (max-width: 767px) {
  font-size: 12.50px;
  line-height: 20px;
}

    //Tablets devices
    @media screen and (min-width: 768px) and (max-width:1023px) {
      font-size: 16px;
      line-height: 20px;
    }

  //small devices
@media screen and (max-width: 320px) {
    font-size: 10px;
    line-height: 16px;
  }

`;

export const PresentationTranslate = Styled.span`
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-weight: lighter;
  color: #000000;

  > span {
    font-style: italic;
    font-weight: bold;

    @media screen and (max-width: 767px) {
    font-style: italic;
    font-weight: bold;
    }
}

     //Mobile devices
    @media screen and (max-width: 767px) {
    font-size: 14px;
}

@media screen and (max-width: 320px) {
    font-size: 10px;
  }

`;
