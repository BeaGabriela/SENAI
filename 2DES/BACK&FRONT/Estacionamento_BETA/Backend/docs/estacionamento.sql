drop database if exists estacionamento;
create database estacionamento charset=utf8 collate utf8_general_ci;
use estacionamento;

create table funcionarios (
    login varchar(30) not null primary key,
    password varchar(30) not null,
    nome varchar(20) not null
);

create table entrada (
    id integer not null auto_increment  primary key,
    vaga varchar(5) not null,
    placa varchar(10) not null,
    hora_entrada time not null,
    datas_entrada date not null,
    datas_saida date,
    hora_saida time,
    tipo varchar(6) not null
);

create table vagas (
    id integer not null,
    vaga_ocupada boolean,

    foreign key (id) references entrada(id)
);

create table valor(  
      id integer not null,
      tempo float(5,2),
      valor_total float (5,2) ,
      foreign key (id) references entrada(id)
);


show tables;



--Trigger para calcular o valor
drop trigger if exists update_valor;
delimiter //
create trigger update_valor
after update on entrada
for each row
begin
	DECLARE tempo INTEGER;
    SET tempo := (SELECT ROUND((TIME_TO_SEC(TIMEDIFF(NEW.hora_saida, (SELECT hora_entrada FROM entrada WHERE id = NEW.id)))/60), 0));
	INSERT INTO valor VALUES (NEW.id, tempo, tempo*0.5);
end //
delimiter ;


--Trigger para avaliar as vagas ocupadas
drop trigger if exists vagas_ocupadas;
delimiter //
create trigger vagas_ocupadas
after insert on entrada
for each row
begin
	insert vagas set id = new.id, vaga_ocupada = 1;
end //
delimiter ;

--trigger para avaliar as vagas desocupadas.
drop trigger if exists vagas_desocupadas;
delimiter //
create trigger vagas_desocupadas
after update on entrada
for each row
begin
	update vagas set id = new.id, vaga_ocupada = 0 where id = new.id;
end //
delimiter ;


--View para mostrar os valores da entrada junto com om inidce das vagas. 
--Se for 1, ela esta ocupada, caso não ela esta desocupada.
drop view if exists View_entradas;
create view View_entradas as
select e.id, e.vaga, e.placa, e.hora_entrada, e.datas_entrada, e.hora_saida, e.datas_saida, e.tipo, v.vaga_ocupada as Vagas from
entrada e inner join vagas v
on e.id = v.id;


insert into entrada values (default, 'A0', 'ABC1234', curtime(), curdate(), 'ABERTO', 'ABERTO', 'C');
update entrada set datas_saida = curdate() where id=1;
update entrada set hora_saida = '14:00' where id=1;

insert into entrada values (default, 'A2', 'CDE345', '13:23:00', '2022-11-13', 'ABERTO', 'ABERTO', 'C');
update entrada set datas_saida = '2022-11-06' where id=2;
update entrada set hora_saida = '15:00' where id=2;

insert into funcionarios values ('user12','teste12', 'Marcos');
insert into funcionarios values('u5er','testeteste','Caroline');
