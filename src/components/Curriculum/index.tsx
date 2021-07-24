import { Button } from "react-bootstrap";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { CurriculumContainer, CurriculumSection } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { MediaContext } from "../../contexts/MediaContext";
import { useContext } from "react";

export function Curriculum() {
  const { isDesktopOrLaptop, isTabletOrMobileDevice } =
    useContext(MediaContext);

  return (
    <>
      {isTabletOrMobileDevice && (
        <>
          <ScrollAnimation animateIn="fadeIn">
            <CurriculumSection id="Curriculum">
              <CurriculumContainer>
                <a
                  href="https://drive.google.com/file/d/1rKTGN9CLoAMbpcCcGJ8XuzoeVz_DBNGM/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button color="primary">
                    Clique aqui para Visualizar e Baixar o PDF &nbsp;
                    <CloudDownloadIcon />
                  </Button>
                </a>
              </CurriculumContainer>
            </CurriculumSection>
          </ScrollAnimation>
        </>
      )}

      {isDesktopOrLaptop && (
        <>
          <ScrollAnimation animateIn="fadeIn">
            <CurriculumSection id="Curriculum">
              <CurriculumContainer>
                <a
                  href="https://drive.google.com/file/d/1rKTGN9CLoAMbpcCcGJ8XuzoeVz_DBNGM/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button color="primary">
                    Clique aqui para Visualizar e Baixar o PDF &nbsp;
                    <CloudDownloadIcon />
                  </Button>
                </a>
              </CurriculumContainer>
            </CurriculumSection>
          </ScrollAnimation>
        </>
      )}
    </>
  );
}
