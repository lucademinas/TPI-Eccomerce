import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Protected from "./components/protected/Protected";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import GeneralView from "./components/generalView/GeneralView";
import Navbar from "./components/navbar/CommonNavbar";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
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
      path: "/dashboard",
      element: (
        <GeneralView>
          {/* <Protected> */}
          <Dashboard />
          {/* </Protected> */}
        </GeneralView>
      ),
    },
    /*
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
 */

    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
