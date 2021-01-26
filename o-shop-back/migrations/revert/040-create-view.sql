-- Revert eshop:030-create-view from pg

BEGIN;

DROP VIEW userView;
DROP VIEW productView;

COMMIT;
