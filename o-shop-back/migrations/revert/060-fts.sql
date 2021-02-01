-- Revert eshop:060-fts from pg

BEGIN;


-- DROP TRIGGER product_update ON product;
-- DROP FUNCTION product_trigger();
DROP INDEX name_description_search_idx;
ALTER TABLE product DROP COLUMN tsv;

COMMIT;

