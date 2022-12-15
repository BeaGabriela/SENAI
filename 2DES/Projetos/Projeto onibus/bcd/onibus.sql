drop database if exists onibus;
create database onibus charset=utf8 collate utf8_general_ci;
use onibus;


create table ladoDireito(
    id_assentoD integer not null auto_increment primary key,
    assentoD varchar(20) not null
);


insert into ladoDireito values(default, '1');
insert into ladoDireito values(default, '2');
insert into ladoDireito values(default, '3');
insert into ladoDireito values(default, '4');
insert into ladoDireito values(default, '5');
insert into ladoDireito values(default, '6');


select * from ladoDireito;
select * from ladoEsquerdo;