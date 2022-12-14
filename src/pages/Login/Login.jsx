import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/appApi";



export const Login = () => {  
  const [user, setUser] = useState({
    email:'',
    password:''
  })
const {email, password} = user;
const [loginUser, {isLoading, error}] = useLoginUserMutation();
const navigate = useNavigate();
  const handleChange = (e)=> {
    setUser((prev)=> ({...prev, [e.target.name]: e.target.value}));

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //login logic
    loginUser({email,password}).then(({data})=>{
      if(data){
        // socket work
        // navigate to the chat
        navigate('/chat');
      }
    })

  }
  return (
    <Container>
      <Row>
        <Col md={5}>
          <img src={img} alt="" />
        </Col>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={{ width: "70%" }} onSubmit={handleSubmit}>
            <h3 className="text-center">Login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#FF861A",
                border: "none",
              }}
            >
              Login
            </Button>
            <div className="py-4">
              <p className="text-center">
                Don't have an account ? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
