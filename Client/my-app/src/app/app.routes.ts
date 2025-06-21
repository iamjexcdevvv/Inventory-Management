import { Routes } from "@angular/router";
import { HomePageComponent } from "../pages/home/home-page";
import { PageNotFoundComponent } from "../shared/components/PageNotFound/page-not-found";

export const routes: Routes = [
    {
        path: "",
        title: "Landing Page",
        component: HomePageComponent,
    },
    {
        path: "dashboard",
        title: "Dashboard Page",
        loadComponent: () =>
            import("../pages/dashboard/dashboard").then(
                (c) => c.DashboardComponent
            ),
    },
    {
        path: "products",
        title: "Products Page",
        loadComponent: () =>
            import("../pages/products/product-management").then(
                (c) => c.ProductManagementComponent
            ),
    },
    {
        path: "auth",
        children: [
            {
                path: "login",
                title: "Login Page",
                loadComponent: () =>
                    import("../pages/authentication/login/login").then(
                        (c) => c.LoginPageComponent
                    ),
            },
            {
                path: "register",
                title: "Register Page",
                loadComponent: () =>
                    import("../pages/authentication/register/register").then(
                        (c) => c.RegisterComponent
                    ),
            },
        ],
    },
    {
        path: "**",
        component: PageNotFoundComponent,
    },
];
