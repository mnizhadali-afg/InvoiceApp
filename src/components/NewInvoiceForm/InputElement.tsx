import styles from "./InputElement.module.css"

interface InputElementProps {
  htmlFor: string
  type: string
  name: string
  id: string
  labelValue: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputElement: React.FC<InputElementProps> = ({
  htmlFor,
  type,
  name,
  id,
  labelValue,
  value,
  onChange,
}) => {
  return (
    <div className={styles.formElement}>
      <label htmlFor={htmlFor}>{labelValue}</label>
      <input
        type={type}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
      />
    </div>
  )
}
export default InputElement
