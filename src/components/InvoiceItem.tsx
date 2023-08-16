import styles from "./InvoiceItem.module.css"

const InvoiceItem = () => {
  return (
    <div className={styles.invoiceItem}>
      <div className={styles.firstSection}>
        <p className={styles.invoiceId}>XYZ123</p>
        <p className={styles.textLight}>Due 18 Aug 2021</p>
        <p className={styles.textLight}>Jensen Huang</p>
      </div>
      <div className={styles.secondSection}>
        <p className={styles.textBold}>$ 1,800.90</p>
        <div className={styles.status}>Paid</div>
        <img src="./images/arrow_right.svg" alt="arrow right" />
      </div>
    </div>
  )
}
export default InvoiceItem
