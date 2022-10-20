drop database if exists clientes_blo;
create database clientes_blo charset= UTF8 collate utf8_general_ci;
use clientes_blo;

create table clientes (
    id integer primary key not null auto_increment,
    nome varchar(5),
    telefone varchar(50),
    avatar mediumblob
);

insert into clientes values (null, 'Marcos', )