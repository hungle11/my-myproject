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
                fetch(`http://localhost:3000/setProject/${id}`, {
                    method: "DELETE",
                }).then(()=>{
                    setProject(project.filter((account1) => account1.id != id));
                })
            })
        }
    })
    return `<table border=1 style="margin="auto">
        <tr>
            <td>STT</td>
            <td>title</td>
            <td>description</td>
            <td>skills</td>
            <td>image</td>
            <td>repository</td>
            <td>role</td>
            
        </tr>
        <tr>
            ${project.map((project1,index)=>`
                <td>${index + 1}</td>
                <td>${project1.title}</td>
                <td>${project1.description}</td>
                <td>${project1.skill}</td>
                <td>${project1.repository}</td>
                <td>${project1.url}</td>
                <td>${project1.role}</td>

                <td>
                <a href="/project/${project1.id}/edit">Edit</a>
                <button class="btn btn-remove" data-id="${
                    project1.id
                }">Remove</button>
                <tr></tr>
            </td>
            `).join("")}
        </tr>
    </table>`;
}

export default adminProject;