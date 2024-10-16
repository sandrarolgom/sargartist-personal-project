CREATE TABLE IF NOT EXISTS illustrations(
	id INT primary key auto_increment,
    name varchar(50) not null,
    fileName varchar(1000) not null
);
ALTER TABLE illustrations ADD COLUMN date_illustration date not null;