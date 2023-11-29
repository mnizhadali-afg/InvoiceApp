import { useState } from "react"
import styles from "./InvoiceItem.module.css"

interface Invoice {
  billTo: {
    clientName: string
    // Other properties...
  }
  invoiceDate: string
  grandTotal: number
  // Other properties...
}

interface Props {
  invoice: Invoice
}

const InvoiceItem: React.FC<Props> = ({ invoice }) => {
  const [invoiceStatus, setInvoiceStatus] = useState(false)

  const handleStatus = () => {
    setInvoiceStatus((prevState) => !prevState)
  }

  return (
    <div className={styles.invoiceItem}>
      <p className={styles.invoiceId}>XYZ123</p>
      <p className={styles.textLight}>{invoice.billTo.clientName}</p>
      <p className={styles.textLight}>{invoice.invoiceDate}</p>
      <p className={styles.textBold}>${invoice.grandTotal}</p>
      <div
        className={invoiceStatus ? styles.statusPaid : styles.statusPending}
        onClick={handleStatus}
      >
        {invoiceStatus ? "Paid" : "Pending"}
      </div>
      <div className={styles.rightArrowIcon}>
        <img src="./images/arrow_right.svg" alt="arrow right" />
      </div>
    </div>
  )
}

export default InvoiceItem
