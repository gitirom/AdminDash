import TopBar from "./components/topBar/TopBar";
import Sidebar from "./components/sidebar/sidebar";
import './app.css';
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";



function App() {
  return (
    <Router >
      <TopBar />
      <div className="container" >
        <Sidebar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/users" element={<UserList/>} />
        <Route  path="/user/:userId" element={<User/>} />
        <Route  path="/newUser" element={<NewUser/>} />
        <Route  path="/products" element={<ProductList/>} />
        <Route  path="/product/:productsId" element={<Product/>} />
        <Route  path="/newProducts" element={<ProductList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
