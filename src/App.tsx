import "./App.css";
import Card from "./components/Card";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-slate-800 min-h-screen flex">
      <SideBar />
      <div className="p-10">
        <Card />
        <h1 className="text-3xl font-bold">Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
