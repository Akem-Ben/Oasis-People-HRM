import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Come from './pages/Come';
import Go from './pages/Go';
import SideBar from './components/SideBar';
import { ThemeContextProvider } from './contexts/ThemeContext';
import Employee from './pages/employees';
import Attendance from './pages/attendance';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Home />
  },
  {
    path: '/employees',
    element: <Employee/>
  },
  {
    path: '/departments',
    element: <Go />
  },
  {
    path: '/attendance',
    element: <Attendance />
  },
  {
    path: '/leaves',
    element: <Come />
  },
  {
    path: '/settings',
    element: <Go />
  },
])

function App() {

  return (
    <>
    <ThemeContextProvider>
    <RouterProvider router={routes} />
    </ThemeContextProvider>
    </>
  )
}

export default App
