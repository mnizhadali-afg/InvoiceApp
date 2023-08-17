import InputElement from "./InputElement"
import Button from "../Button"
import "./NewInvoiceForm.css"

function closeModal() {
  const invoiceForm = document.querySelector("#newInvoice")
  invoiceForm.style.display = "none"
}

const addNewItem = () => {
  const itemsContainer = document.getElementById("itemsContainer")
  const itemRow = document.querySelector(".item-row")

  // Clone the first item row
  const clonedItemRow = itemRow.cloneNode(true)

  // Clear the values in the cloned input fields
  clonedItemRow.querySelectorAll("input").forEach((input) => (input.value = ""))

  // Add the cloned item row to the container
  itemsContainer.appendChild(clonedItemRow)

  // Attach event listeners to the cloned input fields
  clonedItemRow.querySelector(".item").addEventListener("input", calculateTotal)
  clonedItemRow.querySelector(".qty").addEventListener("input", calculateTotal)
  clonedItemRow
    .querySelector(".price")
    .addEventListener("input", calculateTotal)
}

const calculateTotal = () => {
  const itemRows = document.querySelectorAll(".item-row")
  let grandTotal = 0

  itemRows.forEach((itemRow) => {
    const quantity = parseFloat(itemRow.querySelector(".qty").value)
    const price = parseFloat(itemRow.querySelector(".price").value)
    const totalPriceSpan = itemRow.querySelector(".totalPrice")

    if (!isNaN(quantity) && !isNaN(price)) {
      const total = quantity * price
      totalPriceSpan.value = "$" + total.toFixed(2)
      grandTotal += total
    } else {
      totalPriceSpan.value = "$0.00"
    }
  })

  // Update the grand total
  const grandTotalSpan = document.getElementById("grandTotal")
  grandTotalSpan.textContent = "$" + grandTotal.toFixed(2)
}

const NewInvoiceForm = () => {
  return (
    <>
      <div id="newInvoice" className="newInvoiceFormModal">
        <form className="newInvoiceForm">
          <h2>New Invoice</h2>
          <div className="formScrollable">
            {/* TODO: Bill From */}
            <div className="billFrom">
              <h3>Bill From</h3>
              <InputElement
                htmlFor="companyAddress"
                type="text"
                name="companyAddress"
                id="companyAddress"
                value="Company Address"
              />
              <div className="address">
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
            <div className="billTo">
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

              <div className="address">
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
            <div className="dateTerms">
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
            <div id="itemsContainer">
              <h3>Item List</h3>
              <div>
                <div className="itemListlabels">
                  <label>Item Name</label>
                  <label>Qty.</label>
                  <label>Price</label>
                  <label>Total Price</label>
                  {/* <label>Action</label> */}
                </div>
                {/* TODO: Item Row */}
                <div id="itemsContainer" className="itemsContainer">
                  <div className="item-row">
                    <input
                      type="text"
                      name="item[]"
                      placeholder="e.g. Banner"
                      className="item"
                      onInput={calculateTotal}
                    />
                    <input
                      type="number"
                      name="qty[]"
                      placeholder="0"
                      className="qty"
                      onInput={calculateTotal}
                    />
                    <input
                      type="number"
                      name="price[]"
                      className="price"
                      placeholder="00.0"
                      onInput={calculateTotal}
                    />
                    <input
                      type="text"
                      className="totalPrice"
                      id="totalPrice"
                      placeholder="$0.00"
                      disabled
                    />
                    <input
                      type="hidden"
                      name="totalPrice[]"
                      id="hiddenTotalPrice"
                    />
                    <img
                      src="images/delete_icon.svg"
                      alt="delete icon"
                      className="deleteIcon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="grandTotalLabel">
                Grand Total:{" "}
                <span id="grandTotal" className="grandTotalSpan">
                  $0.00
                </span>
              </label>
              <input type="hidden" name="grandTotal" id="hiddenGrandTotal" />
              <button
                type="button"
                name="button"
                className="grandTotalButton"
                onClick={addNewItem}
              >
                Add New Item
              </button>
            </div>

            {/* TODO: Buttons in Footer */}
            <div className="buttonGroup">
              <Button value="Discard" onClick={closeModal} />
              <div>
                <Button value="Save as Draft" />
                <Button value="Save & Send" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default NewInvoiceForm
