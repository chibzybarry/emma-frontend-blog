import { Routes, Route } from "react-router-dom";
import AddPost from "./components/blogpage/AddPost";
import SinglePost from "./components/blogpage/SinglePost";
import Contact from "./Components/contactpage/contact";
import Navigationbar from "./Components/header/Navigationbar";
import Home from "./Components/homepage/home";
import BlogList from "./Components/blogpage/bloglist";
import About from "./Components/AboutPage/About";
import Product from "./Components/productpage/product";
import CreateProduct from "./Components/productpage/CreateProduct";

const App = () => {
  return (
    <>
      <Navigationbar />

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={ <Product />} />
        <Route path="/add-product" element={<CreateProduct />} />
        <Route path="/blogs" element={ <BlogList />} />
        <Route path="/create-post" element={<AddPost />} />
        <Route path="/blog/:id" element={<SinglePost />} />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
    </>
  );
};

export default App;
