import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Come from './pages/Come';
import Go from './pages/Go';
import Navbar from './components/Navbar';
import { ThemeContextProvider } from './contexts/ThemeContext';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />
  },
  {
    path: '/dashboard',
    element: <Home />
  },
  {
    path: '/employees',
    element: <Come />
  },
  {
    path: '/departments',
    element: <Go />
  },
  {
    path: '/attendance',
    element: <Home />
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
