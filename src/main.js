import { homePage } from "./pages/homePage";
import { Sign_in } from "./pages/Sign_in";
import { router } from "./lib";
import { render } from "./lib";
import { Sign_up } from "./pages/Sign_up";
import adminEditPage from "./pages/adminPageEdit";
import { addProject } from "./pages/addProject";
import adminProject from "./pages/adminproject";
import EditProject from "./pages/ProjectEdit";
import { addProduct } from "./pages/addproduct";
import admin from "./pages/adminPage";
import adminProduct from "./pages/adminProduct.JS";
import EditProduct from "./pages/addProductEdit";





const app = document.getElementById("app");




router.on("/", () => render(homePage,app));
router.on("/sign_in", () => render(Sign_in,app));
router.on("/sign_up", () => render(Sign_up,app));
router.on("/admin", () => render(admin,app));
router.on("/product/:id/edit", ({ data }) => render(() => adminEditPage(data), app));
router.on("/addproject", () => render(addProject,app));
router.on("/admin/project", () => render(adminProject,app));
router.on("/project/:id/edit", ({ data }) => render(() => EditProject(data), app));
router.on("/addproduct", () => render(addProduct,app));
router.on("/admin/product", () => render(adminProduct,app));
router.on("/pro/:id/edit", ({ data }) => render(() => EditProduct(data), app));





router.resolve();
