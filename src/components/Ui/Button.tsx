export const Button = (props: any) => {
  const { handleClick, children, className, dataAttr } = props;
  return (
    <button className={className} data-filter={dataAttr} onClick={handleClick}>
      {children}
    </button>
  );
};
