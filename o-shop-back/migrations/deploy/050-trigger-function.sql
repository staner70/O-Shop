-- Deploy eshop:050-trigger-function to pg

BEGIN;

CREATE OR REPLACE FUNCTION trigger_set_timestamp() 
RETURNS TRIGGER AS $$ 
BEGIN 
  NEW.updated_at = NOW(); 
  RETURN NEW; 
  END; 
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp 
BEFORE UPDATE ON "user" 
FOR EACH ROW 
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp 
BEFORE UPDATE ON "product" 
FOR EACH ROW 
EXECUTE PROCEDURE trigger_set_timestamp();

COMMIT;
