


import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home";
import CreateForm from "../components/createForm";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/create-form",
        element: <CreateForm />
    },
]);