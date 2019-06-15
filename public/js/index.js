// $(document).ready(function () {
//   $("#search-btn").on("click", function(event){
//     event.preventDefault();
//     console.log("you searhed for an item..");
    

//     var search_itm = $("#item-search-bar").val().trim();
      
//     console.log(search_itm);
      
//     $.ajax({
//         type: "GET",
//         url: "/results/" + search_itm
//     });
      
//   });
//   $("#login-btn").on("click", function(event){
//     event.preventDefault();
//     console.log("Knock knock -- Who's there?");
//     console.log("someone is logging in..");
    
//   })
// });









// Get references to page elements
var $newItem = $("#item-text");
var $newItemDescription = $("#item-description");
var $newCategory = $("#item-category");
var $newPrice = $("#item-price");
var $submitBtn = $("#submit");
var $itemList = $("#item-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveItem: function(Inventory) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/inventory",
      data: JSON.stringify(Inventory)
    });
  },
  getItem: function() {
    return $.ajax({
      url: "api/item",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshInventory = function() {
  API.getItem().then(function(Inventory) {
    var $newInventory = Inventory.map(function(Inventory) {
      var $a = $("<a>")
        .text(Inventory.product_name)
        .attr("href", "/item/" + Inventory.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": Inventory.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $itemList.empty();
    $itemList.append($newInventory);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  console.log("hellow")
  event.preventDefault();

  var postItem = {
    product_name: $newItem.val().trim(),
    description: $newItemDescription.val().trim(),
    category: $newCategory.val().trim(),
    price: $newPrice.val().trim()
  };

  if (!(postItem.product_name && postItem.description && postItem.category && postItem.price)) {
    alert("You must fill out all input!");
    return;
  }

  API.saveItem(postItem).then(function() {
    refreshInventory();
  });

  
   $newItem.val("");
   $newItemDescription.val("");
   $newCategory.val("");
   $newPrice.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
//$exampleList.on("click", ".delete", handleDeleteBtnClick);