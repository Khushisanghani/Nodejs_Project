import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import AdminProducts from "./AdminProducts";
import  {addProduct, getProduct} from '../Services/Api';

function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
  });

  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const res = await getProduct();
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(formData);
      setFormData({ name: "", price: "", stock: "", category: "" });
      await loadProducts(); 
      alert('Product add');
    } catch (err) {
      console.error("Error adding product", err);
    }
  };

  return (
    <>
      <div className="m-4">
        <Container className="p-4 shadow rounded bg-white" style={{ maxWidth: "600px" }}>
          <h3 className="text-center mb-4">Add Product</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">P_Name</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">P_Price</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">P_Stock</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Choose Product Category</option>
              <option value="mobile">Mobile</option>
              <option value="cloths">Cloths</option>
              <option value="stationery">Stationery</option>
            </Form.Select>

            <div className="p-4 text-center">
              <Button variant="success" type="submit">Add Product</Button>
            </div>
          </Form>
        </Container>
      </div>
      <AdminProducts products={products} refreshProducts={loadProducts} />
    </>
  );
}

export default Admin;
