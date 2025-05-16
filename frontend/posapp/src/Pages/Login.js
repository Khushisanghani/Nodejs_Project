
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../Services/api";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      console.log(res);
      alert("Login successful!");
      navigate("/allproduct");
    } catch (error) {
      console.error(error);
      alert("Login failed please registration first" );
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container className="p-4 shadow rounded bg-white" style={{ maxWidth: "600px" }}>
        <h3 className="text-center mb-4">Login Form</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Email</Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Password</Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">Login</Button>
          </div>
          <p className="text-center mt-3">
            Don't have an account? <NavLink to="/register">Register Here</NavLink>
          </p>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
