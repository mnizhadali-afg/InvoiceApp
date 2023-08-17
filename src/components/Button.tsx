interface ButtonProps {
  type: "button" | "reset" | "submit" | undefind
  value: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ type, value, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {value}
    </button>
  )
}
export default Button
