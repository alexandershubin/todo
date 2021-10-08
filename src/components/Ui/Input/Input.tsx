import "./Input.scss";

const Input = (props: any) => {
  const { htmlFor, type, value, changeInput, label, checked, className } =
    props;
  const inputType = type || "text";

  return (
    <div className={className}>
      <label className={`${className}__label`} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={`${className}__input`}
        type={inputType}
        id={htmlFor}
        checked={checked}
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};
export default Input;
