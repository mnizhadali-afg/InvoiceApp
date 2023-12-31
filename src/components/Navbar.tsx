import styles from "./Navbar.module.css"

const Navbar = ({ invoices }) => {
  const showModal = () => {
    const invoiceForm = document.querySelector("#newInvoice") as HTMLElement
    if (invoiceForm) {
      invoiceForm.style.display = "block"
    }
  }

  return (
    <nav>
      <header>
        <h1>Invoices</h1>
        {invoices ? (
          <p>There are {invoices} invoices in the system.</p>
        ) : (
          <p>No invoices yet.</p>
        )}

        {/* <p>
          <strong>The app is still under developemt 😎</strong>
        </p> */}
      </header>
      <div className={styles.navRightSide}>
        <p className={styles.filterIcon}>
          Filter by
          <img src="./images/arrow_down.svg" alt="arrow down image" />
        </p>
        <button className={styles.newInvoice} onClick={showModal}>
          <img
            src="./images/plus.svg"
            alt="plus image"
            className={styles.plusIcon}
          />
          New Invoice
        </button>
      </div>
    </nav>
  )
}
export default Navbar
