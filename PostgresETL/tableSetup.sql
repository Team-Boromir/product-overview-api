-- This script was generated by a beta version of the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public."Product"
(
    id integer NOT NULL,
    name character varying,
    slogan character varying,
    description character varying,
    category character varying,
    default_price integer,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Style"
(
    id integer NOT NULL,
    product_id integer,
    name character varying,
    sale_price integer,
    original_price integer,
    default_style boolean,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Photo"
(
    id integer NOT NULL,
    style_id integer,
    url character varying,
    thumbnail_url character varying,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Sku"
(
    id integer NOT NULL,
    style_id integer,
    size character varying,
    quantity integer,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Feature"
(
    id integer NOT NULL,
    product_id integer,
    feature character varying,
    value character varying,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Related_Product"
(
    id integer NOT NULL,
    current_product_id integer,
    related_product_id integer,
    PRIMARY KEY (id)
);
END;