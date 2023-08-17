import styles from "./InputElement.module.css"

interface InputElementProps {
  htmlFor: string
  type: string
  name: string
  id: string
  value: string
}

const InputElement: React.FC<InputElementProps> = ({
  htmlFor,
  type,
  name,
  id,
  value,
}) => {
  return (
    <div className={styles.formElement}>
      <label htmlFor={htmlFor}>{value}</label>
      <input type={type} name={name} id={id} />
    </div>
  )
}
export default InputElement
