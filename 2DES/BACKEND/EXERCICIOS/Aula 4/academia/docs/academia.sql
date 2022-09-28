drop database if exists academia;
create database academia charset=UTF8 collate utf8_general_ci;
use academia;


create table alunos(
    id_aluno integer not null primary key,
    nome varchar (20) not null,
    nascimento varchar(20) not null,
    sexo varchar(10) not null,
    peso varchar (10) not null
);

create table telefones(
    id_aluno integer not null,
    numero varchar(15) not null,
    foreign key (id_aluno) references alunos(id_aluno)

);

create table Aparelho(
    id_aparelho integer not null primary key,
    nome varchar (20) not null
   
);

create table Exercicio(
    id_exercicio integer not null primary key,
    descricao varchar(50) not null,
    grupo_muscular varchar(50) not null,
    id_aparelho integer not null,
    foreign key (id_aparelho) references Aparelho(id_aparelho)

);

create table fichas(
     id_aluno integer not null,
    id_exercicio integer not null,
    dia_semana varchar(20) not null,
    serie varchar (50) not null,
    foreign key (id_aluno) references alunos(id_aluno),
    foreign key (id_exercicio) references Exercicio(id_exercicio)
   
);

describe alunos;
describe telefones;
describe Aparelho;
describe Exercicio;
describe fichas;
show tables;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/academia/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/academia/docs/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;



LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/academia/docs/aparelho.csv'
INTO TABLE Aparelho
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/academia/docs/exercicio.csv'
INTO TABLE Exercicio
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/academia/docs/fichas.csv'
INTO TABLE fichas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from alunos;
select * from telefones;
select * from Aparelho;
select * from Exercicio;
select * from fichas;



create view vw_alunos as
select a.id_aluno, a.nome, a.nascimento, a.sexo, a.peso, t.numero as telefones from alunos a
inner join telefones t 
on a.id_aluno = t.id_aluno;

select * from vw_alunos;

create view vw_fichas as
select a.id_aluno, a.nome, f.id_exercicio, f.dia_semana, f.serie as fichas from alunos a
inner join fichas f 
on a.id_aluno = f.id_aluno;

select * from vw_fichas;

create view vw_exercicio as
select f.id_exercicio, f.dia_semana, f.serie, e.descricao, e.grupo_muscular, e.id_aparelho as Exercicio from fichas f
inner join Exercicio e 
on f.id_exercicio = e.id_exercicio;

select * from vw_exercicio;


 
