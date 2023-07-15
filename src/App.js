import TopBar from "./components/topBar/TopBar";
import Sidebar from "./components/sidebar/sidebar";
import './app.css';


function App() {
  return (
    <div >
      <TopBar />
      <div className="container" >
        <Sidebar />
        <div className="others">Other pages</div>
      </div>
    </div>
  );
}

export default App;
