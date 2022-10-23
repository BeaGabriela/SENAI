drop database if exists projeto_estacionamento;
create database projeto_estacionamento charset=utf8 collate utf8_general_ci;
use projeto_estacionamento;

create table entrada (
    id integer not null auto_increment  primary key,
    vaga varchar(5) not null,
    placa varchar(10) not null,
    hora_entrada time not null,
    datas_entrada date not null,
    tipo varchar(6) not null
);

create table saida(
    id integer not null,
    datas_saida date not null,
    hora_saida time not null,
    foreign key (id) references entrada(id)
);

create table estacionar(  
      id integer not null,
    valor_total float (5,2) primary key,
      foreign key (id) references entrada(id)
);


show tables;

insert into entrada values(default, 'A0', 'abc123', curtime(), curdate(), 'C');
insert into entrada values(default, 'A2', 'qwe234', curtime(), curdate(), 'C');
insert into entrada values(default, 'M2', 'asd567', curtime(), curdate(), 'M');
insert into entrada values(default, 'M0', 'MLO097', curtime(), curdate(), 'M');

insert into saida values(1, curdate(),curtime() );
insert into saida values(2, '2022-09-15','17:10' );
insert into saida values(3, curdate(),curtime() );

insert into estacionar values(1, 20);
insert into estacionar values(2, 50);
insert into estacionar values(3, 100);

select * from entrada;
select * from saida;
select * from estacionar;

drop  view if exists View_vizua;
create view View_vizua as
select e.id, e.vaga, e.placa, e.hora_entrada, e.datas_entrada, s.datas_saida, s.hora_saida, es.valor_total as estacionar from 
entrada e inner join saida s 
on e.id = s.id
inner join estacionar es 
on s.id = es.id;

