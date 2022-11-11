drop database if exists banco;
create database banco charset=utf8 collate utf8_general_ci;
use banco;

create table cliente (
    nome varchar(30) not null primary key,
    cpf varchar(14) not null,
    ddd varchar(5) not null,
    telefone varchar(14) not null,
    tipo varchar(14) not null,
    logradouro varchar(40) not null,
    bairro varchar(40) not null,
    n_casa varchar(40) not null,
    cep varchar(20) not null,
    cidade varchar(30) not null,
    estado varchar(20) not null
);

insert into cliente value('lucas', '12345609876', '19', '998271029', 'celular', 'Judite dos santos pinto', 'Cruzeiro do sul','12', '13917-110','Jauariuna', 'São Paulo');




