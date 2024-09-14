import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
