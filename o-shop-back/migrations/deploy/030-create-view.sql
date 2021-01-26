-- Deploy eshop:030-create-view to pg

BEGIN;

CREATE VIEW userView AS
    SELECT u.id, u.first_name, u.last_name, u.username,  r.name AS role, JSON_AGG(s.name) AS shop
        FROM "user" As u 
        JOIN "role" AS r 
        ON u.role_id = r.id
        JOIN "work" AS w
        ON w.user_id = u.id
        JOIN "shop" AS s
        ON s.id = w.shop_id
            GROUP BY u.id, r.name
            ORDER BY u.id;

CREATE VIEW productView AS
    SELECT pr.id, pr.name, pr.price, pr.description, pr.image, pr.quantity, JSON_AGG(c.name) AS category, s.name AS shop
        FROM "product" AS pr
        JOIN "shop" AS s
            ON s.id = pr.shop_id
        JOIN "possess" AS pos
            ON pr.id = pos.product_id
        JOIN "category" AS c
            ON c.id = pos.category_id
            GROUP BY pr.id, s.name
            ORDER BY pr.id;


COMMIT;
