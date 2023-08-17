interface ButtonProps {
  value: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  )
}
export default Button
