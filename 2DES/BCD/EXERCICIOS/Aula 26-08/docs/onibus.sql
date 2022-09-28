drop database if exists onibus;
create database onibus charset=UTF8 collate utf8_general_ci;
use onibus;

create table motorista(
    cpf varchar(14) not null primary key,
    nome varchar (30) not null
   
);
create table telefones(
    cpf  varchar(14) not null,
    telefones varchar(100) not null,
    foreign key(cpf) references motorista(cpf)
);
create table linhas(
    id_linha integer not null primary key,
    descricao varchar(50) not null
    
);

create table horarios (
    id_linha integer not null primary key,
    horarios varchar(50) not null,
    foreign key(id_linha)references linhas(id_linha)
);
create table mot_linhas(
    cpf varchar(14) not null,
     id_linha integer not null,
    datas varchar(20) not null,
    foreign key(id_linha)references linhas(id_linha),
     foreign key(cpf)references motorista(cpf)
);


describe motorista;
describe telefones;
describe linhas;
describe horarios;
describe mot_linhas;
show tables;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/onibus/cpf.csv'
INTO TABLE motorista
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from motorista;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/onibus/telefones.csv' --Erro.
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/onibus/linhas.csv'
INTO TABLE linhas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from linhas;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/onibus/horarios.csv'
INTO TABLE horarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from horarios;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/onibus/mot_linhas.csv'
INTO TABLE mot_linhas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from mot_linhas;


-- Date pelo BCD - curdate()
-- curTime()
--curYEAR()
--Date sub() --tira
--Date_add(curdate(), interval 30 days)