import { router } from "../lib";
import { useEffect } from "../lib";
export const Sign_up = () =>{
    useEffect(()=>{
        const formAddAccount = document.querySelector("#form-add-account");
        if (!formAddAccount) return;
        formAddAccount.addEventListener("submit", function (event) {
            event.preventDefault();
            const user = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                pass: document.getElementById("password").value
            };
            fetch(`${import.meta.env.VITE_API_URL}/userAcc`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),

            }).then(()=>{
                alert("Bạn đã thêm tài khoản thành công");
            });
        });

    });
    
    return `
    <form id="form-add-account" class="register-form">
    <h2>Register</h2>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <button type="submit">submit</button>
  </form>
  <style>
    .register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"],
  input[type="email"] {
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3e8e41;
  }
  
  </style>    
    `;
}