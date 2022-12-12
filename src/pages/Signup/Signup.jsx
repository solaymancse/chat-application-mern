import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img from "../../assets/signup.png";
import bot from "../../assets/bot.png";
import { Link } from "react-router-dom";
import { Img, Profile, Upload } from "./SignupElements";
import { AiOutlineUpload } from "react-icons/ai";
import { useState } from "react";

export const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;

  // image upload states
  const [image, setImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const validateImg = (e)=> {
    const file = e.target.files[0];
    if(file.size >= 1048576){
      return alert("Max file size ids 1MB.");
    }else{
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const uploadImage = async ()=> {
    const data = new FormData();
    data.append('file',image);
    data.append('upload_preset','hruf1ncm');

    try{
      setUploadingImage(true);
      let res = await fetch("https://api.cloudinary.com/v1_1/dabhwcdyv/image/upload",{
        method:"post",
        body: data,
      })
      const urlData = await res.json();
      setUploadingImage(false);
      return urlData.url;
    }catch(err){
      setUploadingImage(false);
      console.log(err);
    }
  }
  const submitForm = async (e) => {
    e.preventDefault();
    if(!image) return alert("Please upload your profile picture");
    const url = await uploadImage(image);
    console.log(url);
  };
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
          <Form onSubmit={submitForm} style={{ width: "70%" }}>
            <h3 className="text-center">Create Account</h3>
            <Profile className="mb-3">
              <Img src={imagePreview || bot} alt="" />
              <Upload>
                <label htmlFor="upload-image">
                  <AiOutlineUpload />
                </label>
                <input
                  type="file"
                  name="upload-image"
                  id="upload-image"
                  onChange={validateImg}
                  style={{ display: "none" }}
                />
              </Upload>
            </Profile>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
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
             
            >Login</Button>
  
            <div className="py-4">
              <p className="text-center">
                Already have an account ? <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
