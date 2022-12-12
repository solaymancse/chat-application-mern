import { Container,Row,Col } from "react-bootstrap"
import {Sidebar} from '../../components/Sidebar';
import {MessageForm} from '../../components/MessageForm/MessageForm';
export const Chat = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
        <Sidebar/>
        </Col>
        <Col md={8}>
        <MessageForm/>
        </Col>
      </Row>
    </Container>
  )
}
