import { useState } from "react";

export default function ThemeInput(props: any) {
  const { text, name, onChangeInput, placeholder, setNewColour } = props;

  const [showModal, setShowModal] = useState(false);

  const colours =
    "slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose".split(
      "|"
    );

  const selectColour = (event: any) => {
    setShowModal(false);

    if (
      event.target.classList[0] === "bg-black" ||
      event.target.classList[0] === "bg-white"
    ) {
      setNewColour(name, event.target.classList[0].split("-")[1]);
      return;
    }
    const split = event.target.classList[0].split("-");
    setNewColour(name, `${split[1]}-${split[2]}`);
  };

  return (
    <div className="my-3">
      <span className="text-white">{text}: </span>
      <button
        className="bg-white px-2 rounded-sm"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Select
      </button>
      <input
        type="text"
        className="m-3 rounded-md py-1 px-3"
        placeholder={placeholder}
        name={name}
        onChange={onChangeInput}
      />

      <div
        className={
          showModal
            ? "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            : "hidden"
        }
        onClick={() => setShowModal(false)}
      ></div>
      <div
        className={
          showModal
            ? "absolute inset-x-0 top-0 m-auto p-5 w-96 shadow-lg rounded-md bg-slate-800"
            : "hidden"
        }
      >
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-white">
            Select a colour
          </h3>
          <div className="text-white">
            {colours.map((colour) => {
              const colourlist = [];
              colourlist.push(
                <button
                  className={`bg-${colour}-50 h-[30px] w-[30px] border-solid border-slate-900 border`}
                  onClick={selectColour}
                />
              );
              for (let i = 100; i <= 900; i += 100) {
                colourlist.push(
                  <button
                    className={`bg-${colour}-${i} h-[30px] w-[30px] border-solid border-slate-900 border`}
                    onClick={selectColour}
                  />
                );
              }

              return (
                <div className="flex flex-row align-center">
                  {colour}
                  {colourlist}
                </div>
              );
            })}
            <div className="flex flex-row align-center">
              Black
              <button
                className={`bg-black h-[30px] w-[30px] border-solid border-slate-900 border`}
                onClick={selectColour}
              />
            </div>
            <div className="flex flex-row align-center">
              White
              <button
                className={`bg-white h-[30px] w-[30px] border-solid border-slate-900 border`}
                onClick={selectColour}
              />
            </div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              onClick={() => {
                setShowModal(false);
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
