export default function ThemeInput(props: any) {
  const { text, name, onChangeInput, placeholder } = props;

  return (
    <div className="my-3">
      <span className="text-white">{text}: </span>
      <input
        type="text"
        className="m-3 rounded-md py-1 px-3"
        placeholder={placeholder}
        name={name}
        onChange={onChangeInput}
      />
    </div>
  );
}
