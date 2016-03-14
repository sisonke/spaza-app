DROP TABLE categoriesc if exists;
CREATE TABLE categories (
	id int not null auto_increment 	primary key,
	category_name char(100),
	CONSTRAINT uc_category_name UNIQUE (category_name)
);

DROP TABLE suppliers if exists;
CREATE TABLE suppliers (
	id int not null auto_increment primary key,
    suppliers_name char(100),
    CONSTRAINT uc_suppliers_name UNIQUE (suppliers_name)
);

DROP TABLE products if exist;
CREATE TABLE products (
	id int not null auto_increment   primary key,
    product_name char(100),
    category_id int not null,
    CONSTRAINT uc_product_name  UNIQUE (product_name),
    foreign key (category_id) references categories(id)
);



DROP TABLE sales if exist;
CREATE TABLE sales_table (
	id int not null auto_increment primary key,
    price int not null,
    qty int,
    sales_date date ,
    product_id int,
    foreign key (product_id) references products(id)
);

DROP TABLE if exists purchases;
CREATE TABLE purchases (
  id int not null auto_increment primary key,
	product_id int,
	supplier_id int,
	purchases_date date,
	qty int,
	price decimal,
	foreign key(product_id) references products(id),
	foreign key(supplier_id) references suppliers(id)
);

DROP TABLE if exist UserRoles;
CREATE TABLE UserRoles (
	 id int not null auto_increment primary key,
	 username varchar(100),
	 password varchar(100),
	 admin_user varchar(100),
	 general_user  varchar(100)
);
