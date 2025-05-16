import { Button, Container, Table } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";

function CartList(){
    return(
        <> 
            <Container>
                <h3>Cart Item List</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Quntity</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Iphone</td>
                            <td className="d-flex align-items-center gap-2">
                                <Button variant="outline-dark" size="sm"> + </Button>
                                 <span>1</span>
                                <Button variant="outline-dark" size="sm"> - </Button>
                            </td>
                            <td>70000</td>
                            <td>
                                <Button variant="danger" size="sm">
                                    <BsTrash />
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <h3>Total price : 70000</h3>
            </Container>

        </>
    )
}
export default CartList;