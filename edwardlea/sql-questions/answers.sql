-- 1. Select the names of all products that are not on sale.
SELECT name FROM products WHERE on_sale=false;
-- 2. Select the names of all products that cost less than £20.
SELECT name FROM products WHERE price < 20;
-- 3. Select the name and price of the most expensive product.
SELECT name, price FROM products ORDER BY price DESC LIMIT 1;
-- 4. Select the name and price of the second most expensive product.
SELECT name, price FROM products ORDER BY price DESC LIMIT 1 OFFSET 1;
-- 5. Select the name and price of the least expensive product.
SELECT name, price FROM products ORDER BY price ASC LIMIT 1;
-- 6. Select the names and prices of all products, ordered by price in descending order.
SELECT name, price FROM products ORDER BY price DESC;
-- 7. Select the average price of all products.
SELECT AVG(price) FROM products;
-- 8. Select the sum of the price of all products.
SELECT SUM(price) FROM products;
-- 9. Select the sum of the price of all products whose prices is less than £20.
SELECT SUM(price) FROM products WHERE price < 20;
-- 10. Select the id of the user with the name "Alex Chin".
SELECT id FROM users where name='Alex Chin';
-- 11. Select the names of all users whose names start with the letter "E".
SELECT name FROM users WHERE name ILIKE 'E%';
-- 12. Select the number of users whose first names are "Benjamin".
SELECT COUNT(name) FROM users WHERE name ILIKE 'BENJAMIN%';
-- 13. Select the number of users who want a "Teddy Bear".
SELECT COUNT(user_id) FROM wishlists WHERE product_id = (SELECT id FROM products WHERE name = 'Teddy Bear');
-- 14. Select the count of items on the wishlish of the user with your name.
SELECT COUNT(user_id) FROM wishlists WHERE user_id = (SELECT id FROM users WHERE name = 'Ed Lea');
-- 15. Select the count and name of all products on the wishlist, ordered by count in descending order.
SELECT products.name, COUNT(*) AS total FROM wishlists, products WHERE wishlists.product_id = products.id GROUP BY products.name ORDER BY total DESC;
-- 16. Select the count and name of all products that are not on sale on the wishlist, ordered by count in descending order.
SELECT products.name, COUNT(*) AS total FROM wishlists, products WHERE on_sale = false AND wishlists.product_id = products.id GROUP BY products.name ORDER BY total DESC;
-- 17. Insert a user with the name "Jonathan Anderson" into the users table.
INSERT INTO users (created_at,name) VALUES
(now(),'Jonathan Anderson');
-- 19. Insert a wishlist entry for the user with the name "Jonathan Anderson" for the product "The Ruby Programming Language" using sub queries to find the user id and the product id.
INSERT INTO wishlists (created_at, user_id, product_id) VALUES
(now(),(SELECT id FROM users WHERE name = 'Jonathan Anderson'),(SELECT id FROM products WHERE name='The Python Programming Language'));
--20. Update the name of the "Jonathan Anderson" user to be "Jon Anderson".
UPDATE users SET name='Jon Anderson' WHERE name='Jonathan Anderson';
-- 21. Delete the user with the name "Jon Anderson".
DELETE FROM users WHERE name='Jon Anderson';
-- 22. Delete the wishlist item for the user you just deleted.
DELETE FROM wishlists WHERE id=(SELECT id FROM wishlists ORDER BY id DESC LIMIT 1)
