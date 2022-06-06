import "./App.css";
import CardImageSide from "./components/CardImageSide";
import CardImageTop from "./components/CardImageTop";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-slate-800 min-h-screen flex">
      <SideBar />
      <div className="p-10">
        <CardImageSide />
        <CardImageTop />
      </div>
    </div>
  );
}

export default App;
