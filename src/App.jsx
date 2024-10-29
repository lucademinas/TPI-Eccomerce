import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/client/dashboard/Dashboard";
import Protected from "./components/protected/Protected";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import GeneralView from "./components/generalView/GeneralView";

import DetailOrder from "./components/detailOrder/DetailOrder";
import ClientView from "./components/client/clientView/ClientView";
import SysAdminTable from "./components/sysAdminTable/SysAdminTable";
import ClientList from "./components/admin/clientList/ClientList";
import ProductDetail from "./components/productDetail/ProductDetail";
import { CartContextProvider } from "./context/CartContext";
import AdminDashboard from "./components/admin/adminDashboard/AdminDashboard";
import AdminView from "./components/admin/adminView/AdminView";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <GeneralView>
          <Login />
        </GeneralView>
      ),
    },
    {
      path: "/register",
      element: (
        <GeneralView>
          <Register />
        </GeneralView>
      ),
    },

    {
      path: "/",
      element: (
        <Protected>
          <GeneralView>
            <Dashboard />
          </GeneralView>
        </Protected>
      ),
    },

    {
      path: "/detail-order",
      element: (
        <ClientView>
          <DetailOrder />
        </ClientView>
      ),
    },

    {
      path: "/product-detail",
      element: (
        <GeneralView>
          <ProductDetail />
        </GeneralView>
      ),
    },

    {
      path: "*",
      element: <PageNotFound />,
    },

    {
      path: "/admin-dashboard",
      element:(
        <AdminView>
          <AdminDashboard />
        </AdminView>
          
        
      ) 
    },

    {
      path: "/sysadmin",
      element: <SysAdminTable />,
    },

    {
      path: "/client-list",
      element: (
        // <Protected>
        <ClientView>
          <ClientList></ClientList>
        </ClientView>
        //</Protected>
      ),
    },
  ]);

  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
};

export default App;
