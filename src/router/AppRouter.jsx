import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import {Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/" element={<Home />} />
        <Route path="/dashboard/about" element={<About />} />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
