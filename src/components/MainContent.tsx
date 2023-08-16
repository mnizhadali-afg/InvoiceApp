import Navbar from "./Navbar"
import InvoiceItem from "./InvoiceItem"
import NewInvoiceForm from "./NewInvoiceForm/NewInvoiceForm"

import styles from "./MainContent.module.css"

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <Navbar />
      <NewInvoiceForm />
      <div className={styles.invoiceItemContainer}>
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
      </div>
    </div>
  )
}
export default MainContent
