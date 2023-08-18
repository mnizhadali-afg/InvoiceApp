const ItemRow = ({ item, handleInputChange }) => {
  return (
    <div className="item-row">
      <input
        type="text"
        name={`item`}
        placeholder="e.g. Banner"
        className="item"
        value={item.itemName}
        onChange={(e) => handleInputChange(e)}
      />
      <input
        type="number"
        name={`qty`}
        placeholder="0"
        className="qty"
        value={item.quantity}
        onChange={(e) => handleInputChange(e)}
      />
      <input
        type="number"
        name={`price`}
        className="price"
        placeholder="$00.0"
        value={item.price}
        onChange={(e) => handleInputChange(e)}
      />
      <input
        type="text"
        className="totalPrice"
        id="totalPrice"
        placeholder="$0.00"
        disabled
      />
      <input type="hidden" name="totalPrice[]" id="hiddenTotalPrice" />
      <img
        src="images/delete_icon.svg"
        alt="delete icon"
        className="deleteIcon"
      />
    </div>
  )
}

export default ItemRow
