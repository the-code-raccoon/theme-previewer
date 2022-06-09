import { useState } from "react";
import ThemeInput from "./ThemeInput";

interface ThemeSidebarProps {
  setNewColour: Function;
}

export default function ThemeSidebar(props: ThemeSidebarProps) {
  const { setNewColour } = props;

  const validTailwindColour = (str: string) => {
    str = str.toLowerCase();
    if (str === "black" || str === "white") return true;
    return /^(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|[1-9]00)$/gm.test(
      str
    );
  };

  const onChangeInput = (event: any) => {
    if (validTailwindColour(event.target.value)) {
      setNewColour(event.target.name, event.target.value);
    }
  };

  const [accent1Input, setAccent1Input] = useState("");
  const [accent2Input, setAccent2Input] = useState("");
  const [backgroundInput, setBackgroundInput] = useState("");
  const [text1Input, setText1Input] = useState("");
  const [text2Input, setText2Input] = useState("");

  const colourInputs = [
    {
      text: "Accent Colour 1",
      name: "accent1",
      placeholder: "ex. orange-400",
      input: accent1Input,
      setInput: setAccent1Input,
    },
    {
      text: "Accent Colour 2",
      name: "accent2",
      placeholder: "ex. sky-300",
      input: accent2Input,
      setInput: setAccent2Input,
    },
    {
      text: "Background Colour",
      name: "background",
      placeholder: "ex. slate-800",
      input: backgroundInput,
      setInput: setBackgroundInput,
    },
    {
      text: "Text Colour (Main)",
      name: "text1",
      placeholder: "ex. black",
      input: text1Input,
      setInput: setText1Input,
    },
    {
      text: "Text Colour (Secondary)",
      name: "text2",
      placeholder: "ex. white",
      input: text2Input,
      setInput: setText2Input,
    },
  ];

  return (
    <div className="bg-slate-900 w-[600px] min-h-screen p-5 text-lg">
      {colourInputs.map((colourInput) => {
        return (
          <ThemeInput
            key={colourInput.name}
            {...colourInput}
            onChangeInput={onChangeInput}
            setNewColour={setNewColour}
          />
        );
      })}
      <div className="w-100 flex justify-center">
        <button
          className={`bg-purple-300 transition ease-in-out hover:bg-purple-400 rop-shadow-lg h-[45px] px-5 mx-5 shadow rounded-md text-lg font-medium text-black`}
          onClick={() => {
            setNewColour("accent1", "orange-400");
            setAccent1Input("");
            setNewColour("accent2", "sky-300");
            setAccent2Input("");
            setNewColour("background", "slate-800");
            setBackgroundInput("");
            setNewColour("text1", "black");
            setText1Input("");
            setNewColour("text2", "white");
            setText2Input("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="text-white mt-8 flex flex-col">
        <h1>Custom Themes</h1>
        <button
          className="bg-slate-700 py-2 px-3 rounded-md mt-3"
          onClick={() => {
            setNewColour("accent1", "orange-400");
            setAccent1Input("orange-400");
            setNewColour("accent2", "sky-300");
            setAccent2Input("sky-300");
            setNewColour("background", "slate-800");
            setBackgroundInput("slate-800");
            setNewColour("text1", "black");
            setText1Input("black");
            setNewColour("text2", "white");
            setText2Input("white");
          }}
        >
          Default
        </button>
        <button
          className="bg-slate-700 py-2 px-3 rounded-md mt-3"
          onClick={() => {
            setNewColour("accent1", "cyan-600");
            setAccent1Input("cyan-600");
            setNewColour("accent2", "sky-200");
            setAccent2Input("sky-200");
            setNewColour("background", "green-50");
            setBackgroundInput("green-50");
            setNewColour("text1", "black");
            setText1Input("black");
            setNewColour("text2", "black");
            setText2Input("black");
          }}
        >
          Seafoam
        </button>
        <button
          className="bg-slate-700 py-2 px-3 rounded-md mt-3"
          onClick={() => {
            setNewColour("accent1", "fuchsia-400");
            setAccent1Input("fuchsia-400");
            setNewColour("accent2", "pink-200");
            setAccent2Input("pink-200");
            setNewColour("background", "stone-800");
            setBackgroundInput("stone-800");
            setNewColour("text1", "black");
            setText1Input("black");
            setNewColour("text2", "white");
            setText2Input("white");
          }}
        >
          Black Bubblegum
        </button>
        <button
          className="bg-slate-700 py-2 px-3 rounded-md mt-3"
          onClick={() => {
            setNewColour("accent1", "red-800");
            setAccent1Input("red-800");
            setNewColour("accent2", "teal-500");
            setAccent2Input("teal-500");
            setNewColour("background", "purple-50");
            setBackgroundInput("purple-50");
            setNewColour("text1", "black");
            setText1Input("black");
            setNewColour("text2", "black");
            setText2Input("black");
          }}
        >
          West Coast
        </button>
      </div>
    </div>
  );
}
