import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



const siteRoute = createBrowserRouter([
    {
        path : '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>
    }
]);


export default siteRoute;