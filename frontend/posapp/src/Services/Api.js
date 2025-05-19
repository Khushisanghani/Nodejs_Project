import axios from "axios";
const API = 'http://localhost:8000/api';
export const registerUser = async (Userdata) => {
    try {
        return await axios.post(`${API}/user/register`,Userdata , {
            headers:{
                 'Content-Type': 'application/json',
            }
        })
    } catch (error) {
        console.log(error);
        
    }
}
export const loginUser = async (loginData) => {
  return await axios.post(`${API}/user/login`, loginData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const addProduct = async (add_p) => {
    try {
        return await axios.post(`${API}/products`,add_p , {
            headers:{
                 'Content-Type': 'application/json',
            }
        })
        
    } catch (error) {
        console.log(error);
        
    }
}
export const getProduct = async () => {
    try {
        return await axios.get(`${API}/products`);
    } catch (error) {
        console.log(error);
    }
}
export const updateProduct = async (id, updatedData) => {
  return await axios.put(`${API}/products/${id}`, updatedData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteProduct = async (id) => {
    try {
        return await axios.delete(`${API}/products/${id}`)
    } catch (error) {
        console.log(error);
    }
}


export const createOrder = async (order) => {
  return await axios.post(`${API}/order`, order, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};