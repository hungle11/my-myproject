import { homePage } from "./pages/homePage";
import { Sign_in } from "./pages/Sign_in";
import { router } from "./lib";
import { render } from "./lib";
import { Sign_up } from "./pages/Sign_up";
import adminEditPage from "./pages/adminPageEdit";
import { addProject } from "./pages/addProject";
import adminProject from "./pages/adminproject";
import EditProject from "./pages/ProjectEdit";

import admin from "./pages/adminPage";

const app = document.getElementById("app");



router.on("/", () => render(homePage,app));
router.on("/sign_in", () => render(Sign_in,app));
router.on("/sign_up", () => render(Sign_up,app));
router.on("/admin", () => render(admin,app));
router.on("/product/:id/edit", ({ data }) => render(() => adminEditPage(data), app));
router.on("/addproject", () => render(addProject,app));
router.on("/admin/project", () => render(adminProject,app));
router.on("/project/:id/edit", ({ data }) => render(() => EditProject(data), app));



router.resolve();
