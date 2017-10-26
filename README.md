# bamazon

An Amazon like store front in the Node command line. Takes user input and depletes item supply while calculating prices for the order. Resupply features will possibly be added in the future. 


Set up variables to require mysql, inquirer, and the cli table
Establish connection to local server

![screenshot 1](https://user-images.githubusercontent.com/26259459/32068987-763cbdb2-ba4d-11e7-9c79-75cf2ea563e5.png)

If connection doesn't fail it calls readProducts(); to display our inventory
ReadProducts() selects all info from mysql database and displays it in a table by looping through the mysql response

![screenshot 2](https://user-images.githubusercontent.com/26259459/32068991-784f63fc-ba4d-11e7-8e22-fc6acd859b28.png)

Then calls prompt()
prompt() uses inquirer to prompt user to pick which item they would like to purchase and then asks how many of that item they would like

![screenshot 3](https://user-images.githubusercontent.com/26259459/32068997-7aa80988-ba4d-11e7-9132-153268bcf6d7.png)


![screenshot 4](https://user-images.githubusercontent.com/26259459/32069000-7c18735c-ba4d-11e7-8759-09085d29933a.png)

If the response is valid and the item is in stock the app does a little bit of math and calculates the price. Then displays a message saying the order has been places with the total

![screenshot 5](https://user-images.githubusercontent.com/26259459/32069002-7deb8fa2-ba4d-11e7-956a-79493ccb664e.png)






