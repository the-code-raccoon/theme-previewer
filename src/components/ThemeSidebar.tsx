interface ThemeSidebarProps {
  accent1: string;
  setAccent1: Function;
}

export default function ThemeSidebar(props: ThemeSidebarProps) {
  const { accent1, setAccent1 } = props;

  const validTailwindColour = (str: string) => {
    str = str.toLowerCase();
    return /^(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|[1-9]00)$/gm.test(
      str
    );
  };

  const validHex = (str: string) => {
    
  }

  return (
    <div className="bg-slate-900 w-[600px] min-h-screen p-5 text-lg">
      <div>
        <div>
          <h1 className="text-xl text-white">Input tailwind colour code</h1>
        </div>
        <div className="my-3">
          <span className="text-white">Accent Colour 1: </span>
          <input
            type="text"
            className="m-3 rounded-md py-1 px-3"
            placeholder="ffffff"
            onChange={(event) => {
              const colour = event.target.value;
              if (validTailwindColour(colour)) {
                setAccent1(colour);
              }
            }}
          />
        </div>
        <div className="my-3">
          <span className="text-white">Accent Colour 2: </span>
          <input type="text" className="m-3 rounded-md py-1 px-3" />
        </div>
        <div className="my-3">
          <span className="text-white">Accent Colour 3: </span>
          <input type="text" className="m-3 rounded-md py-1 px-3" />
        </div>
        <div className="my-3">
          <span className="text-white">Background: </span>
          <input type="text" className="m-3 rounded-md py-1 px-3" />
        </div>
        <div className="my-3">
          <span className="text-white">Text Colour (Main): </span>
          <input type="text" className="m-3 rounded-md py-1 px-3" />
        </div>
        <div className="my-3">
          <span className="text-white">Text Colour (Secondary): </span>
          <input type="text" className="m-3 rounded-md py-1 px-3" />
        </div>
      </div>
    </div>
  );
}
