export default function ThemeInput(props: any) {
  const { text, name, onChangeInput } = props;

  return (
    <div className="my-3">
      <span className="text-white">{text}: </span>
      <input
        type="text"
        className="m-3 rounded-md py-1 px-3"
        placeholder="ex. sky-300"
        name={name}
        onChange={onChangeInput}
      />
    </div>
  );
}
