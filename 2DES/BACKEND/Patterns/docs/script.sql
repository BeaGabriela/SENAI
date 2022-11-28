drop database if exists consultas;
create database consultas charset = UTF8 collate utf8_general_ci;
use consultas;

create table profissionais(
    id_profissionais integer not null auto_increment primary key,
    nome varchar(30) not null,
    especialidade varchar(40) not null
);

create table consultas(
    id_consulta integer not null auto_increment primary key,
    paciente varchar(20) not null,
    data Date not null,
    horario time not null,
    id_profissionais integer not null,
    foreign key (id_profissionais) references profissionais(id_profissionais)
);

create table tratamentos(
    id_tratamento integer not null auto_increment primary key,
    id_consulta integer not null,
    tratamento varchar(30) not null,
    valor float(6, 2) not null,
    foreign key (id_consulta) references consultas(id_consulta)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/SENAI/2DES/BACKEND/Patterns/docs/profissionais.csv'
INTO TABLE profissionais
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/SENAI/2DES/BACKEND/Patterns/docs/consultas.csv'
INTO TABLE consultas
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/SENAI/2DES/BACKEND/Patterns/docs/tratamentos.csv'
INTO TABLE tratamentos
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

drop view View_tabelas;
create view View_tabelas as
select p.id_profissionais, p.nome, p.especialidade, c.id_consulta, c.paciente, c.data, c.horario, t.id_tratamento, t.tratamento, t.valor from profissionais p
inner join consultas c on  p.id_profissionais = c.id_profissionais
inner join tratamentos t on t.id_consulta = c.id_consulta;

select * from View_tabelas;

