import {
  Profile,
  ProfileSection,
  AvatarBox,
  MeAvatar,
  WhoAmI,
  MyName,
  Atsign,
  Separator,
  Presentation,
  PresentationContainer,
  GitHubAnchor,
  PresentationTranslate,
} from "./styles";

import Me from "../../assets/me.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "@material-ui/core/Button";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useState, useContext } from "react";
import { MediaContext } from "../../contexts/MediaContext";

export function Card() {
  const [toggleText, setToggleText] = useState(false);

  const { isDesktopOrLaptop, isTabletOrMobileDevice } =
    useContext(MediaContext);

  function toggleDiv() {
    setToggleText(!toggleText);
  }

  return (
    <>
      {isTabletOrMobileDevice && (
        <>
          <ScrollAnimation animateIn="fadeIn">
            <ProfileSection id="About">
              <Profile>
                <AvatarBox>
                  <MeAvatar src={Me} alt="Leonardo Ferreira" />
                </AvatarBox>

                <WhoAmI>Who am I / Quem sou eu: </WhoAmI>

                <MyName>
                  Leonardo Ferreira{" "}
                  <GitHubAnchor
                    target="_blank"
                    href="https://github.com/Leoff00"
                  >
                    {" "}
                    <GitHubIcon />
                  </GitHubAnchor>
                </MyName>

                <Atsign>Student and Full Stack Developer </Atsign>

                <Separator />

                <PresentationContainer>
                  <Button
                    d-flex
                    onClick={toggleDiv}
                    variant="contained"
                    color="primary"
                  >
                    Traduzir Texto / Translate Text &nbsp;
                    <GTranslateIcon />
                  </Button>
                  {toggleText ? (
                    <>
                      <Presentation>
                        👋 Olá, me chamo Leonardo Ferreira, sou desenvolvedor
                        full-stack me apaixonei pela programação em 2016 onde
                        tive contato com minha primeira linguagem de programação
                        (Delphi), desde então venho estudando, aperfeiçoando
                        minhas skills e aprendendo com meus erros.&nbsp;Ao longo
                        dos meus estudos fiz diversos projetos e utlizando
                        diversas tecnologias como:&nbsp;
                        <span>
                          HTML, CSS, JavaScript, JQuery, Bootstrap, Material UI,
                          NextJS, Node, Webpack, React, Express, TypeScript,
                          JQuery, MongoDB, e MySQL.
                        </span>
                        <p>
                          Atualmente me matenho bastante focado em
                          Desenvolvimento Full-Stack, tendo como objetivo
                          desenvolver algo em qualquer ambiente 👨‍💻.
                        </p>
                      </Presentation>
                    </>
                  ) : (
                    <>
                      <PresentationTranslate>
                        👋 Hi, my name is Leonardo Ferreira, I&apos;m a
                        full-stack developer I fell in love with programming in
                        2016 where I had contact with my first programming
                        language (Delphi), since then I&apos;m keeping studying,
                        increasing my skills and learning with my mistakes. In
                        my studies I did many projects using various
                        technologies such as:&nbsp;
                        <span>
                          HTML, CSS, JavaScript, JQuery, Bootstrap, Material UI,
                          NextJS, Node, Webpack, React, Express, TypeScript,
                          JQuery, MongoDB, and MySQL.
                        </span>
                        <p>
                          Currently i&apos;m focusing in Full stack development,
                          with a will of developing in any environment 👨‍💻.
                        </p>
                      </PresentationTranslate>
                    </>
                  )}
                </PresentationContainer>
              </Profile>
            </ProfileSection>
          </ScrollAnimation>
        </>
      )}

      {isDesktopOrLaptop && (
        <>
          <ScrollAnimation animateIn="fadeIn">
            <ProfileSection id="About">
              <Profile>
                <AvatarBox>
                  <MeAvatar src={Me} alt="Leonardo Ferreira" />
                </AvatarBox>

                <WhoAmI>Who am I / Quem sou eu: </WhoAmI>

                <MyName>
                  Leonardo Ferreira{" "}
                  <GitHubAnchor
                    target="_blank"
                    href="https://github.com/Leoff00"
                  >
                    {" "}
                    <GitHubIcon />
                  </GitHubAnchor>
                </MyName>

                <Atsign>Student and Full Stack Developer </Atsign>

                <Separator />

                <Button onClick={toggleDiv} variant="contained" color="primary">
                  Traduzir Texto / Translate Text &nbsp;
                  <GTranslateIcon />
                </Button>
                <PresentationContainer>
                  {toggleText ? (
                    <>
                      <Presentation>
                        👋 Olá, me chamo Leonardo Ferreira, sou desenvolvedor
                        full-stack me apaixonei pela programação em 2016 onde
                        tive contato com minha primeira linguagem de programação
                        (Delphi), desde então venho estudando, aperfeiçoando
                        minhas skills e aprendendo com meus erros.&nbsp;Ao longo
                        dos meus estudos fiz diversos projetos e utlizando
                        diversas tecnologias como:&nbsp;
                        <span>
                          HTML, CSS, JavaScript, JQuery, Bootstrap, Material UI,
                          NextJS, Node, Webpack, React, Express, TypeScript,
                          JQuery, MongoDB, e MySQL.
                        </span>
                        <p>
                          Atualmente me matenho bastante focado em
                          Desenvolvimento Full-Stack, tendo como objetivo
                          desenvolver algo em qualquer ambiente 👨‍💻.
                        </p>
                      </Presentation>
                    </>
                  ) : (
                    <>
                      <PresentationTranslate>
                        👋 Hi, my name is Leonardo Ferreira, I&apos;m a
                        full-stack developer I fell in love with programming in
                        2016 where I had contact with my first programming
                        language (Delphi), since then I&apos;m keeping studying,
                        increasing my skills and learning with my mistakes. In
                        my studies I did many projects using various
                        technologies such as:&nbsp;
                        <span>
                          HTML, CSS, JavaScript, JQuery, Bootstrap, Material UI,
                          NextJS, Node, Webpack, React, Express, TypeScript,
                          JQuery, MongoDB, and MySQL.
                        </span>
                        <p>
                          Currently i&apos;m focusing in Full stack development,
                          with a will of developing in any environment 👨‍💻.
                        </p>
                      </PresentationTranslate>
                    </>
                  )}
                </PresentationContainer>
              </Profile>
            </ProfileSection>
          </ScrollAnimation>
        </>
      )}
    </>
  );
}
