import styles from "./InputElement.module.css"

const InputElement = ({ htmlFor, type, name, id, value }) => {
  return (
    <div className={styles.formElement}>
      <label htmlFor={htmlFor}>{value}</label>
      <input type={type} name={name} id={id} />
    </div>
  )
}
export default InputElement
