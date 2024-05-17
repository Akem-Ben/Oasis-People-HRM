import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'; import EmployeeProfile from "./pages/EmployeePage.jsx";
import Dashboard from "./pages/DashboardPage.jsx";
import { ThemeContextProvider } from './contexts/ThemeContext';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: "employees/:employeeId",
        element: <EmployeeProfile />,
      },
    ],
  }
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
