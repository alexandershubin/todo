export const Button = (props: any) => {
    const {handleClick, children, className} = props;
    return (
        <button className={className} onClick={handleClick}>{children}</button>
    )
}
