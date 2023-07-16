import TopBar from "./components/topBar/TopBar";
import Sidebar from "./components/sidebar/sidebar";
import './app.css';
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./pages/home/userList/UserList";



function App() {
  return (
    <Router >
      <TopBar />
      <div className="container" >
        <Sidebar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/users" element={<UserList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
