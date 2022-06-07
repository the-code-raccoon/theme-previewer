interface ThemeSidebarProps {
  accent1: string;
  setAccent1: Function;
}

export default function ThemeSidebar(props: ThemeSidebarProps) {
  const { accent1, setAccent1 } = props;

  return (
    <div className="bg-slate-700 w-[600px] min-h-screen p-5 text-lg">
      <div>
        <div>
          <h1 className="text-xl text-white">
            Input colours as hex codes (ex. #ffffff)
          </h1>
        </div>
        <div className="my-3">
          <span className="text-white">Accent Colour 1: </span>
          <input
            type="text"
            className="m-3 rounded-md py-1 px-3"
            placeholder="ffffff"
            onChange={(event) => {
              console.log(event.target.value);
              if (event.target.value === "purple-600") {
                setAccent1("red-900");
              }
            }}
          />
        </div>
        <div className="my-3">
          <span className="text-white">Accent Colour 2: </span>
          <input type="text" className="m-3 rounded-md py-1 px-3" />
        </div>
        <div className="my-3">
          <span className="text-white">Background: </span>
          <input type="text" className="m-3 rounded-md py-1 px-3" />
        </div>
        <div className="my-3">
          <span className="text-white">Accent Colour 1: </span>
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
