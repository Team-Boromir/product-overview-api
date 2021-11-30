--command for importing feature data

\\copy public.\"Feature\" (id, product_id, feature, value) FROM '/Users/mievro/Desktop/HackReactor/Code/SDC/product-overview-api/OldData/features.csv' DELIMITER ',' CSV HEADER QUOTE '\"' NULL 'null' ESCAPE '''';



--command for importing photo data

\\copy public.\"Photo\" (id, style_id, url, thumbnail_url) FROM '/Users/mievro/Desktop/HackReactor/Code/SDC/product-overview-api/OldData/photos.csv' DELIMITER ',' CSV HEADER QUOTE '\"' NULL 'null' ESCAPE '''';


--command for importing product data

\\copy public.\"Product\" (id, name, slogan, description, category, default_price) FROM '/Users/mievro/Desktop/HackReactor/Code/SDC/product-overview-api/OldData/product.csv' DELIMITER ',' CSV HEADER QUOTE '\"' NULL 'null' ESCAPE '''';



--command for importing related product data

\\copy public.\"Related_Product\" (id, current_product_id, related_product_id) FROM '/Users/mievro/Desktop/HackReactor/Code/SDC/product-overview-api/OldData/related.csv' DELIMITER ',' CSV HEADER QUOTE '\"' NULL 'null' ESCAPE '''';


--command for importing sku data

\\copy public.\"Sku\" (id, style_id, size, quantity) FROM '/Users/mievro/Desktop/HackReactor/Code/SDC/product-overview-api/OldData/skus.csv' DELIMITER ',' CSV HEADER QUOTE '\"' NULL 'null' ESCAPE '''';



--command for importing style data

\\copy public.\"Style\" (id, product_id, name, sale_price, original_price, default_style) FROM '/Users/mievro/Desktop/HackReactor/Code/SDC/product-overview-api/OldData/styles.csv' DELIMITER ',' CSV HEADER QUOTE '\"' NULL 'null' ESCAPE '''';