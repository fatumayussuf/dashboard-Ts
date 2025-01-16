import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("signup", "auth/signup.tsx"),
  route("login", "auth/login.tsx"),
  route("logout", "auth/logout.ts"),
  route("auth/confirm", "routes/confirm.ts"),
  route("dashboard", "dashboard/dashboard.tsx",
    [
      index("dashboard/index.tsx"),
      route("products", "dashboard/products.tsx"),
      route("customers", "dashboard/customers.tsx"),
      route("settings", "dashboard/settings.tsx"),
      // Fixed: The route path needs to include the dynamic :id parameter directly in the path string
      route("products/:id/edit", "dashboard/product-edit.tsx"),
    ]
  ),
] satisfies RouteConfig;
