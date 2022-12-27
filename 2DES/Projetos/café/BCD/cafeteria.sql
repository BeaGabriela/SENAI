drop database if exists cafeteria;
create database cafeteria charset=UTF8 collate utf8_general_ci;
use cafeteria;

create table classificacao(
    id_classificacao integer not null auto_increment primary key,
    classe varchar(20) not null
);

create table usuarios(
    id_user integer not null auto_increment primary key,
    nome varchar(20) not null,
    email varchar(30) not null,
    senha varchar(30) not null,
    id_classificacao integer not null,

    foreign key (id_classificacao) references classificacao(id_classificacao)
);

insert into classificacao values (default, 'admin');
insert into classificacao values (default, 'user');

insert into usuarios values (default, 'maria', 'maria@gmail.com', 'ma123', 1);
insert into usuarios values (default, 'carlos', 'carlos@gmail.com', 'carli', 2);

drop view if exists vw_classe;
create view vw_classe as
select u.nome, u.email, u.senha, u.id_classificacao, c.classe as Classe
from usuarios u inner join  classificacao c 
on c.id_classificacao = u.id_classificacao;