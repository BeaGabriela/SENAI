drop database if exists arquivos;
create database arquivos charset = UTF8 collate utf8_general_ci;
use arquivos;

create table alunos (
    id_aluno integer not null auto_increment primary key,
    nome varchar(30) not null,
    nascimento Date not null
);

create table cursos(
    id_curso integer not null auto_increment primary key,
    curso varchar(50) not null,
    duracao varchar(30) not null
);

create table cursados(
    id_aluno integer not null,
    id_curso integer not null,
    data Date not null,

    foreign key (id_aluno) references alunos(id_aluno),
    foreign key (id_curso) references cursos(id_curso)

);

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/SENAI/2DES/BACKEND/Prova_Patterns/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/SENAI/2DES/BACKEND/Prova_Patterns/docs/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/SENAI/2DES/BACKEND/Prova_Patterns/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


drop view V_cursos;
create view V_cursos as
select a.id_aluno, a.nome, a.nascimento, c.id_curso, c.curso, c.duracao, cr.data from alunos a
inner join cursados cr on a.id_aluno = cr.id_aluno
inner join cursos c on cr.id_curso = c.id_curso;
