var total = 0;

var groceryList = [
  { item: "cheerios",
    price: 3.00
  },

  {
    item: "bread",
    price: 2.00
  },
  {
    item: "fish sticks",
    price: 5.00
  },
  {
  item: "fruit",
  price: 5.00
  }
];

for(i=0; i<groceryList.length; i++){

  total+=groceryList[i].price;
  console.log(groceryList[i].item+ " $" + groceryList[i].price);

  var printedList = document.createElement("div"); // <a></a>

  printedList.innerHTML = groceryList[i].item + "$" + groceryList[i].price;        //<a>Go</a>

  // printedList.setAttribute("href", "http://www.google.com");    // <a href = "google">Go</a>

  document.body.appendChild(printedList);       //add a page


}

var printedTotal = document.createElement('div');

printedTotal.innerHTML = "Total: $ " + groceryList.total + total;

document.body.appendChild(printedTotal);

console.log("Total: $" + total);
