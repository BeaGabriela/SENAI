drop database if exists Emprestimo;
create database Emprestimo charset=UTF8 collate utf8_general_ci;
use Emprestimo;

create table  clientes (
    cpf varchar(15) not null primary key,
    pri_nome varchar(20)not null, 
    sobrenome varchar(20) not null,
    cep varchar(9) not null,
    complemento varchar(20)
);

create table telefones(
    cpf varchar(12) not null,
    tipo varchar(10) not null,
    numero varchar(20) not null,
    foreign key (cpf) references clientes(cpf)
);

create table emprestimos(
    id_emprestimo integer auto_increment not null primary key,
    cpf varchar(15) not null,
    data date not null,
    capital float(5.2) not null,
    n_parcelas integer not null,
    taxa_juros integer not null,
    impostos integer not null,
    montante float(5.2),
    foreign key (cpf) references clientes(cpf)
);



create table parcelas(
    id integer not null primary key auto_increment,
    id_emprestimo integer not null,
    vencimento date not null,
    data_pagamento varchar(10),
    valor float(5.2) not null,
    val_recebido float(5.2),
    diferenca float(5.2),
    foreign key (id_emprestimo) references emprestimos(id_emprestimo)
);

describe clientes;
describe telefones;
describe emprestimos;
describe parcelas;

show tables;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/Javascript-2.0/BackEnd/Desafios/Emprestimo/docs/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from clientes;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/Javascript-2.0/BackEnd/Desafios/Emprestimo/docs/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/Javascript-2.0/BackEnd/Desafios/Emprestimo/docs/emprestimos.csv'
INTO TABLE emprestimos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from emprestimos;

-- drop trigger if exists parcelinhas;
-- create trigger parcelinhas  after insert on emprestimos
-- for each row
-- insert into parcelas values (default, new.id_emprestimo, '30/08/2022', '10/09/2022', 200.00, null, null);

-- insert into  emprestimos value (default,"456.761.940-49",curdate(),1000,10,1,200,null);
-- select * from parcelas;

 

drop trigger if exists parcelinhas;
create trigger parcelinhas  after update on emprestimos
for each row
insert into parcelas values (default, new.id_emprestimo, '30/08/2022', '10/09/2022', 200.00, null, null);


update emprestimos set montante=(select sum(capital*(pow((1+taxa_juros),n_parcelas)+impostos)) from emprestimos where id_emprestimo = 2) where id_emprestimo = 2;
select * from parcelas;

    