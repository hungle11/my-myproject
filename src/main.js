import { header } from "./components/header";
import { homePage } from "./pages/homePage";

const app = document.getElementById("app");


const render = (content, target) =>{
  target.innerHTML = content();

};


render(homePage, app);
