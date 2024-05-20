import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import { ThemeContextProvider } from './contexts/ThemeContext';
import Employee from './pages/employees';
import Attendance from './pages/attendance';
import Dashboard from './pages/Dashboard/Dashboard';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/employees',
    element: <Employee/>
  },
  {
    path: '/attendance',
    element: <Attendance />
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
