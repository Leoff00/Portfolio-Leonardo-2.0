import { Button } from "react-bootstrap";
import { ButtonsContainer, FooterParagraph, FooterSection } from "./styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import { MediaContext } from "../../contexts/MediaContext";
import { useContext } from "react";

export function Footer() {
  const { isDesktopOrLaptop, isTabletOrMobileDevice } =
    useContext(MediaContext);
  return (
    <>
      {isTabletOrMobileDevice && (
        <>
          <FooterSection>
            <FooterParagraph> © Leonardo Ferreira - 2021 </FooterParagraph>

            <ButtonsContainer>
              <a
                href="https://www.linkedin.com/in/leonardo-ferreira-253a60173/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="dark">
                  LinkedIn <LinkedInIcon />
                </Button>{" "}
              </a>
              <a
                href="https://github.com/Leoff00"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="dark">
                  Github <GitHubIcon />
                </Button>{" "}
              </a>
              <a
                href="https://www.instagram.com/zinnlua/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="dark">
                  Instagram <InstagramIcon />
                </Button>{" "}
              </a>
            </ButtonsContainer>
          </FooterSection>
        </>
      )}

      {isDesktopOrLaptop && (
        <>
          <FooterSection>
            <FooterParagraph> © Leonardo Ferreira - 2021 </FooterParagraph>

            <ButtonsContainer>
              <a
                href="https://www.linkedin.com/in/leonardo-ferreira-253a60173/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="dark">
                  LinkedIn <LinkedInIcon />
                </Button>{" "}
              </a>
              <a
                href="https://github.com/Leoff00"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="dark">
                  Github <GitHubIcon />
                </Button>{" "}
              </a>
              <a
                href="https://www.instagram.com/zinnlua/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="dark">
                  Instagram <InstagramIcon />
                </Button>{" "}
              </a>
            </ButtonsContainer>
          </FooterSection>
        </>
      )}
    </>
  );
}
