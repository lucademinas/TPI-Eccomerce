import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import Protected from './components/protected/Protected';
import PageNotFound from './components/pageNotFound/PageNotFound';

const App = () => {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    },
    
    {
      path: '/dashboard',
      element: <Protected><Dashboard/></Protected>
    },
    /*
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
 */

    {
      path:"*",
      element:<PageNotFound/>
    }


  ]);
  
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}



export default App
