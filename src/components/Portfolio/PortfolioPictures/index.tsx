import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { PodcastrModal } from "../../Modals/PodcastrModal";
import { UrcrudModal } from "../../Modals/UrcrudModal";
import { KanbanModal } from "../../Modals/KanbanModal";
import { LetmeaskModal } from "../../Modals/LetmeaskModal";

import { PortfolioHeaderTitle } from "./styles";
import { data } from "../../../Imgdata";
import { FlappyModal } from "../../Modals/FlappyModal";

import { MediaContext } from "../../../contexts/MediaContext";
import { useContext } from "react";

export function PortfolioPictures() {
  const [firstModalShow, setFirstModalShow] = useState(false);
  const [secondModalShow, setSecondModalShow] = useState(false);
  const [thirdyModalShow, setThirdyModalShow] = useState(false);
  const [fourthyModalShow, setFourthyModalShow] = useState(false);
  const [fifthyModalShow, setFifthyModalShow] = useState(false);

  const { isDesktopOrLaptop, isTabletOrMobileDevice } =
    useContext(MediaContext);

  return (
    <>
      <PortfolioHeaderTitle>Projetos</PortfolioHeaderTitle>

      <PodcastrModal
        show={firstModalShow}
        onHide={() => setFirstModalShow(false)}
      />

      <UrcrudModal
        show={secondModalShow}
        onHide={() => setSecondModalShow(false)}
      />

      <KanbanModal
        show={thirdyModalShow}
        onHide={() => setThirdyModalShow(false)}
      />

      <LetmeaskModal
        show={fourthyModalShow}
        onHide={() => setFourthyModalShow(false)}
      />

      <FlappyModal
        show={fifthyModalShow}
        onHide={() => setFifthyModalShow(false)}
      />

      {isTabletOrMobileDevice && (
        <>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-flex w-10"
                src={data[0].img}
                alt={data[0].title}
              />
              <Carousel.Caption>
                <Button variant="dark" onClick={() => setFirstModalShow(true)}>
                  Ver projeto
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-flex w-10"
                src={data[1].img}
                alt={data[1].title}
              />
              <Carousel.Caption>
                <Button variant="dark" onClick={() => setSecondModalShow(true)}>
                  Ver projeto
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-flex w-10"
                src={data[2].img}
                alt={data[2].title}
              />
              <Carousel.Caption>
                <Button variant="dark" onClick={() => setThirdyModalShow(true)}>
                  Ver projeto
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-flex w-10"
                src={data[3].img}
                alt={data[3].title}
              />
              <Carousel.Caption>
                <Button
                  variant="dark"
                  onClick={() => setFourthyModalShow(true)}
                >
                  Ver projeto
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-flex w-10"
                src={data[4].img}
                alt={data[4].title}
              />
              <Carousel.Caption>
                <Button variant="dark" onClick={() => setFifthyModalShow(true)}>
                  Ver projeto
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </>
      )}

      {isDesktopOrLaptop && (
        <>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-flex w-10"
                src={data[0].img}
                alt={data[0].title}
              />
              <Carousel.Caption>
                <Button variant="dark" onClick={() => setFirstModalShow(true)}>
                  Ver projeto
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-flex w-10"
                src={data[1].img}
                alt={data[1].title}
              />
              <Carousel.Caption>
                <Button variant="dark" onClick={() => setSecondModalShow(true)}>
                  Ver projeto
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-flex w-10"
                src={data[2].img}
                alt={data[2].title}
              />
              <Carousel.Caption>
                <Button variant="dark" onClick={() => setThirdyModalShow(true)}>
                  Ver projeto
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-flex w-10"
                src={data[3].img}
                alt={data[3].title}
              />
              <Carousel.Caption>
                <Button
                  variant="dark"
                  onClick={() => setFourthyModalShow(true)}
                >
                  Ver projeto
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-flex w-10"
                src={data[4].img}
                alt={data[4].title}
              />
              <Carousel.Caption>
                <Button variant="dark" onClick={() => setFifthyModalShow(true)}>
                  Ver projeto
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </>
      )}
    </>
  );
}
