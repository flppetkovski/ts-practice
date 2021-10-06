type HorizontalPosition = "left" | "center" | "right"
type VertyicalPosition = "top" | "center" | "bottom"

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VertyicalPosition}`, "center-center"> | "center"
}

const Toast = ({position}:ToastProps) => {
    return (
        <div>
        </div>
    )
}

export default Toast
