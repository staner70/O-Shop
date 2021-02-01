-- Deploy eshop:065-view_fts to pg

BEGIN;

CREATE VIEW ftsView AS
    SELECT pr.id, pr.name, pr.price, pr.description, pr.image, pr.quantity, pr.created_at, pr.updated_at, JSON_AGG(c.name) AS category, s.name AS shop, pr.tsv
        FROM "product" AS pr
        JOIN "shop" AS s
            ON s.id = pr.shop_id
        JOIN "possess" AS pos
            ON pr.id = pos.product_id
        JOIN "category" AS c
            ON c.id = pos.category_id
            GROUP BY pr.id, s.name
            ORDER BY pr.name;

COMMIT;
