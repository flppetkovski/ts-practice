type InputProps = 
React.ComponentProps<"input">

const CustomButton = (props: InputProps) => {
    return (
        <input {...props}/>
    )
}

export default CustomButton
