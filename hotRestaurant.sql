DROP DATABASE IF EXISTS hotRestaurant;
CREATE DATABASE hotRestaurant;

USE hotRestaurant;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  customer VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone_number INT default 0,
  PRIMARY KEY (id)
);