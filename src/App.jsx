import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'; import EmployeePage from "./pages/EmployeePage.jsx";
import EmployeeProfile from "./components/EmployeeProfile.jsx";
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
        path: "employee/:employeeId",
        element: <EmployeePage />,
        children: [
          {
            path: "employee/:employeeId/profile",
            element: <EmployeeProfile />
          }
        ]
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
