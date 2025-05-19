import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { getProduct } from '../Services/api';
import { useCartStore } from '../Store/cartStore'; 

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart); 

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProduct();
      if (res && res.data) {
        setProducts(res.data);
      }
    };
    fetchProducts();
  }, []);

  const handleClick = () => {
    navigate("/admin");
  };

  return (
    <div className="container mt-5">
      <Button onClick={handleClick}>+</Button>
      <h2 className="mb-4">Products</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text"><b>₹{product.price}</b></p>
                <p className="card-text">Stock: {product.stock}</p>
                <p className="card-text">Category: {product.category}</p>
              </div>
              <Button
                variant="outline-dark"
                className='m-2'
                onClick={() => addToCart(product)} 
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;

