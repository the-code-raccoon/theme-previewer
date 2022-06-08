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
      <div>
        <h1 className="text-xl text-white">Input tailwind colour code</h1>
      </div>
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
      <button
        className={`bg-purple-300 transition ease-in-out hover:bg-purple-400 drop-shadow-lg h-[45px] px-5 mx-5 shadow rounded-md text-lg font-medium text-black`}
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
  );
}
