drop database if exists cafeteria;
create database cafeteria charset=UTF8 collate utf8_general_ci;
use cafeteria;

create table classificacao(
    id_classificacao integer not null auto_increment primary key,
    role varchar(20) not null
);

insert into classificacao values (default, 'admin');
insert into classificacao values (default, 'user');

create table usuarios(
    id_user integer not null auto_increment primary key,
    nome varchar(20) not null,
    email varchar(30) not null,
    senha varchar(30) not null,
    id_classificacao integer not null,

    foreign key (id_classificacao) references classificacao(id_classificacao)
);

insert into usuarios values (default, 'maria', 'maria@gmail.com', 'ma123', 1);
insert into usuarios values (default, 'carlos', 'carlos@gmail.com', 'carli', 2);

CREATE TABLE topico(
    id_topico integer not null auto_increment primary key,
    topico varchar(30) not null
);

INSERT INTO topico VALUES (default,'Café'), (default, 'Chá'), (default, 'Chocolate'), (default, 'Comidas');

create table comidas(
    id_comida integer not null auto_increment primary key,
    id_topico integer not null,
    img mediumblob,
    nome_comida varchar(40) not null,
    descricao varchar(100) not null,
    valor float(6,2) not null,

    foreign key(id_topico) references topico(id_topico)
);

INSERT INTO comidas VALUES (default, 1 , to_base64(LOAD_FILE('C:/Users/Beatriz/Desktop/SENAI/2DES/Projetos/café/frontend/assets/cha.jpg')), 'cappucino', 'cafe, leite...', 10.00);

create table popular(
    id_popular integer not null auto_increment primary key,
    id_comidas integer not null,

    foreign key(id_comidas) references comidas(id_comida)
);

INSERT INTO popular VALUE(default, 1);


drop view if exists vw_classe;
create view vw_classe as
select u.nome, u.email, u.senha, u.id_classificacao, c.role as role
from usuarios u inner join  classificacao c 
on c.id_classificacao = u.id_classificacao;