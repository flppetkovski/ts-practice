type ButtonProps = {
    variant: "primary" | "secondary"
    children: string
} & Omit<React.ComponentProps<"button">, "children">

const CustomButton = ({variant, children, ...rest}: ButtonProps) => {
    return (
            <button {...rest} className={`class-with-${variant}`}>{children}</button>
    )
}

export default CustomButton
