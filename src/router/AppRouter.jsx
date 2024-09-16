import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    //* AuthProvider içinde react-router-dom'a ait yapıları kullanabilmek için index.js'e taşıdık
    // <BrowserRouter>
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRouter />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/dashboard/products" element={<Products />} />
          {/* //* Absolute path */}
          <Route path="/dashboard/about" element={<About />} />
          {/* //* relative path */}
          {/* <Route path="about" element={<About />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
    // </BrowserRouter>
  );
};

export default AppRouter;
