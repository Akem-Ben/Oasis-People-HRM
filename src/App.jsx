import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {

  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App
