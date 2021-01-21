-- Deploy eshop:010-init to pg

BEGIN;

CREATE TABLE "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL -- unique
);


CREATE TABLE "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL, -- unique
    "color" TEXT NOT NULL
);

CREATE TABLE "shop" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "adress" TEXT NOT NULL, -- unique
    "tel" TEXT NOT NULL
);

CREATE TABLE "product" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL, -- unique
    "price" INT NOT NULL, -- type double
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "quantity" INT NOT NULL,
    "shop_id" INT REFERENCES "shop"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL, -- unique
    "password" TEXT NOT NULL,
    "role_id" INT REFERENCES "role"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW() CHECK("created_at" >= NOW()),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE "work" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "shop_id" INT REFERENCES "shop"("id"),
    "user_id" INT REFERENCES "user"("id")
);

CREATE TABLE "possess" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "product_id" INT REFERENCES "product"("id"),
    "category_id" INT REFERENCES "category"("id")
);
COMMIT;
