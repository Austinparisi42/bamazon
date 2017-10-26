var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Parisi42",
	database: "bamazon"
});

connection.connect(function(error) {
  if (error) throw error;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
  
});

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(error, response) {

      var table = new Table({
            head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
            , colWidths: [10, 20, 20, 20, 20]
        });

   if (error) throw error;
        for (var i = 0; i < response.length; i++) {
             table.push ([response[i].item_id, response[i].product_name,
            response[i].department_name, response[i].price,
            response[i].stock_quantity]);

        }
    
    console.log(table.toString());

    prompt();

    
    // connection.end();
  });
}
 function prompt() {
inquirer
      .prompt([
        {
          name: "choice",
          type: "input",
          message: "Enter the ID of the item you would like to buy."
        },
        {
          name: "howMany",
          type: "input",
          message: "How many would you like?"
        }
      ])
      .then(function(answer) {
      	var item = answer.choice;
      	var quantity = answer.howMany;
        
        var queryStr = "SELECT * FROM products WHERE ?";

        connection.query(queryStr, {item_id: item}, function(error, response) {
        	if (error) throw error;

        	if (response.length === 0) {
        		console.log("INVALID ID");
        		readProducts();
        	} else {
        		var productData = response[0];

        		if (quantity <= productData.stock_quantity) {
        			console.log("That product is in stock. Placing order.");

        			var updateQueryStr = "UPDATE products SET stock_quantity = " + (productData.stock_quantity - quantity) + " WHERE item_id = " + item;

        			connection.query(updateQueryStr, function(error, response) {
        				if (error) throw error;

        				console.log("Your order has been placed. Your total is $" + productData.price * quantity);
        				connection.end();
        			})
        		} else {
        			console.log("Not enough of that item in stock");
        			readProducts();
        		}

        	}
        
      })
    })
  }