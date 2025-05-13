import { Button, Container, Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { deleteProduct } from "../Services/Api";
function AdminProducts({ products, refreshProducts}) {
    const handleDelete = async (id) => {
         await deleteProduct(id);
         refreshProducts();
    }
  return (
    <Container className="mt-4">
      <h4 className="text-white mb-3">Product List</h4>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>P_Name</th>
            <th>P_Price</th>
            <th>P_Stock</th>
            <th>P_Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products && products.length > 0 ? (
            products.map((prod, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.stock}</td>
                <td>{prod.category}</td>
                <td>
                  <Button variant="warning" size="sm" className="me-2">
                    <BsPencilSquare />
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(prod._id)}>
                    <BsTrash />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No products found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminProducts;
