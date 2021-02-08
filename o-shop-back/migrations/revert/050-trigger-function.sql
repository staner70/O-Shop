-- Revert eshop:050-trigger-function from pg

BEGIN;

drop trigger set_timestamp ON "user" ;
drop trigger set_timestamp ON "product";

drop function trigger_set_timestamp;

COMMIT;
