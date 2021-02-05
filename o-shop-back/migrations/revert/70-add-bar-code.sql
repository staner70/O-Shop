-- Revert eshop:70-add-bar-code from pg

BEGIN;

ALTER TABLE product
DROP bar_code TYPE NUMBER;

COMMIT;
