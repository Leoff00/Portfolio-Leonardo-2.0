import ScrollAnimation from "react-animate-on-scroll";
import { PortfolioPictures } from "./PortfolioPictures";
import { PortfolioCardSequency, PortfolioSection } from "./styles";
import { MediaContext } from "../../contexts/MediaContext";
import { useContext } from "react";

export function Portfolio() {
  const { isDesktopOrLaptop, isTabletOrMobileDevice } =
    useContext(MediaContext);
  return (
    <>
      {isTabletOrMobileDevice && (
        <>
          <ScrollAnimation animateIn="fadeIn">
            <PortfolioSection id="Portfolio">
              <PortfolioCardSequency>
                <PortfolioPictures />
              </PortfolioCardSequency>
            </PortfolioSection>
          </ScrollAnimation>
        </>
      )}

      {isDesktopOrLaptop && (
        <>
          <ScrollAnimation animateIn="fadeIn">
            <PortfolioSection id="Portfolio">
              <PortfolioCardSequency>
                <PortfolioPictures />
              </PortfolioCardSequency>
            </PortfolioSection>
          </ScrollAnimation>
        </>
      )}
    </>
  );
}
