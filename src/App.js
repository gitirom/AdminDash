import TopBar from "./components/topBar/TopBar";
import Sidebar from "./components/sidebar/sidebar";
import './app.css';
import Home from "./pages/home/Home";


function App() {
  return (
    <div >
      <TopBar />
      <div className="container" >
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
