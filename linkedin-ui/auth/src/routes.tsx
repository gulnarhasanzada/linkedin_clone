import type { RouteObject } from "react-router";
import LoginForm from "./components/login/LoginForm";
import Home from "./components/home/Home";

export const appRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <LoginForm />
    },
    {
        path: "/signup",
        element: <LoginForm />
    },
    {
        path: "*",
        element: <LoginForm />
    },
]