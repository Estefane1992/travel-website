import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import "../footer/footer.css";

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <span>
             &copy; 2023 Todos os direitos reservados. Desenvolvido por Estefane 
          </span>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li>
              <BsFacebook />
            </li>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <BsLinkedin />
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
