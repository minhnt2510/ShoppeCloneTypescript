import { useRoutes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterLayout from "./layouts/RegisterLayout/RegisterLayout";
import MainLayout from "./layouts/MainLayout";

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: (
        <MainLayout>
          <ProductList />,
        </MainLayout>
      ),
    },
    {
      path: "login",
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      ),
    },
    {
      path: "register",
      element: (
        <RegisterLayout>
          <Register />,
        </RegisterLayout>
      ),
    },
  ]);
  return routeElements;
}
