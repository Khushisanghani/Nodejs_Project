import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { useCartStore } from "../Store/cartStore";
import { createOrder } from "../Services/api";
import { useNavigate } from "react-router-dom";

function CartList() {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } = useCartStore();
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    const orderData = {
      items: cart.map((item) => ({
        productId: item._id,
        quantity: item.quantity,
        discount: 0,
      })),
      totalAmount,
      payment: "cash", 
      date: new Date().toISOString().split("T")[0],
    };

    try {
      await createOrder(orderData);
      alert("Order placed successfully!");
      clearCart();
      navigate("/allproduct");
    } catch (error) {
      console.error(error);
      alert("Order failed!");
    }
  };

  return (
    <Container className="mt-4">
      <h3>Cart Item List</h3>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td className="d-flex align-items-center gap-2">
                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={() => increaseQty(item._id)}
                >
                  +
                </Button>
                <span>{item.quantity}</span>
                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={() => decreaseQty(item._id)}
                >
                  -
                </Button>
              </td>
              <td>₹{item.price}</td>
              <td>₹{item.price * item.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item._id)}
                >
                  <BsTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Row className="align-items-center">
        <Col className="d-flex justify-content-between">
          <h4>Total Price: ₹{totalAmount}</h4>
          <Button variant="success" onClick={handleCheckout}>
            Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CartList;

