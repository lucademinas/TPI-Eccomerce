import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Protected from "./components/protected/Protected";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import GeneralView from "./components/generalView/GeneralView";
import Navbar from "./components/navbar/CommonNavbar";
import DetailOrder from "./components/Pages/detailOrder/DetailOrder";
import ClientView from "./components/clientView/ClientView";
import SysAdminTable from "./components/sysAdminTable/SysAdminTable";
import ClientList from "./components/clientList/ClientList";
import ProductDetail from "./components/productDetail/ProductDetail";
import { CartContextProvider } from "./context/CartContext";
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
      )
    },

    {
      path: "*",
      element: <PageNotFound />,
    },







    {
      path: "/sysadmin",
      element: <SysAdminTable />
    },

    {
      path:"/client-list",
      element:(
     // <Protected>
        <ClientView>
          <ClientList>

          </ClientList>
        </ClientView>
      //</Protected>
      )
    }

  ]);

  return (
    <CartContextProvider>
      <RouterProvider router={router} />
      </CartContextProvider>
  );
};

export default App;
