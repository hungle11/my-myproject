import { router } from "../lib";
import { useEffect } from "../lib";
export const Sign_in = () =>{
  useEffect(() => {
    const formSignin = document.querySelector("#form-signin");
    if (!formSignin) return;
    formSignin.addEventListener("submit", function (event) {
        // chặn reload trang
        event.preventDefault();

        const credential = {
            email: document.querySelector("#email").value,
            password: document.querySelector("#password").value,
        };

        fetch(`http://localhost:3000/userAcc/sign_in`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credential),
        })
            .then((response) => response.json())
            .then((data) => {
                // lưu vào localStorage
                localStorage.setItem("user", JSON.stringify(data));
            });
    });
});
    return `
    <div class="form_bg">
    <form id="form-signin" class="login-form">
        <h2>Login</h2>
        <label for="username">email:</label>
        <input type="text" id="email" name="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Submit</button>
      </form>
    </div>
      <style>
        .form_bg{
            border: solid 1px gray;
            border-radius: 10px;
            width: 40%;
            margin: auto;
            }
        .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }
    
    label {
      font-weight: bold;
    }
    
    input[type="text"],
    input[type="password"] {
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
      </style>`;
}
