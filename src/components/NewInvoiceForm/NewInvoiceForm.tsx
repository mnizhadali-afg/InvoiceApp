import InputElement from "./InputElement"
import Button from "../Button"
import styles from "./NewInvoiceForm.module.css"

// function closeModal() {
//   const invoiceForm = document.querySelector("#newInvoice")
//   invoiceForm.style.display = "none"
// }

const NewInvoiceForm = () => {
  return (
    <>
      <div id="newInvoice" className={styles.newInvoiceFormModal}>
        <form className={styles.newInvoiceForm}>
          <h2>New Invoice</h2>
          <div className={styles.formScrollable}>
            {/* TODO: Bill From */}
            <div className={styles.billFrom}>
              <h3>Bill From</h3>
              <InputElement
                htmlFor="companyAddress"
                type="text"
                name="companyAddress"
                id="companyAddress"
                value="Company Address"
              />
              <div className={styles.address}>
                <InputElement
                  htmlFor="companyCity"
                  type="text"
                  name="companyCity"
                  id="companyCity"
                  value="City"
                />
                <InputElement
                  htmlFor="companyPostCode"
                  type="text"
                  name="companyPostCode"
                  id="companyPostCode"
                  value="Post Code"
                />
                <InputElement
                  htmlFor="companyCountry"
                  type="text"
                  name="companyCountry"
                  id="companyCountry"
                  value="Country"
                />
              </div>
            </div>

            {/* TODO: Bill To */}
            <div className={styles.billTo}>
              <h3>Bill To</h3>
              <InputElement
                htmlFor="clientName"
                type="text"
                name="clientName"
                id="clientName"
                value="Client Name"
              />
              <InputElement
                htmlFor="clientEmail"
                type="email"
                name="clientEmail"
                id="clientEmail"
                value="Client Email"
              />
              <InputElement
                htmlFor="clientAddress"
                type="text"
                name="clientAddress"
                id="clientAddress"
                value="Street Address"
              />

              <div className={styles.address}>
                <InputElement
                  htmlFor="clientCity"
                  type="text"
                  name="clientCity"
                  id="clientCity"
                  value="City"
                />
                <InputElement
                  htmlFor="clientPostCode"
                  type="text"
                  name="clientPostCode"
                  id="clientPostCode"
                  value="Post Code"
                />
                <InputElement
                  htmlFor="clientCountry"
                  type="text"
                  name="clientCountry"
                  id="clientCountry"
                  value="Country"
                />
              </div>
            </div>

            {/* TODO: Invoice Due Date, Invoice Terms,  */}
            <div className={styles.dateTerms}>
              <InputElement
                htmlFor="issueDate"
                type="date"
                name="issueDate"
                id="issueDate"
                value="Invoice Date"
              />
              <div>
                <label htmlFor="paymentTerms">Payment Terms</label>
                <select name="paymentTerms" id="paymentTerms">
                  <option value="30">30 Days</option>
                  <option value="60">60 Days</option>
                  <option value="90">90 Days</option>
                  <option value="120">120 Days</option>
                </select>
              </div>
            </div>

            <InputElement
              htmlFor="projectDescription"
              type="text"
              name="projectDescription"
              id="projectDescription"
              value="Project Description"
            />

            {/* TODO: Adding Items */}
            <div className={styles.ItemList}>
              <h3>Item List</h3>
            </div>

            {/* TODO: Buttons in Footer */}
            <div className={styles.buttonGroup}>
              <button type="reset" className={styles.discardButton}>
                Discard
              </button>
              <div>
                <Button type="button" value="Save as Draft" />
                <Button type="submit" value="Save & Send" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default NewInvoiceForm
