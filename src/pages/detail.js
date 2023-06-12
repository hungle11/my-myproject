import { useEffect,useState } from "../lib";
const detail = ({id})  => {
    const API_URL= "http://localhost:3000/project";
    const [project, setproject] = useState([]); 
    useEffect(() => {
        fetch(`http://localhost:3000/project/${id}`)
            .then((response) => response.json())
            .then((data) => {setproject(data);
            });
    }, []);
    console.log(project);
    return `
    <form id="form-detail">
    <div class="detail1">
        <div class="detail1_block1">
            <img src="${project.image}" alt="">
        </div>

        <div class="detail1_block2">

            <p>${project.title}</p>
            <p>${project.description}</p>
            <p>${project.skill}</p>
            <p>${project.repository}</p>
            <p>${project.url}</p>
            <p>${project.role}</p>
        </div>
    </div>
    </form>
   
    <style>
         .detail1{
             display: flex;

         }
        .detail1_block2{
             margin-left: 50px;
        }
        .detail1_block2 p{
             margin-bottom: 50px;
        }
    </style>
    
       
    `;
}
export default detail;