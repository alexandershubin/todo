import "./Input.scss";

const Input = (props: any) => {
  const { htmlFor, type, value, changeDone, label, checked } = props;
  const inputType = type || "text";
  console.log(checked, "checked");
  return (
    <div className="input">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={inputType}
        id={htmlFor}
        checked={checked}
        value={value}
        onChange={changeDone}
      />
    </div>
  );
};
export default Input;
