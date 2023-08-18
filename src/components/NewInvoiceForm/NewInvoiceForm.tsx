import { useState, useRef } from "react"
import InputElement from "./InputElement"
import "./NewInvoiceForm.css"

const NewInvoiceForm: React.FC = () => {
  // Closing the form's modal window
  const closeModal = () => {
    const invoiceForm = document.querySelector("#newInvoice")
    invoiceForm.style.display = "none"
  }

  // Create a new row for the invoice items
  const addNewItem = () => {
    const itemsContainer = document.getElementById("itemsContainer")
    const itemRow = document.querySelector(".item-row")

    // Clone the first item row
    const clonedItemRow = itemRow.cloneNode(true)

    // Clear the values in the cloned input fields
    clonedItemRow
      .querySelectorAll("input")
      .forEach((input) => (input.value = ""))

    // Add the cloned item row to the container
    itemsContainer.appendChild(clonedItemRow)

    // Attach event listeners to the cloned input fields
    clonedItemRow
      .querySelector(".item")
      .addEventListener("input", calculateTotal)
    clonedItemRow
      .querySelector(".qty")
      .addEventListener("input", calculateTotal)
    clonedItemRow
      .querySelector(".price")
      .addEventListener("input", calculateTotal)
  }

  // accessing the grand total using useRef
  const grandTotalInputRef = useRef(null)

  // Calculate the total value of the items
  const calculateTotal = () => {
    const itemRows = document.querySelectorAll(".item-row")
    let grandTotal = 0

    itemRows.forEach((itemRow) => {
      const quantity = parseFloat(itemRow.querySelector(".qty").value)
      const price = parseFloat(itemRow.querySelector(".price").value)
      const totalPriceInput = itemRow.querySelector(".totalPrice")

      if (!isNaN(quantity) && !isNaN(price)) {
        const total = quantity * price
        totalPriceInput.value = "$" + total.toFixed(2)
        grandTotal += total
      } else {
        totalPriceInput.value = "$0.00"
      }
    })

    // Update the grand total using the ref
    if (grandTotalInputRef.current) {
      grandTotalInputRef.current.value = "$" + grandTotal.toFixed(2)
    }
    setFormData((prevData) => ({
      ...prevData,
      grandTotal: "$" + grandTotal.toFixed(2), // Update grandTotal in state
    }))
  }

  // Handling the form's data
  const [formData, setFormData] = useState({
    companyAddress: "",
    companyCity: "",
    companyPostCode: "",
    companyCountry: "",
    clientName: "",
    clientEmail: "",
    clientAddress: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    issueDate: "",
    paymentTerms: 0,
    projectDescription: "",
    items: [
      {
        itemName: "",
        quantity: "",
        price: "0",
      },
    ],
    grandTotal: "$0.00",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  console.log(formData)

  return (
    <div id="newInvoice" className="newInvoiceFormModal">
      <form className="newInvoiceForm" onSubmit={handleFormSubmit}>
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
              labelValue="Street"
              onChange={handleInputChange}
              value={formData.companyAddress || ""}
            />
            <div className="address">
              <InputElement
                htmlFor="companyCity"
                type="text"
                name="companyCity"
                id="companyCity"
                labelValue="City"
                onChange={handleInputChange}
                value={formData.companyCity || ""}
              />
              <InputElement
                htmlFor="companyPostCode"
                type="text"
                name="companyPostCode"
                id="companyPostCode"
                labelValue="Post Code"
                onChange={handleInputChange}
                value={formData.companyPostCode || ""}
              />
              <InputElement
                htmlFor="companyCountry"
                type="text"
                name="companyCountry"
                id="companyCountry"
                labelValue="Country"
                onChange={handleInputChange}
                value={formData.companyCountry || ""}
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
              labelValue="Client Name"
              onChange={handleInputChange}
              value={formData.clientName || ""}
            />
            <InputElement
              htmlFor="clientEmail"
              type="email"
              name="clientEmail"
              id="clientEmail"
              labelValue="Client Email"
              onChange={handleInputChange}
              value={formData.clientEmail || ""}
            />
            <InputElement
              htmlFor="clientAddress"
              type="text"
              name="clientAddress"
              id="clientAddress"
              labelValue="Street Address"
              onChange={handleInputChange}
              value={formData.clientAddress || ""}
            />

            <div className="address">
              <InputElement
                htmlFor="clientCity"
                type="text"
                name="clientCity"
                id="clientCity"
                labelValue="City"
                onChange={handleInputChange}
                value={formData.clientCity || ""}
              />
              <InputElement
                htmlFor="clientPostCode"
                type="text"
                name="clientPostCode"
                id="clientPostCode"
                labelValue="Post Code"
                onChange={handleInputChange}
                value={formData.clientPostCode || ""}
              />
              <InputElement
                htmlFor="clientCountry"
                type="text"
                name="clientCountry"
                id="clientCountry"
                labelValue="Country"
                onChange={handleInputChange}
                value={formData.clientCountry || ""}
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
              labelValue="Invoice Date"
              onChange={handleInputChange}
              value={formData.issueDate || ""}
            />
            <div>
              <label htmlFor="paymentTerms">Payment Terms</label>
              <select
                name="paymentTerms"
                id="paymentTerms"
                onChange={handleInputChange}
                value={formData.paymentTerms || "0"}
              >
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
            labelValue="Project Description"
            onChange={handleInputChange}
            value={formData.projectDescription || ""}
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
                    placeholder="$00.0"
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
            <div className="grandTotalContainer">
              <label className="grandTotalLabel">
                Grand Total:{" "}
                <input
                  id="grandTotal"
                  className="grandTotalSpan"
                  type="text"
                  value={formData.grandTotal}
                  ref={grandTotalInputRef}
                  disabled
                />
              </label>
              <input type="hidden" name="grandTotal" id="hiddenGrandTotal" />
            </div>
            <button
              type="button"
              name="button"
              className="addNewItemButton btn-purple"
              onClick={addNewItem}
            >
              Add New Item
            </button>
          </div>

          {/* TODO: Buttons in Footer */}
          <div className="buttonGroup">
            <button
              type="button"
              className={`discardButton btn-gray`}
              onClick={closeModal}
            >
              Discard
            </button>
            <div>
              <button className="btn-dark" type="button">
                Save as Draft
              </button>
              <button className="btn-danger" type="reset">
                Save & Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default NewInvoiceForm
