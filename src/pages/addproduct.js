import { router } from "../lib";
import { useEffect } from "../lib";
export const addProduct = () =>{
    useEffect(()=>{
        const formAddAccount = document.querySelector("#form-add-product");
        if (!formAddAccount) return;
        formAddAccount.addEventListener("submit", function (event) {
            event.preventDefault();
            const user = {
                name: document.getElementById("name").value,
                price: document.getElementById("price").value,
                date: document.getElementById("date").value,
                contend: document.getElementById("contend").value
            };
            fetch(`${import.meta.env.VITE_API_URL}/product`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),

            }).then(()=>{
                alert("Bạn đã thêm sản phẩm thành công");
            });
        });

    });
    
    return `
    <form id="form-add-product">
    <label for="product-name">Tên sản phẩm:</label>
    <input type="text" id="name" name="product-name">
  
    <label for="product-price">Giá:</label>
    <input type="number" id="price" name="product-price">
  
    <label for="date-imported">Ngày nhập:</label>
    <input type="date" id="date" name="date-imported">
  
    <label for="sale-price">Nội dung:</label>
    <input type="text" id="contend" name="sale-price">
  
    <input type="submit" value="submit">
  </form>
  <style>
  form {
    font-size: 16px;
    color: #333;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="number"],
  input[type="date"] {
    padding: 5px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  input[type="submit"] {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  
    `;
}