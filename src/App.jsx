import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
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
