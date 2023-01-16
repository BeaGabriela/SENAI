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

INSERT INTO topico VALUES (default,'Cafe'), (default, 'Cha'), (default, 'Chocolate'), (default, 'Comidas');

create table comidas(
    id_comida integer not null auto_increment primary key,
    id_topico integer not null,
    img varchar(40) not null,
    nome_comida varchar(40) not null,
    descricao varchar(100) not null,
    valor float(6,2) not null,

    foreign key(id_topico) references topico(id_topico)
);

INSERT INTO comidas VALUES (default, 1 ,'cappucinno.png', 'Cappucino', 'cafe, leite...', 10.00);
INSERT INTO comidas VALUES (default, 1 ,'expressoEspecial.png', 'Expresso Especial', 'cafe...', 8.00);
INSERT INTO comidas VALUES (default, 1 ,'latte.png', 'Latte', 'cafe, leite...', 9.00);
INSERT INTO comidas VALUES (default, 2 ,'cha.jpg', 'Chá', 'Aguá, ervas', 6.00);
INSERT INTO comidas VALUES (default, 4 ,'cha.jpg', 'Suco', 'Agua, fruta...', 5.00);
INSERT INTO comidas VALUES (default, 3 ,'cappucinno.png', 'chococinno', 'chocolate em po, leite...', 11.00);

create table popular(
    id_popular integer not null auto_increment primary key,
    id_comidas integer not null,

    foreign key(id_comidas) references comidas(id_comida)
);

INSERT INTO popular VALUE(default, 1);
INSERT INTO popular VALUE(default, 3);
INSERT INTO popular VALUE(default, 4);


drop view if exists vw_classe;
create view vw_classe as
select u.nome, u.email, u.senha, u.id_classificacao, c.role as role
from usuarios u inner join  classificacao c 
on c.id_classificacao = u.id_classificacao;

drop view if exists vw_comida;
create view vw_comida as
select c.id_comida, c.id_topico, c.img, c.nome_comida, c.descricao, c.valor, t.topico as topico
from comidas c inner join  topico t 
on c.id_topico = t.id_topico;

drop view if exists vw_popular;
create view vw_popular as
select c.id_comida, c.id_topico, c.img, c.nome_comida, c.descricao, c.valor, t.topico, p.id_popular as popular
from comidas c inner join  topico t 
on c.id_topico = t.id_topico
inner join popular p 
on p.id_comidas = c.id_comida;




