import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />
  },
])

function App() {

  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App
