import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import InvoiceItem from "./InvoiceItem"
import NewInvoiceForm from "./NewInvoiceForm/NewInvoiceForm"

import styles from "./MainContent.module.css"

const MainContent = () => {
  const [invoiceData, setInvoiceData] = useState([])
  useEffect(() => {
    fetch("/InvoiceData/InvoiceData.json")
      .then((response) => response.json())
      .then((data) => setInvoiceData(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [])
  return (
    <div className={styles.mainContent}>
      <Navbar invoices={invoiceData.length} />
      <NewInvoiceForm />
      {invoiceData ? (
        <div className={styles.invoiceItemContainer}>
          {invoiceData.map((invoice, index) => (
            <InvoiceItem key={index} invoice={invoice} />
          ))}
        </div>
      ) : (
        <div>Hi</div>
      )}
    </div>
  )
}
export default MainContent
