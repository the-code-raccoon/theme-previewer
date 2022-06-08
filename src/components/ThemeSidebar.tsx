import ThemeInput from "./ThemeInput";

interface ThemeSidebarProps {
  setNewColour: Function;
}

export default function ThemeSidebar(props: ThemeSidebarProps) {
  const { setNewColour } = props;

  const validTailwindColour = (str: string) => {
    str = str.toLowerCase();
    return /^(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|[1-9]00)$/gm.test(
      str
    );
  };

  const onChangeInput = (event: any) => {
    if (validTailwindColour(event.target.value)) {
      console.log(event.target.name);
      setNewColour("accent1", event.target.value);
    }
  };

  const inputs = [
    { text: "Accent Colour 1", name: "accent1" },
    { text: "Accent Colour 2", name: "accent2" },
    { text: "Accent Colour 3", name: "accent3" },
    { text: "Background Colour", name: "background" },
    { text: "Text Colour (Main)", name: "text1" },
    { text: "Text Colour (Secondary)", name: "text2" },
  ];

  return (
    <div className="bg-slate-900 w-[600px] min-h-screen p-5 text-lg">
      <div>
        <div>
          <h1 className="text-xl text-white">Input tailwind colour code</h1>
        </div>
        {inputs.map((input) => {
          return (
            <ThemeInput
              text={input.text}
              name={input.name}
              onChangeInput={onChangeInput}
            />
          );
        })}
      </div>
    </div>
  );
}
