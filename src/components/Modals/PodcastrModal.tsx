import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { data } from "../../Imgdata";
import {
  ContentContainer,
  GithubAnchorLinks,
  ImgContainer,
  Paragraph,
  PortfolioImages,
} from "./styles";

type ModalProps = {
  onHide: () => void;
  show: boolean;
};

export function PodcastrModal({ onHide, show }: ModalProps) {
  return (
    <Modal
      {...{ onHide, show }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Podcastr Bootcamp
          <Paragraph>
            Bootcamp onde foi desenvolvida uma aplicação web com NextJS para
            reprodução de podcasts do canal da RocketSeat.
          </Paragraph>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContentContainer>
          <ImgContainer>
            <PortfolioImages src={data[0].gif} alt={data[0].title} />
          </ImgContainer>
          <GithubAnchorLinks
            href="
            https://github.com/Leoff00/podcastr-nextjs-Rocketseat-Bootcamp"
            target="_blank"
          >
            <Button variant="dark">Ver repositório</Button>
          </GithubAnchorLinks>
        </ContentContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
