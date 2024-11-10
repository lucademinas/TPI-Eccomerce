import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Dashboard from "./components/client/dashboard/Dashboard";
import PageNotFound from "./components/shared/pageNotFound/PageNotFound";
import GeneralView from "./components/generalView/GeneralView";
import ProductForm from './components/admin/productForm/ProductForm';
import DetailOrder from "./components/client/detailOrder/DetailOrder";
import ClientView from "./components/client/clientView/ClientView";
import SysAdminTable from "./components/sysAdmin/SysAdminTable";
import ClientList from "./components/admin/clientList/ClientList";
import ProductDetail from "./components/client/productDetail/ProductDetail";
import { CartContextProvider } from "./context/CartContext";
import { AuthContextProvider } from "./hooks/AuthContext";
import AdminDashboard from "./components/admin/adminDashboard/AdminDashboard";
import AdminView from "./components/admin/adminView/AdminView";
import ProductList from "./components/admin/productList/ProductList";
import OrderList from "./components/client/orderList/OrderList";
import View from "./components/view/View";
import EditProduct from "./components/admin/editProduct/EditProduct";
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
        
         <View>
           <Dashboard />
         </View>

      ),
    },

    {
      path: "/detail-order",
      element: (
        <View>
          <DetailOrder />
        </View>
      ),
    },

    {
      path: "/product-detail",
      element: (
        <View>
          <ProductDetail />
        </View>
      ),
    },

    {
      path: "*",
      element: <PageNotFound />,
    },

    {
      path: "/admin-dashboard",
      element: (
        <AdminView>
          <AdminDashboard />
        </AdminView>
      )
    },
    {
      path: "/product-form",
      element: (
        <AdminView>
          <ProductForm />
        </AdminView>
      )
    },
    {
      path: "/product-list",
      element: (
        <AdminView>
          <ProductList />
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
        <View>
          <ClientList></ClientList>
        </View>
      ),
    },
    {
      path: "/order-list",
      element: (
        <View>
          <OrderList />
        </View>
      )
    },
    {
      path:"/edit-product",
      element:<AdminView><EditProduct/></AdminView>
    }
  ]);

  return (
    <AuthContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </AuthContextProvider>

  );
};

export default App;
