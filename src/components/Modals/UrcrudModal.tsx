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

export function UrcrudModal({ onHide, show }: ModalProps) {
  return (
    <Modal
      {...{ onHide, show }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Urcrud Application
          <Paragraph>
            Projeto desenvolvido por mim, realizando uma tarefa CRUD, utilizando
            a stack MERN (MongoDB, Express, React e Node).
          </Paragraph>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContentContainer>
          <ImgContainer>
            <PortfolioImages src={data[1].gif} alt={data[1].title} />
          </ImgContainer>
          <GithubAnchorLinks
            href="https://github.com/Leoff00/UR-CRUD"
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
