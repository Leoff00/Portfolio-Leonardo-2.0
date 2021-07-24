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

export function FlappyModal({ onHide, show }: ModalProps) {
  return (
    <Modal
      {...{ onHide, show }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Flappy Bird Application
          <Paragraph>
            Projeto desenvolvido por mim para testar meu conhecimento utilizando
            JavaScript Vanilla.
          </Paragraph>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContentContainer>
          <ImgContainer>
            <PortfolioImages src={data[4].gif} alt={data[4].title} />
          </ImgContainer>
          <GithubAnchorLinks
            href="https://github.com/Leoff00/flappyBirdJS"
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
