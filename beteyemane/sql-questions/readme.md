# SQL Lab

Create a database and load the SQL data like so:

```
createdb toy_store
psql toy_store < toy_store.sql
```
This will create the database `toy_store`. To connect to the database, type `psql toy_store`, then you can execute sql statements.

Write SQL statements that:

1. Select the names of all products that are not on sale.
1. Select the names of all products that cost less than £20.
1. Select the name and price of the most expensive product.
1. Select the name and price of the second most expensive product.
1. Select the name and price of the least expensive product.
1. Select the names and prices of all products, ordered by price in descending order.
1. Select the average price of all products.
1. Select the sum of the price of all products.
1. Select the sum of the price of all products whose prices is less than £20.
1. Select the id of the user with the name "Alex Chin".
1. Select the names of all users whose names start with the letter "J".
1. Select the number of users whose first names are "Spencer".
1. Select the number of users who want a "Teddy Bear".
1. Select the count of items on the wishlish of the user with your name.
1. Select the count and name of all products on the wishlist, ordered by count in descending order.
1. Select the count and name of all products that are not on sale on the wishlist, ordered by count in descending order.
1. Inserts a user with the name "Jonathan Anderson" into the users table. Ensure the created_at column is set to the current time.
1. Select the id of the user with the name "Jonathan Anderson"?
1. Inserts a wishlist entry for the user with the name "Jonathan Anderson" for the product "The Python Programming Language".
1. Updates the name of the "Jonathan Anderson" user to be "Jon Anderson".
1. Deletes the user with the name "Jon Anderson".
1. Deletes the wishlist item for the user you just deleted.

Write each SQL statement in the `answers.sql` file.


### Hints
- As with anything, if you get stuck, move on, then go back if you have time.
- Don't spend all night on it!
- Use the resources on w3schools, etc, to solve harder ones - there are solutions to these questions that work with what we've learnt today, but other tools exist in SQL that could make the queries 'better' or 'easier'.
