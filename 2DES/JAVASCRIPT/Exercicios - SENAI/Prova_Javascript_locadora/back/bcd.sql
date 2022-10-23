drop database if exists locacoes;
create database locacoes charset=utf8 collate utf8_general_ci;
use locacoes;

create table usuarios(
    codigo integer not null auto_increment primary key,
    nome varchar(20) not null,
    endereco varchar(100) not null,
    telefone varchar(100) not null
);

create table filmes(
    codig integer not null auto_increment primary key,
    nomeFi varchar(20) not null,
    genero varchar(20) not null
);

create table aluga(
    id integer not null auto_increment primary key,
    codigo integer not null,
    codig integer not null,
    data_locacao varchar(20) not null,
    data_devolucao varchar(20),
    foreign key (codigo) references usuarios(codigo),
    foreign key (codig) references filmes(codig)
);

describe usuarios;
describe filmes;
describe aluga;

show tables;



--LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/Exercicios - SENAI/Prova_Javascript/back/clientes.csv'
-- LOAD DATA INFILE 'C:/Users/Beatriz/Desktop/JavaScript/Exercicios - SENAI/Prova_Javascript/back/clientes.csv'
INTO TABLE usuarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from usuarios;




-- LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/Exercicios - SENAI/Prova_Javascript/back/filmes.csv'
-- LOAD DATA INFILE 'C:/Users/Beatriz/Desktop/JavaScript/Exercicios - SENAI/Prova_Javascript/back/filmes.csv'
INTO TABLE filmes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from filmes;


-- LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/Exercicios - SENAI/Prova_Javascript/back/locacoes.csv'
-- LOAD DATA INFILE 'C:/Users/Beatriz/Desktop/JavaScript/Exercicios - SENAI/Prova_Javascript/back/locacoes.csv'
INTO TABLE aluga
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from aluga;



create view vw_devolucoes as
select l.id, c.nome, c.telefone, f.nomeFi as filmes, l.data_locacao from usuarios c
inner join aluga l on c.codigo = l.codigo
inner join filmes f on l.codig = f.codig where l.data_devolucao is null;
select * from vw_devolucoes;






