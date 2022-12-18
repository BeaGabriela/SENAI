drop database if exists onibus;
create database onibus charset=utf8 collate utf8_general_ci;
use onibus;


create table ladoDireito(
    id_assentoD integer not null auto_increment primary key,
    assentoD varchar(20) not null
);

create table passageiros(
    id_passageiro integer not null auto_increment primary key,
    nome varchar(30) not null,
    data DATE not null,
    cpf varchar(13) not null,
    dataViagem date not null, 
    horaViagem TIME NOT NULL, 
    valorTotal FLOAT(5, 2) NOT NULL,
    assento varchar(20) not null
);


insert into ladoDireito values(default, '1');
insert into ladoDireito values(default, '2');
insert into ladoDireito values(default, '3');
insert into ladoDireito values(default, '4');
insert into ladoDireito values(default, '5');
insert into ladoDireito values(default, '6');

insert into passageiros values(default, 'Marcos', '2022-12-21', '12312312345', curdate(), curtime(), 50.00, 'A1');

select * from ladoDireito;
select * from ladoEsquerdo;