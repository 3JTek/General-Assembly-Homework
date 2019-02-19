# SQL Lab

Create a database and load the SQL data like so:

```
createdb toy_store
psql toy_store < toy_store.sql
```
This will create the database `toy_store`. To connect to the database, type `psql toy_store`, then you can execute sql statements.

Write SQL statements that:

1. Select the names of all products that are not on sale.
SELECT name FROM product WHERE on_sale=false

1. Select the names of all products that cost less than £20.
SELECT name FROM products WHERE price<20;

1. Select the name and price of the most expensive product.
SELECT name FROM products WHERE price<20;

1. Select the name and price of the second most expensive product.
SELECT Max(price) FROM products WHERE price NOT IN (SELECT Max(price) FROM products)

1. Select the name and price of the least expensive product.
SELECT name, price FROM products WHERE price=(SELECT Min(price) FROM products);

1. Select the names and prices of all products, ordered by price in descending order.
SELECT name, price FROM products ORDER BY price DESC

1. Select the average price of all products.
SELECT AVG(price) FROM products;

1. Select the sum of the price of all products.
SELECT SUM(price) FROM products;

1. Select the sum of the price of all products whose prices is less than £20.
SELECT SUM(price) FROM products WHERE price<20;

1. Select the id of the user with the name "Alex Chin".
SELECT id FROM users WHERE name='Alex Chin';

1. Select the names of all users whose names start with the letter "J".
SELECT name FROM users WHERE name ILIKE 'J%'

1. Select the number of users whose first names are "Spencer".
SELECT COUNT(name) FROM users WHERE name ILIKE 'Spencer%';

1. Select the number of users who want a "Teddy Bear".
SELECT id FROM products WHERE name='Teddy Bear';
SELECT COUNT(product_id) FROM wishlists WHERE product_id='1'

1. Select the count of items on the wishlish of the user with your name.

1. Select the count and name of all products on the wishlist, ordered by count in descending order.

1. Select the count and name of all products that are not on sale on the wishlist, ordered by count in descending order.

1. Inserts a user with the name "Jonathan Anderson" into the users table. Ensure the created_at column is set to the current time.
Done
INSERT INTO users (name, created_at) VALUES ('Jonathan Anderson', '2019-02-19')   

1. Select the id of the user with the name "Jonathan Anderson"?
SELECT user_id FROM users WHERE name='Jonathan Anderson';

1. Inserts a wishlist entry for the user with the name "Jonathan Anderson" for the product "The Python Programming Language".
INSERT INTO wishlists (created_at, user_id, product_id) VALUES (
'2019-02-19', 15, 4);

1. Updates the name of the "Jonathan Anderson" user to be "Jon Anderson".
UPDATE users SET name='Jon Anderson' WHERE name='Jonathan Anderson';

1. Deletes the user with the name "Jon Anderson".
DELETE from users WHERE name='Jon Anderson'

1. Deletes the wishlist item for the user you just deleted.
DELETE from wishlists WHERE user_id=15;

Write each SQL statement in the `answers.sql` file.


### Hints
- As with anything, if you get stuck, move on, then go back if you have time.
- Don't spend all night on it!
- Use the resources on w3schools, etc, to solve harder ones - there are solutions to these questions that work with what we've learnt today, but other tools exist in SQL that could make the queries 'better' or 'easier'.
