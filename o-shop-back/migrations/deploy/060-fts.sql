-- Deploy eshop:060-fts to pg

BEGIN;

ALTER TABLE product ADD COLUMN tsv tsvector;
UPDATE product SET tsv=to_tsvector('english', coalesce(name,'') || ' ' || coalesce(description,''));
CREATE INDEX IF NOT EXISTS name_description_search_idx ON product USING gin(tsv);
-- CREATE OR REPLACE FUNCTION product_trigger() RETURNS trigger AS $$ begin new.tsv := setweight(to_tsvector(new.name), 'A') || setweight(to_tsvector(new.description), 'B'); return new; end $$ LANGUAGE plpgsql;
-- CREATE TRIGGER product_update BEFORE INSERT OR UPDATE ON product FOR EACH ROW EXECUTE PROCEDURE product_trigger();


COMMIT;

