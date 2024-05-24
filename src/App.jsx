import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root.jsx'; import Home from './pages/Home/Home.jsx';
import DashboardPage from './pages/Dashboard/DashboardPage.jsx'; import EmployeesPage
  from "./pages/Employees/EmployeesPage.jsx"; import AttendancePage from "./pages/Attendance/AttendancePage.jsx";
  import EmployeePage from "./pages/Employee/EmployeePage.jsx"; import EmployeeProfile
  from "./components/EmployeeProfile/EmployeeProfile.jsx"; import NewEmployeePage
  from "./pages/Employee/NewEmployeePage.jsx";
import { ThemeContextProvider } from './contexts/ThemeContext';



const routes = createBrowserRouter([
  {
    path: '/signin', element: <Home/>
  },
  {
    path: '/', element: <Root />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/employees',
        element: <EmployeesPage />
      },
      {
        path: '/attendance',
        element: <AttendancePage />
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
      {
        path: "/add-employee",
        element: <NewEmployeePage />
      }
    ]
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
