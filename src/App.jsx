import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';

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
      element: <Dashboard/>
    }
 
  ]);
  
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}



export default App
