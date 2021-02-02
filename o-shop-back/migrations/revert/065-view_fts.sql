-- Revert eshop:065-view_fts from pg

BEGIN;

DROP VIEW ftsView;

COMMIT;
