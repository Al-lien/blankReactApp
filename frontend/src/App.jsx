import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages & components
import Home from "./pages/Home";

// styles
import "./App.css";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Home />}></Route>)
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
