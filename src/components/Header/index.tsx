import { BaseContainer, TitleContainer, NavContainer } from "./styles";
import CodeIcon from "@material-ui/icons/Code";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useContext } from "react";
import { MediaContext } from "../../contexts/MediaContext";

export function Header() {
  const { isTabletOrMobileDevice, isDesktopOrLaptop } =
    useContext(MediaContext);

  return (
    <>
      {isDesktopOrLaptop && (
        <>
          <BaseContainer>
            <TitleContainer>
              <CodeIcon />
              <span>{"{ Leonardo Ferreira }"}</span>
            </TitleContainer>

            <NavContainer>
              <AnchorLink href="#Home">Home</AnchorLink>
              <AnchorLink href="#About">Sobre</AnchorLink>
              <AnchorLink href="#Portfolio">Portfolio</AnchorLink>
              <AnchorLink href="#Curriculum">Curriculum</AnchorLink>
            </NavContainer>
          </BaseContainer>
        </>
      )}

      {isTabletOrMobileDevice && (
        <>
          <BaseContainer>
            <TitleContainer>
              <CodeIcon />
              <span>{"{ Leonardo Ferreira }"}</span>
            </TitleContainer>
          </BaseContainer>
        </>
      )}
    </>
  );
}
