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
    return `<table border=1 style="margin="auto">
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