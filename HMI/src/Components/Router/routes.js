import renderAddMoviePage from "../Pages/AddMoviePage";
import renderHomePage from "../Pages/HomePage";
import renderViewPage from "../Pages/ViewMoviePage";
import renderLoginPage from "../Pages/LoginPage";
import renderRegisterPage from "../Pages/RegisterPage";
import logout from "../Logout/Logout";

const routes ={
    '/': renderHomePage,
    '/addMovie': renderAddMoviePage,
    '/viewMovie':renderViewPage,
    '/login':renderLoginPage,
    '/register':renderRegisterPage,
    '/logout':logout,
}
export default routes;
