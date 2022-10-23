drop database if exists lojinha;
CREATE DATABASE lojinha  CHARSET = utf8 collate utf8_general_ci;

USE lojinha;

CREATE TABLE produto (
    id integer not null primary key auto_increment,
    cod varchar(10) not null unique,
    nome varchar(50) not null,
    quantidade integer not null,
    preco float(5,2) not null
);

insert into produto VALUES (default, 'CJ1234', 'Calça Jeans Super Confortavel', 10, 90.00);
insert into produto VALUES (default, 'MO5214', 'Moletom Super Descolado', 5, 120.00);



