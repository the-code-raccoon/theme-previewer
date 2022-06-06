import "./App.css";
import Banner from "./components/Banner";
import CardImageSide from "./components/CardImageSide";
import CardImageTop from "./components/CardImageTop";
import SideBar from "./components/Sidebar";

export default function App() {
  return (
    <div className="bg-slate-800 min-h-screen flex w-100">
      <SideBar />
      <div className="basis-full">
        <Banner />
        <div className="p-10">
          <CardImageSide />
          <CardImageTop />
        </div>
      </div>
    </div>
  );
}
