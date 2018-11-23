DROP DATABASE IF EXISTS employees;

CREATE DATABASE employees;

USE employees;

CREATE TABLE workers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar (50) NOT NULL,
  company varchar(50) NOT NULL,
  salary varchar(50) NOT NULL,
  age varchar(50) NOT NULL,
  phone varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);
