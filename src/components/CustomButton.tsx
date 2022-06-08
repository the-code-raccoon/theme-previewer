import { darker } from "../helper";

export default function CustomButton(props: any) {
  const { colour, text } = props;

  return (
    <button
      className={`bg-${colour} transition ease-in-out hover:bg-${darker(
        colour
      )} drop-shadow-lg h-[45px] px-5 mx-5 shadow rounded-md text-lg font-medium text-${text}`}
    >
      {props.children}
    </button>
  );
}
