import "./App.css";
import Banner from "./components/Banner";
import CardImageSide from "./components/CardImageSide";
import CardImageTop from "./components/CardImageTop";
import ProfileCard from "./components/ProfileCard";
import SideBar from "./components/Sidebar";

export default function App() {
  return (
    <div className="bg-slate-800 min-h-screen flex w-100">
      <SideBar />
      <div className="basis-full">
        <Banner />
        <div className="p-10 columns-1 xl:columns-3">
          <CardImageSide />
          <CardImageTop />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}
