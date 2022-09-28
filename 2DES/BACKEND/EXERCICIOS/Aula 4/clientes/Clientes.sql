drop database if exists Clientes_Dados;
create database Clientes_Dados charset=UTF8 collate=utf8_general_ci;
use Clientes_Dados;

create table clientes (
    id_cliente integer not null primary key auto_increment,
    nome varchar (20) not null,
    nascimento varchar (20) not null,
    sexo varchar(10) not null,
    peso varchar(10) not null
);

create table telefones(
    id_cliente integer not null,
    telefoness varchar(15) not null,
    foreign key (id_cliente) references clientes (id_cliente)

);
    describe clientes;
    describe telefones;
    show tables;

    -- USAR ;
   -- DML
insert into clientes values(1,"Ana de Souza de Oliveira","2000-05-22","M",65);
insert into clientes values(2,"Ana Oliveira Oliveira","1990-08-23","T",88);
insert into clientes values(3,"Lúcia da Silva de Souza","1988-06-14","F",45.5);
insert into clientes values(4,"Marcos de Souza Castro","2002-07-13","M",98);
insert into clientes values(5,"Maria Oliveira Castro","2005-08-14","T",101);
insert into clientes values(6,"Jurema de Souza Castro","2007-06-15","F",80);
select * from clientes;

LOAD DATA INFILE 'C:\Users\Desenvolvimento.DESKTOP-CJ165MI\Desktop\JavaScript\BackEnd\Aula 4\telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

-- select * from clientes where id_cliente = 3;
-- select * from clientes where nome = 'Ana Oliveira Oliveira';
-- select * from clientes where nome like  "Ana%";
-- select * from clientes where peso > 90 AND nome like "%Oliveira%";