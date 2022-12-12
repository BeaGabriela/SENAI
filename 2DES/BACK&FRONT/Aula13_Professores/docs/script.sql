drop database if exists professores;
create database professores charset=utf8 collate utf8_general_ci;
use professores;

create table professores (
    id_prof integer not null auto_increment primary key,
    nome_prof varchar(30) not null,
    telProf varchar(20) not null, 
    formacao varchar(30) not null
);

create table turmas(
    cod_turma integer not null auto_increment primary key,
    horario time not null,
    tipo varchar(30) not null
);

create table alunos(
    ra integer not null auto_increment primary key,
    nome varchar(30) not null,
    sexo varchar(10) not null,
    dnascimento date not null
);

create table disciplinas(
    id_disc integer not null auto_increment primary key,
    nome_disc varchar(30) not null,
);

create table horarios(
    id_hor integer not null auto_increment primary key,
    inicio date not null,
    fim date not null
);