import { useEffect } from "../lib";
import { useState } from "../lib";
 const adminProduct = () =>{
    const [product, setProduct] = useState([]); 
    useEffect(() => {
        fetch(`http://localhost:3000/product`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, []);
    useEffect(()=>{
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click",function(){
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirm) return;
                fetch(`http://localhost:3000/product/${id}`, {
                    method: "DELETE",
                }).then(()=>{
                    setProduct(product.filter((account1) => account1.id != id));
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
            <td>Price</td>
            <td>Date</td>
            <td>Contend</td>
          
            
        </tr>
        <tr>
            ${product.map((product1,index)=>`
                <td>${index + 1}</td>
                <td>${product1.name}</td>
                <td>${product1.price}</td>
                <td>${product1.date}</td>
                <td>${product1.contend}</td>
                

                <td>
                <a href="/pro/${product1.id}/edit">Edit</a>
                <button class="btn btn-remove" data-id="${
                    product1.id
                }">Remove</button>
                <tr></tr>
            </td>
            `).join("")}
        </tr>
    </table>`;
}

export default adminProduct;