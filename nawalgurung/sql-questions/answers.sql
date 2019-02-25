-- 1. Select the names of all products that are not on sale.
SELECT * FROM products WHERE on_sale='t';
-- 2. Select the names of all products that cost less than £20.
SELECT * FROM products WHERE price <20;
-- 3. Select the name and price of the most expensive product.
SELECT name,price FROM products ORDER BY price DESC;
-- 4. Select the name and price of the second most expensive product.
SELECT name,price FROM products ORDER BY price DESC LIMIT 1 OFFSET 1;
-- 5. Select the name and price of the least expensive product.
SELECT name,price FROM products ORDER BY price LIMIT 1;
-- 6. Select the names and prices of all products, ordered by price in descending order.
SELECT name,price FROM products ORDER BY price DESC;
-- 7. Select the average price of all products.
SELECT AVG(price) AS "Average Price" FROM products;
-- 8. Select the sum of the price of all products.
SELECT SUM(price) FROM products;
-- 9. Select the sum of the price of all products whose prices is less than £20.
SELECT SUM(price) FROM products WHERE price <20;
-- 10. Select the id of the user with the name "Alex Chin".
SELECT name,id FROM users WHERE name LIKE 'Alex Chin%';
-- 11. Select the names of all users whose names start with the letter "E".
SELECT name,id FROM users WHERE name LIKE 'E%';
-- 12. Select the number of users whose first names are "Benjamin".
SELECT name,id FROM users WHERE name LIKE 'Benjamin%';
-- 13. Select the number of users who want a "Teddy Bear".
SELECT * FROM wishlists WHERE product_id = (SELECT id FROM products WHERE name = 'Teddy Bear');
-- 14. Select the count of items on the wishlish of the user with your name.
SELECT count(*) FROM wishlists WHERE user_id = (SELECT id FROM users WHERE name ='Nawal Gurung');
-- 15. Select the count and name of all products on the wishlist, ordered by count in descending order.

-- 16. Select the count and name of all products that are not on sale on the wishlist, ordered by count in descending order.

-- 17. Insert a user with the name "Jonathan Anderson" into the users table.
INSERT INTO users (name) VALUES ('Jonathan Anderson');
-- 19. Insert a wishlist entry for the user with the name "Jonathan Anderson" for the product "The Ruby Programming Language" using sub queries to find the user id and the product id.
INSERT INTO wishlists (user_id, product_id) VALUES ((SELECT id FROM users WHERE name ='Jonathan Anderson'), (SELECT id FROM products WHERE name ='The Ruby Programming Language'));
--20. Update the name of the "Jonathan Anderson" user to be "Jon Anderson".
UPDATE users SET name='Jon Anderson' WHERE name='Jonathan Anderson';
-- 21. Delete the user with the name "Jon Anderson".
DELETE FROM users WHERE name='Jon Anderson';
-- 22. Delete the wishlist item for the user you just deleted.
