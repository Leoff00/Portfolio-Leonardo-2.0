import { MeetSection, MeetText, MeetBackground, MeetPhrase } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { useContext } from "react";
import { MediaContext } from "../../contexts/MediaContext";

export function PhraseText() {
  const { isDesktopOrLaptop, isTabletOrMobileDevice } =
    useContext(MediaContext);

  return (
    <>
      {isTabletOrMobileDevice && (
        <>
          <ScrollAnimation animateIn="fadeIn">
            <MeetBackground id="Home">
              <MeetSection>
                <MeetText>Bem vindo ao meu Portfolio!</MeetText>
                <MeetPhrase>
                  &quot;Your mind is programmable - if you&apos;re not
                  programming your mind, else will program it for you.&quot; -
                  Jeremy Hammond
                </MeetPhrase>
              </MeetSection>
            </MeetBackground>
          </ScrollAnimation>
        </>
      )}

      {isDesktopOrLaptop && (
        <>
          {" "}
          <ScrollAnimation animateIn="fadeIn">
            <MeetBackground id="Home">
              <MeetSection>
                <MeetText>Bem vindo ao meu Portfolio!</MeetText>
                <MeetPhrase>
                  &quot;Your mind is programmable - if you&apos;re not
                  programming your mind, else will program it for you.&quot; -
                  Jeremy Hammond
                </MeetPhrase>
              </MeetSection>
            </MeetBackground>
          </ScrollAnimation>
        </>
      )}
    </>
  );
}
