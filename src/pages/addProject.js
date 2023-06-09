import { router } from "../lib";
import { useEffect } from "../lib";
export const addProject = () =>{
    useEffect(()=>{
        const formAddAccount = document.querySelector("#form-add-project");
        if (!formAddAccount) return;
        formAddAccount.addEventListener("submit", function (event) {
            event.preventDefault();
            const user = {
                title: document.getElementById("title").value,
                description: document.getElementById("description").value,
                skill: document.getElementById("skill").value,
                image: document.getElementById("image").value,
                repository: document.getElementById("repository").value,
                url: document.getElementById("url").value,
                role: document.getElementById("role").value
            };
            fetch(`${import.meta.env.VITE_API_URL}/project`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),

            }).then(()=>{
                alert("Bạn đã thêm dự án thành công");
            });
        });

    });
    
    return `
    <form id="form-add-project" class="register-form">
    <h2>Register</h2>
    <label for="name">Title:</label>
    <input type="text" id="title" name="title" required>
    <label for="email">description:</label>
    <input type="text" id="description" name="description" required>
    <label for="password">Skill:</label>
    <input type="text" id="skill" name="skill" required>
    <label for="password">image:</label>
    <input type="file" id="image" name="image" required>
    <label for="password">repository:</label>
    <input type="text" id="repository" name="repository" required>
    <label for="password">url:</label>
    <input type="text" id="url" name="url" required>
    <label for="password">role:</label>
    <input type="text" id="role" name="role" required>
    
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