drop database if exists onibus;
create database onibus charset=UTF8 collate utf8_general_ci;
use onibus;

create table motorista(
    cpf varchar(14) not null primary key,
    nome varchar (30) not null
   
);
create table telefones(
    cpf  varchar(14) not null,
    numero varchar(50) not null,
    foreign key(cpf) references motorista(cpf)
);
create table linhas(
   id_linha varchar(10) not null primary key,
    descricao varchar(50) not null
    
);

create table horarios (
   id_linha varchar(10) not null,
    horarios varchar(50) not null,
    foreign key(id_linha)references linhas(id_linha)
);
create table mot_linhas(
    cpf varchar(14) not null,
    id_linha varchar(10) not null,
    datas varchar(20) not null,
    foreign key(cpf)references motorista(cpf),
    foreign key(id_linha)references linhas(id_linha)
     
);


describe motorista;
describe telefones;
describe linhas;
describe horarios;
describe mot_linhas;

show tables;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/onibus/docs/cpf.csv'
INTO TABLE motorista
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from motorista;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/onibus/docs/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/onibus/docs/linhas.csv'
INTO TABLE linhas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from linhas;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/onibus/docs/horarios.csv'
INTO TABLE horarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from horarios;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/onibus/docs/mot_linhas.csv'
INTO TABLE mot_linhas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from mot_linhas;

create view vw_onibus as
select m.cpf, m.nome, ml.id_linha, ml.datas as mot_linhas from motorista m
inner join  mot_linhas ml
on  m.cpf = ml.cpf;

select * from vw_onibus;

create view vw_horarios as
select l.id_linha, l.descricao, h.horarios horarios from linhas l
inner join horarios h
on  l.id_linha = h.id_linha;

select * from vw_horarios;






-- Date pelo BCD - curdate()
-- curTime()
--curYEAR()
--Date sub() --tira
--Date_add(curdate(), interval 30 days)

