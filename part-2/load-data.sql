\copy grocery_items(name, price, section) FROM './grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (fname, lname, email)
    VALUES ('Kim', 'West', 'kim@kardashian.com');
INSERT INTO shoppers (fname, lname, email)
    VALUES ('Kanye', 'West', 'kanye@loser.com');
INSERT INTO shoppers (fname, lname, email)
    VALUES ('Beyonce', 'Carter', 'bey@beyhive.com');
INSERT INTO shoppers (fname, lname, email)
    VALUES ('Kobe', 'Bryant', 'kobe@goat.com');
INSERT INTO shoppers (fname, lname, email)
    VALUES ('OJ', 'Diddit', 'glove@dontfit.com');

INSERT INTO orders (shopper_id)
    VALUES (1);
INSERT INTO orders (shopper_id)
    VALUES (2);
INSERT INTO orders (shopper_id)
    VALUES (3);
INSERT INTO orders (shopper_id)
    VALUES (4);
INSERT INTO orders (shopper_id)
    VALUES (5);
INSERT INTO orders (shopper_id)
    VALUES (1);
INSERT INTO orders (shopper_id)
    VALUES (2);
INSERT INTO orders (shopper_id)
    VALUES (3);
INSERT INTO orders (shopper_id)
    VALUES (4);
INSERT INTO orders (shopper_id)
    VALUES (5);

INSERT INTO cart (id, item_id)
    VALUES (1, 1);
INSERT INTO cart (id, item_id)
    VALUES (1, 13);
INSERT INTO cart (id, item_id)
    VALUES (2, 9);
INSERT INTO cart (id, item_id)
    VALUES (2, 17);
INSERT INTO cart (id, item_id)
    VALUES (3, 7);
INSERT INTO cart (id, item_id)
    VALUES (3, 3);
INSERT INTO cart (id, item_id)
    VALUES (4, 12);
INSERT INTO cart (id, item_id)
    VALUES (4, 8);
INSERT INTO cart (id, item_id)
    VALUES (5, 16);
INSERT INTO cart (id, item_id)
    VALUES (5, 19);
INSERT INTO cart (id, item_id)
    VALUES (6, 11);
INSERT INTO cart (id, item_id)
    VALUES (6, 7);
INSERT INTO cart (id, item_id)
    VALUES (7, 5);
INSERT INTO cart (id, item_id)
    VALUES (7, 8);
INSERT INTO cart (id, item_id)
    VALUES (8, 3);
INSERT INTO cart (id, item_id)
    VALUES (8, 2);
INSERT INTO cart (id, item_id)
    VALUES (9, 6);
INSERT INTO cart (id, item_id)
    VALUES (9, 4);
INSERT INTO cart (id, item_id)
    VALUES (10, 18);
INSERT INTO cart (id, item_id)
    VALUES (10, 20);
