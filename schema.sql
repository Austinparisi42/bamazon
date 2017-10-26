CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NULL, 
department_name VARCHAR(100) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INTEGER NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Hat", "Clothing", 9.99, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Clothing", 15.99, 25);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Ps4", "Electronics", 350.99, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Toothpaste", "Hygeine", 5.99, 40);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dog Food", "Pet", 50.99, 15);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Coffee", "Grocery", 7.99, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Boots", "Footwear", 120.99, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Backpack", "Accessories", 50.99, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Silverware", "Kitchen", 40.00, 50);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 699.00, 50);


SELECT * FROM products;