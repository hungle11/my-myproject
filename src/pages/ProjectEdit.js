import { useEffect,useState } from "../lib";
const EditProject = ({id})=>{
    const API_URL= "http://localhost:3000/project";
    const [project, setproject] = useState([]); 
    useEffect(() => {
        fetch(`http://localhost:3000/project/${id}`)
            .then((response) => response.json())
            .then((data) => {setproject(data);
            });
    }, []);
    useEffect(() => {
        const formEditAdmin= document.getElementById("form-edit-project");
        const errorsElement= document.getElementById("errors");
        if (!formEditAdmin) return;
        formEditAdmin.addEventListener("submit", function (event){
            event.preventDefault();
            const formData={
                title: document.getElementById("title").value,
                description: document.getElementById("description").value,
                skill: document.getElementById("skill").value,
                image: document.getElementById("image").value,
                repository: document.getElementById("repository").value,
                url: document.getElementById("url").value,
                role: document.getElementById("role").value
            };
            
            fetch(`http://localhost:3000/project/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => {
                alert("Bạn đã cập nhật sản phẩm thành công");
            });
        });
    });
    return `
    <div>
        <h1>Edit Admin</h1>
        <div id="errors"></div>
        <form id="form-edit-project">
                <input type="text" placeholder="title"  id="title" value="${
                    project.title
                }"/>
                <input type="text" placeholder="description"  id="description" value="${
                    project.description
                }"/>
                <input type="text" placeholder=" skill"  id="skill" value="${
                    project.skill
                }"/>
                <input type="file" placeholder=" image"  id="image" value="${
                    project.image
                }"/>
                <input type="text" placeholder=" repository"  id="repository" value="${
                    project.repository
                }"/>
                <input type="text" placeholder=" url"  id="url" value="${
                    project.url
                }"/>
                <input type="text" placeholder=" role"  id="role" value="${
                    project.role
                }"/>
                
                <button>Submit</button>
            </form>
    </div>`;
};

export default EditProject;
