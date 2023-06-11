import { useEffect,useState } from "../lib";
const EditProduct = ({id})=>{
    const API_URL= "http://localhost:3000/product";
    const [product, setProduct] = useState([]); 
    useEffect(() => {
        fetch(`http://localhost:3000/product/${id}`)
            .then((response) => response.json())
            .then((data) => {setProduct(data);
            });
    }, []);
    useEffect(() => {
        const formEditAdmin= document.getElementById("form-edit-product");
        const errorsElement= document.getElementById("errors");
        if (!formEditAdmin) return;
        formEditAdmin.addEventListener("submit", function (event){
            event.preventDefault();
            const formData={
                name: document.getElementById("name").value,
                price: document.getElementById("price").value,
                date: document.getElementById("date").value,
                contend: document.getElementById("contend").value
                
            };
            
            fetch(`http://localhost:3000/product/${id}`, {
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
        <form id="form-edit-product">
                <input type="text" placeholder="title"  id="name" value="${
                    product.name
                }"/>
                <input type="number" placeholder="description"  id="price" value="${
                    product.price
                }"/>
                <input type="date" placeholder=" skill"  id="date" value="${
                    product.date
                }"/>
                <input type="text" placeholder=" image"  id="contend" value="${
                    product.contend
                }"/>
                
                <button>Submit</button>
            </form>
    </div>`;
};

export default EditProduct;
