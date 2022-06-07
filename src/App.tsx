import { useState } from "react";

import "./App.css";
import Banner from "./components/Banner";
import CardImageSide from "./components/CardImageSide";
import CardImageTop from "./components/CardImageTop";
import ProfileCard from "./components/ProfileCard";
import SideBar from "./components/Sidebar";
import ThemeSidebar from "./components/ThemeSidebar";

export default function App() {
  const profiles = [
    {
      name: "Alex Jones",
      colour: "sky-300",
      pic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Jen Yang",
      colour: "orange-300",
      pic: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  // const [accent1, setAccent1] = useState("sky-600");

  return (
    <div className="bg-slate-800 min-h-screen flex w-100">
      {/* <SideBar accent1={accent1} /> */}
      <SideBar />
      <div className="basis-full">
        <Banner />
        <div className="container p-10 columns-1 xl:columns-3 mx-auto">
          <CardImageSide />
          <CardImageTop />
          {profiles.map((profile) => {
            return (
              <ProfileCard
                key={profile.name}
                name={profile.name}
                colour={profile.colour}
                pic={profile.pic}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
