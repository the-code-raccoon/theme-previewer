import { useEffect, useState } from "react";

import useThemeHook from "./useThemeHook";

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
      colour: "purple-600",
      pic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Jen Yang",
      colour: "orange-300",
      pic: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const { theme, setNewColour } = useThemeHook();

  return (
    <div className="bg-slate-800 min-h-screen flex w-100">
      <div
        className="bg-slate-50 bg-slate-100 bg-slate-200 bg-slate-300 bg-slate-400 bg-slate-500 bg-slate-600 bg-slate-700 bg-slate-800 bg-slate-900 bg-gray-50 bg-gray-100 bg-gray-200 bg-gray-300 bg-gray-400 bg-gray-500 bg-gray-600 bg-gray-700 bg-gray-800 bg-gray-900 bg-zinc-50 bg-zinc-100 bg-zinc-200 bg-zinc-300 bg-zinc-400 bg-zinc-500 bg-zinc-600 bg-zinc-700 bg-zinc-800 bg-zinc-900 bg-neutral-50 bg-neutral-100 bg-neutral-200 bg-neutral-300 bg-neutral-400 bg-neutral-500 bg-neutral-600 bg-neutral-700 bg-neutral-800 bg-neutral-900 bg-stone-50 bg-stone-100 bg-stone-200 bg-stone-300 bg-stone-400 bg-stone-500 bg-stone-600 bg-stone-700 bg-stone-800 bg-stone-900 bg-red-50 bg-red-100 bg-red-200 bg-red-300 bg-red-400 bg-red-500 bg-red-600 bg-red-700 bg-red-800 bg-red-900 bg-orange-50 bg-orange-100 bg-orange-200 bg-orange-300 bg-orange-400 bg-orange-500 bg-orange-600 bg-orange-700 bg-orange-800 bg-orange-900 bg-amber-50 bg-amber-100 bg-amber-200 bg-amber-300 bg-amber-400 bg-amber-500 bg-amber-600 bg-amber-700 bg-amber-800 bg-amber-900 bg-yellow-50 bg-yellow-100 bg-yellow-200 bg-yellow-300 bg-yellow-400 bg-yellow-500 bg-yellow-600 bg-yellow-700 bg-yellow-800 bg-yellow-900 bg-lime-50 bg-lime-100 bg-lime-200 bg-lime-300 bg-lime-400 bg-lime-500 bg-lime-600 bg-lime-700 bg-lime-800 bg-lime-900 bg-green-50 bg-green-100 bg-green-200 bg-green-300 bg-green-400 bg-green-500 bg-green-600 bg-green-700 bg-green-800 bg-green-900 bg-emerald-50 bg-emerald-100 bg-emerald-200 bg-emerald-300 bg-emerald-400 bg-emerald-500 bg-emerald-600 bg-emerald-700 bg-emerald-800 bg-emerald-900 bg-teal-50 bg-teal-100 bg-teal-200 bg-teal-300 bg-teal-400 bg-teal-500 bg-teal-600 bg-teal-700 bg-teal-800 bg-teal-900 bg-cyan-50 bg-cyan-100 bg-cyan-200 bg-cyan-300 bg-cyan-400 bg-cyan-500 bg-cyan-600 bg-cyan-700 bg-cyan-800 bg-cyan-900 bg-sky-50 bg-sky-100 bg-sky-200 bg-sky-300 bg-sky-400 bg-sky-500 bg-sky-600 bg-sky-700 bg-sky-800 bg-sky-900 bg-blue-50 bg-blue-100 bg-blue-200 bg-blue-300 bg-blue-400 bg-blue-500 bg-blue-600 bg-blue-700 bg-blue-800 bg-blue-900 bg-indigo-50 bg-indigo-100 bg-indigo-200 bg-indigo-300 bg-indigo-400 bg-indigo-500 bg-indigo-600 bg-indigo-700 bg-indigo-800 bg-indigo-900 bg-violet-50 bg-violet-100 bg-violet-200 bg-violet-300 bg-violet-400 bg-violet-500 bg-violet-600 bg-violet-700 bg-violet-800 bg-violet-900 bg-purple-50 bg-purple-100 bg-purple-200 bg-purple-300 bg-purple-400 bg-purple-500 bg-purple-600 bg-purple-700 bg-purple-800 bg-purple-900 bg-fuchsia-50 bg-fuchsia-100 bg-fuchsia-200 bg-fuchsia-300 bg-fuchsia-400 bg-fuchsia-500 bg-fuchsia-600 bg-fuchsia-700 bg-fuchsia-800 bg-fuchsia-900 bg-pink-50 bg-pink-100 bg-pink-200 bg-pink-300 bg-pink-400 bg-pink-500 bg-pink-600 bg-pink-700 bg-pink-800 bg-pink-900 bg-rose-50 bg-rose-100 bg-rose-200 bg-rose-300 bg-rose-400 bg-rose-500 bg-rose-600 bg-rose-700 bg-rose-800 bg-rose-900 
      hover:bg-slate-50 hover:bg-slate-100 hover:bg-slate-200 hover:bg-slate-300 hover:bg-slate-400 hover:bg-slate-500 hover:bg-slate-600 hover:bg-slate-700 hover:bg-slate-800 hover:bg-slate-900 hover:bg-gray-50 hover:bg-gray-100 hover:bg-gray-200 hover:bg-gray-300 hover:bg-gray-400 hover:bg-gray-500 hover:bg-gray-600 hover:bg-gray-700 hover:bg-gray-800 hover:bg-gray-900 hover:bg-zinc-50 hover:bg-zinc-100 hover:bg-zinc-200 hover:bg-zinc-300 hover:bg-zinc-400 hover:bg-zinc-500 hover:bg-zinc-600 hover:bg-zinc-700 hover:bg-zinc-800 hover:bg-zinc-900 hover:bg-neutral-50 hover:bg-neutral-100 hover:bg-neutral-200 hover:bg-neutral-300 hover:bg-neutral-400 hover:bg-neutral-500 hover:bg-neutral-600 hover:bg-neutral-700 hover:bg-neutral-800 hover:bg-neutral-900 hover:bg-stone-50 hover:bg-stone-100 hover:bg-stone-200 hover:bg-stone-300 hover:bg-stone-400 hover:bg-stone-500 hover:bg-stone-600 hover:bg-stone-700 hover:bg-stone-800 hover:bg-stone-900 hover:bg-red-50 hover:bg-red-100 hover:bg-red-200 hover:bg-red-300 hover:bg-red-400 hover:bg-red-500 hover:bg-red-600 hover:bg-red-700 hover:bg-red-800 hover:bg-red-900 hover:bg-orange-50 hover:bg-orange-100 hover:bg-orange-200 hover:bg-orange-300 hover:bg-orange-400 hover:bg-orange-500 hover:bg-orange-600 hover:bg-orange-700 hover:bg-orange-800 hover:bg-orange-900 hover:bg-amber-50 hover:bg-amber-100 hover:bg-amber-200 hover:bg-amber-300 hover:bg-amber-400 hover:bg-amber-500 hover:bg-amber-600 hover:bg-amber-700 hover:bg-amber-800 hover:bg-amber-900 hover:bg-yellow-50 hover:bg-yellow-100 hover:bg-yellow-200 hover:bg-yellow-300 hover:bg-yellow-400 hover:bg-yellow-500 hover:bg-yellow-600 hover:bg-yellow-700 hover:bg-yellow-800 hover:bg-yellow-900 hover:bg-lime-50 hover:bg-lime-100 hover:bg-lime-200 hover:bg-lime-300 hover:bg-lime-400 hover:bg-lime-500 hover:bg-lime-600 hover:bg-lime-700 hover:bg-lime-800 hover:bg-lime-900 hover:bg-green-50 hover:bg-green-100 hover:bg-green-200 hover:bg-green-300 hover:bg-green-400 hover:bg-green-500 hover:bg-green-600 hover:bg-green-700 hover:bg-green-800 hover:bg-green-900 hover:bg-emerald-50 hover:bg-emerald-100 hover:bg-emerald-200 hover:bg-emerald-300 hover:bg-emerald-400 hover:bg-emerald-500 hover:bg-emerald-600 hover:bg-emerald-700 hover:bg-emerald-800 hover:bg-emerald-900 hover:bg-teal-50 hover:bg-teal-100 hover:bg-teal-200 hover:bg-teal-300 hover:bg-teal-400 hover:bg-teal-500 hover:bg-teal-600 hover:bg-teal-700 hover:bg-teal-800 hover:bg-teal-900 hover:bg-cyan-50 hover:bg-cyan-100 hover:bg-cyan-200 hover:bg-cyan-300 hover:bg-cyan-400 hover:bg-cyan-500 hover:bg-cyan-600 hover:bg-cyan-700 hover:bg-cyan-800 hover:bg-cyan-900 hover:bg-sky-50 hover:bg-sky-100 hover:bg-sky-200 hover:bg-sky-300 hover:bg-sky-400 hover:bg-sky-500 hover:bg-sky-600 hover:bg-sky-700 hover:bg-sky-800 hover:bg-sky-900 hover:bg-blue-50 hover:bg-blue-100 hover:bg-blue-200 hover:bg-blue-300 hover:bg-blue-400 hover:bg-blue-500 hover:bg-blue-600 hover:bg-blue-700 hover:bg-blue-800 hover:bg-blue-900 hover:bg-indigo-50 hover:bg-indigo-100 hover:bg-indigo-200 hover:bg-indigo-300 hover:bg-indigo-400 hover:bg-indigo-500 hover:bg-indigo-600 hover:bg-indigo-700 hover:bg-indigo-800 hover:bg-indigo-900 hover:bg-violet-50 hover:bg-violet-100 hover:bg-violet-200 hover:bg-violet-300 hover:bg-violet-400 hover:bg-violet-500 hover:bg-violet-600 hover:bg-violet-700 hover:bg-violet-800 hover:bg-violet-900 hover:bg-purple-50 hover:bg-purple-100 hover:bg-purple-200 hover:bg-purple-300 hover:bg-purple-400 hover:bg-purple-500 hover:bg-purple-600 hover:bg-purple-700 hover:bg-purple-800 hover:bg-purple-900 hover:bg-fuchsia-50 hover:bg-fuchsia-100 hover:bg-fuchsia-200 hover:bg-fuchsia-300 hover:bg-fuchsia-400 hover:bg-fuchsia-500 hover:bg-fuchsia-600 hover:bg-fuchsia-700 hover:bg-fuchsia-800 hover:bg-fuchsia-900 hover:bg-pink-50 hover:bg-pink-100 hover:bg-pink-200 hover:bg-pink-300 hover:bg-pink-400 hover:bg-pink-500 hover:bg-pink-600 hover:bg-pink-700 hover:bg-pink-800 hover:bg-pink-900 hover:bg-rose-50 hover:bg-rose-100 hover:bg-rose-200 hover:bg-rose-300 hover:bg-rose-400 hover:bg-rose-500 hover:bg-rose-600 hover:bg-rose-700 hover:bg-rose-800 hover:bg-rose-900 "
      />
      <SideBar theme={theme} />
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
      <ThemeSidebar setNewColour={setNewColour} />
    </div>
  );
}
