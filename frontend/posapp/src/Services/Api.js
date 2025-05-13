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
export const deleteProduct = async (id) => {
    try {
        return await axios.delete(`${API}/products/${id}`)
    } catch (error) {
        console.log(error);
    }
}