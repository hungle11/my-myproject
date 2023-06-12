 const adminmain = () =>{

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
    `



}
export default adminmain;