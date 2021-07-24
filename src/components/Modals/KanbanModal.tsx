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

export function KanbanModal({ onHide, show }: ModalProps) {
  return (
    <Modal
      {...{ onHide, show }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Kanban Application
          <Paragraph>
            Projeto desenvolvido por mim para organizar taréfas simples e
            diretas seguindo a metodologia SCRUM.
          </Paragraph>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContentContainer>
          <ImgContainer>
            <PortfolioImages src={data[2].gif} alt={data[2].title} />
          </ImgContainer>
          <GithubAnchorLinks
            href="https://github.com/Leoff00/React-Kanban"
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
