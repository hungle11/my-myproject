import { useEffect } from "../lib";
import { useState } from "../lib";
 const adminProject = () =>{
    const [project, setProject] = useState([]); 
    useEffect(() => {
        fetch(`http://localhost:3000/project`)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, []);
    useEffect(()=>{
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click",function(){
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirm) return;
                fetch(`http://localhost:3000/Project/${id}`, {
                    method: "DELETE",
                }).then(()=>{
                    setProject(project.filter((account1) => account1.id != id));
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
            <td>title</td>
            <td>description</td>
            <td>skills</td>
            <td>image</td>
            <td>repository</td>
            <td>vercel</td>
            <td>role</td>
            <td>action</td>
            
        </tr>
        <tr>
            ${project.map((project1,index)=>`
                <td>${index + 1}</td>
                <td>${project1.title}</td>
                <td>${project1.description}</td>
                <td>${project1.skill}</td>
                <td><img src="${project1.image}" alt=""></td>
                <td>${project1.repository}</td>
                <td>${project1.url}</td>
                <td>${project1.role}</td>
                <td>
                <a href="/project/${project1.id}/edit">Edit</a>
                <button class="btn btn-remove" data-id="${project1.id}">Remove</button>
                <tr></tr>
                </td>
            `).join("")}
        </tr>
    </table>`;
}

export default adminProject;