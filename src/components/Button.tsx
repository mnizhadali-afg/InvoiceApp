interface ButtonProps {
  type: string
  onClick: () => void
  value: string
}

const Button: React.FC<ButtonProps> = ({ type, value, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {value}
    </button>
  )
}
export default Button
