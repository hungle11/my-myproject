import { useEffect } from "../lib";
import { useState } from "../lib";
 const admin = () =>{
    const [userAcc, setAccount] = useState([]); 
    useEffect(() => {
        fetch(`http://localhost:3000/userAcc`)
            .then((response) => response.json())
            .then((data) => setAccount(data));
    }, []);
    useEffect(()=>{
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click",function(){
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirm) return;
                fetch(`http://localhost:3000/userAcc/${id}`, {
                    method: "DELETE",
                }).then(()=>{
                    setAccount(userAcc.filter((account1) => account1.id != id));
                })
            })
        }
    })
    return `
    <header>
  <nav>
    <ul>
      <li><a href="/admin/project">Product</a></li>
      <li><a href="/admin/product">Project</a></li>
      <li><a href="/admin">Account</a></li>
     
    </ul>
  </nav>
</header>
<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 20px;
  }
  nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  nav li {
    margin: 0 10px;
  }
  nav li a {
    color: white;
    text-decoration: none;
    padding: 10px;
  }
  nav li a:hover {
    background-color: #444;
    border-radius: 5px;
  }
  
</style>
    
    <table border=1 style="margin="auto">
        <tr>
            <td>STT</td>
            <td>Name</td>
            <td>Email</td>
            <td>Pass</td>
            <td>button</td>
        </tr>
        <tr>
            ${userAcc.map((account1,index)=>`
                <td>${index + 1}</td>
                <td>${account1.name}</td>
                <td>${account1.email}</td>
                <td>${account1.pass}</td>
                <td>
                <a href="/product/${account1.id}/edit">Edit</a>
                <button class="btn btn-remove" data-id="${
                    account1.id
                }">Remove</button>
                <tr></tr>
            </td>
            `).join("")}
        </tr>
    </table>`;
}

export default admin;