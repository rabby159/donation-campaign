import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";



const siteRoute = createBrowserRouter([
    {
        path : '/',
        element: <MainLayout></MainLayout>
    }
]);


export default siteRoute;