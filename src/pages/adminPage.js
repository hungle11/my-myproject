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
    return `<table border=1 style="margin="auto">
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