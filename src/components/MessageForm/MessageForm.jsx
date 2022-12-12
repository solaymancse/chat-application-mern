import {Form,Row,Col} from 'react-bootstrap';
import {Button,Output} from './MessageFormElement';
import {AiOutlineSend} from 'react-icons/ai';

export const MessageForm = () => {
  return (
    <>
    <Output></Output>
    <Form>
      <Row>
        <Col md={11}>
          <Form.Group>
            <Form.Control type='text' placeholder='Your Message'></Form.Control>
          </Form.Group>
        </Col>
        <Col md={1} className="d-flex text-center">
          <Button>
            <AiOutlineSend/>
          </Button>
        </Col>
      </Row>
    </Form>
    </>
  )
}
