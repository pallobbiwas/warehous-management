import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componets/Home/Home";
import MyBlogs from "./componets/MyBlogs/MyBlogs";
import AddIteam from "./componets/PrivateRoute/AddIteam/AddIteam";
import ManageIteam from "./componets/PrivateRoute/ManageIteam/ManageIteam";
import MyIteam from "./componets/PrivateRoute/MyIteam/MyIteam";
import RequerAuth from "./componets/PrivateRoute/RequerAuth";
import Footer from "./componets/Shared/Footer/Footer";
import Header from "./componets/Shared/Header/Header";
import Login from "./componets/Shared/Login/Login";
import NotFound from "./componets/Shared/NotFound/NotFound";
import Ragister from "./componets/Shared/Ragister/Ragister";
import UpdateProduct from "./componets/UpdateProduct/UpdateProduct";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App pt-4">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/manageiteam"
          element={
            <RequerAuth>
              <ManageIteam />
            </RequerAuth>
          }
        ></Route>
        <Route
          path="/additeam"
          element={
            <RequerAuth>
              <AddIteam />
            </RequerAuth>
          }
        ></Route>
        <Route
          path="/myiteam"
          element={
            <RequerAuth>
              <MyIteam />
            </RequerAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ragister" element={<Ragister />}></Route>
        <Route path="/blogs" element={<MyBlogs />}></Route>
        <Route
          path="/invemtory/:id"
          element={
            <RequerAuth>
              <UpdateProduct />
            </RequerAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
