import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { registerUser } from "../Services/Api";

function Register() {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:''
    });
    const handlechange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await registerUser(formData);
            console.log("user register",res);
            alert('registration successful');
            setFormData({
                name:'',
                email:'',
                password:''
            })
            
        } catch (error) {
            console.log(error);
            alert("registration fail")
            
        }
    }
  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container className="p-4 shadow rounded bg-white" style={{ maxWidth: "600px" }}>
        <h3 className="text-center mb-4">Registration Form</h3>
        <Form onSubmit={HandleSubmit}>
            <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handlechange}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="email@example.com"
                name="email"
                value={formData.email}
                onChange={handlechange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
            name="password"
                value={formData.password}
                onChange={handlechange}
                required
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <div  className="text-center">
            <Button variant="primary" type="submit">Register</Button>
        </div>
        
        </Form>
         
      </Container>
      </div>
    </>
  );
}
export default Register;
