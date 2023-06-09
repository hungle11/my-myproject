import { useEffect,useState } from "../lib";
import Joi from "joi";
const adminSchema = Joi.object({
    name:Joi.string().required(),
    pass:Joi.string().required(),
});
const adminEditPage = ({id})=>{
    const API_URL= "http://localhost:3000/userAcc";
    const [userAcc, setAccount] = useState([]); 
    useEffect(() => {
        fetch(`http://localhost:3000/userAcc/${id}`)
            .then((response) => response.json())
            .then((data) => {setAccount(data);
            });
    }, []);
    useEffect(() => {
        const formEditAdmin= document.getElementById("form-edit-admin");
        const errorsElement= document.getElementById("errors");
        if (!formEditAdmin) return;
        formEditAdmin.addEventListener("submit", function (event){
            event.preventDefault();
            const formData={
                name:document.querySelector("#name").value,
                pass:document.querySelector("#pass").value,
                email:document.querySelector("#email").value,
            };
            
            fetch(`http://localhost:3000/userAcc/${id}`, {
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
        <form id="form-edit-admin">
                <input type="text" placeholder="User name"  id="name" value="${
                    userAcc.name
                }"/>
                <input type="number" placeholder="Password"  id="pass" value="${
                    userAcc.pass
                }"/>
                <input type="email" placeholder=" Email"  id="email" value="${
                    userAcc.email
                }"/>
                <button>Submit</button>
            </form>
    </div>`;
};

export default adminEditPage;
