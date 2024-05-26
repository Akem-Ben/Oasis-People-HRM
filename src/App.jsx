import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root.jsx'; import Home from './pages/Home/Home.jsx';
import DashboardPage from './pages/Dashboard/DashboardPage.jsx'; import EmployeesPage
  from "./pages/Employees/EmployeesPage.jsx"; import AttendancePage from "./pages/Attendance/AttendancePage.jsx";
  import EmployeePage from "./pages/Employee/EmployeePage.jsx"; import NewEmployeePage
  from "./pages/Employee/NewEmployeePage.jsx"; import ErrorPage from "./pages/ErrorDefaultPage.jsx";
  import EditEmployeePage from "./pages/Employee/EditEmployeePage.jsx";
import { ThemeContextProvider } from './contexts/ThemeContext';
import { MockAPITest } from "./components/MockAPITest.jsx";


const routes = createBrowserRouter([
  {
    path: '/signin', element: <Home/>
  },
  {
    path: '/', element: <Root />, errorElement: <ErrorPage />,
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
        path: "employee/:id",
        element: <EmployeePage />,
        loader: async ({ params }) => {
          return await fetch(`/api/user/employees/${params.id}`);
        }
      },
      {
        path: "/add-employee",
        element: <NewEmployeePage />
      },
      {
        path: "/edit-employee/:id",
        element: <EditEmployeePage />,
      },

      {
        path: "/mock-api",
        element: <MockAPITest />
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
