import CustomButton from "./CustomButton";
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

  const colourInputs = [
    { text: "Accent Colour 1", name: "accent1", placeholder: "ex. orange-400" },
    { text: "Accent Colour 2", name: "accent2", placeholder: "ex. sky-300" },
    {
      text: "Background Colour",
      name: "background",
      placeholder: "ex. slate-800",
    },
    { text: "Text Colour (Main)", name: "text1", placeholder: "ex. white" },
    {
      text: "Text Colour (Secondary)",
      name: "text2",
      placeholder: "ex. black",
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
      <CustomButton
        text="black"
        colour="purple-300"
        onClick={() => {
          console.log("RESET")
          setNewColour("accent1", "orange-400");
          setNewColour("accent2", "sky-300");
          setNewColour("background", "slate-800");
          setNewColour("text1", "white");
          setNewColour("text2", "black");
        }}
      >
        Reset
      </CustomButton>
    </div>
  );
}
