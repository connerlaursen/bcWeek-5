var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

var listItem = $('#shopping-input');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

shoppingFormEl.on('submit', submitOrder)

function submitOrder(event) {
    event.preventDefault();
    var newListItem = $('<li>');
    newListItem.text(listItem.val());
    shoppingListEl.append(newListItem);
    $(listItem).val('');

}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on('submit', submitOrder);